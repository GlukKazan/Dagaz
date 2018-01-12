(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "apocalypse-promotion") {
     checkVersion(design, name, value);
  }
}

var countPieces = function(design, board, type) {
  var r = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.type == type)) {
          r++;
      }
  });
  return r;
}

var getPrice = function(design, board, move) {
  if (move.isSimpleMove()) {
      var pos = move.actions[0][0][0];
      var piece = board.getPiece(pos);
      if (piece !== null) {
          return design.price[piece.type];
      }
  }
  return 0;
}

Dagaz.Model.join = function(design, board, a, b) {
  var x = getPrice(design, board, a);
  var y = getPrice(design, board, b);
  if (x > y) {
      return Dagaz.Model.join(design, board, b, a);
  }
  var pos = null;
  var knight = design.getPieceType("Knight");
  var limit = 4 - countPieces(design, board, knight);
  _.each(a.actions, function(action) {
      if ((action[0] !== null) && (action[1] !== null)) {
           pos = action[1][0];
           var target = board.getPiece(pos);
           if ((target !== null) && (target.type == knight)) {
               limit++;
           }
           var piece = board.getPiece(action[0][0]);
           if ((piece !== null) && (action[2] !== null) && (action[2][0].type != piece.type)) {
               if (limit > 0) {
                   limit--;
               } else {
                   action[2] = [ piece ];
               }
           }
      }
  });
  _.each(b.actions, function(action) {
      var target = board.getPiece(action[1][0]);
      if ((target !== null) && (target.type == knight)) {
          limit++;
      }
      var piece = board.getPiece(action[0][0]);
      if ((piece !== null) && (action[2] !== null) && (action[2][0].type != piece.type)) {
          if (limit > 0) {
              limit--;
          } else {
              action[2] = [ piece ];
          }
      }
      a.actions.push(action);
      if ((x == y) && (action[0] !== null) && (action[1] !== null) && 
          (pos !== null) && (action[1][0] == pos)) {
           a.capturePiece(pos);
      }
  });
  return a;
}

var checkGoals = Dagaz.Model.checkGoals;

Dagaz.Model.checkGoals = function(design, board, player) {
  var knight  = design.getPieceType("Knight");
  var enemies = 0;
  var friends = 0;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (piece.type == knight)) {
          if (piece.player != player) {
              enemies++;
          } else {
              friends++;
          }
      }
  });
  if (enemies < 1) {
      return 1;
  }
  if (friends < 1) {
      return -1;
  }
  return checkGoals(design, board, player);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = board.game.design;
  var knight = design.getPieceType("Knight");
  var limit  = 4 - countPieces(design, board, knight);
  _.each(board.moves, function(m) {
      _.chain(m.actions)
       .filter(function (a) {
            return (a[0] !== null) && (a[1] !== null);
        })
       .each(function (a) {
            var src   = a[0][0];
            var dst   = a[1][0];
            var piece = board.getPiece(src);
            if (piece !== null) {
                var enemy = board.getPiece(dst);
                if ((enemy !== null) && (enemy.type == knight)) {
                    limit++;
                }
                if ((a[2] !== null) && (a[2][0].type != piece.type)) {
                    if (limit > 0) {
                        limit--;
                    } else {
                        a[2] = [ piece ];
                    }
                }
            }
        });
  });
  CheckInvariants(board);
}

})();