(function() {

var cache = [];

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "toguz-kumalak-extension") {
      checkVersion(design, name, value);
  }
}

var createPiece = function(design, player, value) {
  if (value > 0) {
      if (!_.isUndefined(cache[player]) && !_.isUndefined(cache[player][value])) {
          return cache[player][value];
      }
      var r = Dagaz.Model.createPiece(0, player).setValue(0, value);
      if (_.isUndefined(cache[player])) {
          cache[player] = [];
      }
      cache[player][value] = r;
      return r;
  } else {
      if (value == -1) {
          return Dagaz.Model.createPiece(1, player);
      }
  }
  return null;
}

var toReserve = function(design, board, player, move, cnt) {
  if (cnt > 0) {
      if (player == 1) {
          var pos = Dagaz.Model.stringToPos("X1");
      } else {
          var pos = Dagaz.Model.stringToPos("X2");
      }
      piece = board.getPiece(pos);
      if (piece === null) {
          piece = Dagaz.Model.createPiece(2, player);
          piece = piece.setValue(0, cnt);
          move.dropPiece(pos, piece);
      } else {
          cnt += piece.getValue(0);
          piece = piece.setValue(0, cnt);
          move.movePiece(pos, pos, piece);
      }
  }
}

var canTuzdyk = function(design, board, pos, player) {
  if (design.inZone(0, player, pos) || design.inZone(1, player, pos)) return false;
  var p = design.navigate(player, pos, 1);
  if (p === null) return false;
  var piece = board.getPiece(p);
  if ((piece !== null) && (piece.type == 1)) return false;
  for (var p = 0; p < design.positions.length; p++) {
      piece = board.getPiece(p);
      if ((piece !== null) && (piece.player == player) && (piece.type == 1)) return false;
  }
  return true;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      var fr = 0; var er = 0;
      if (move.isSimpleMove()) {
          var pos = move.actions[0][0][0];
          var piece = board.getPiece(pos);
          var cnt = piece.getValue(0);
          if (_.isUndefined(cache[piece.player])) {
              cache[piece.player] = [];
              cache[piece.player][cnt] = piece;
          }
          var result = [];
          if (cnt > 1) {
              result.push(1);
              cnt--;
          } else {
              result.push(0);
          }
          for (var ix = 1; cnt > 0; cnt--, ix++) {
               pos = design.navigate(board.player, pos, 0);
               if (pos === null) {
                   move.failed = true;
                   return;
               }
               if (ix >= 18) {
                   ix = 0;
               }
               piece = board.getPiece(pos);
               if ((piece !== null) && (piece.type == 1)) {
                   if (ix >= result.length) {
                       result.push(-2);
                   }
                   if (piece.player == board.player) {
                       fr++;
                   } else {
                       er++;
                   }
               } else {
                   if (ix < result.length) {
                       result[ix]++;
                   } else {
                       if (piece === null) {
                           result.push(1);
                       } else {
                           result.push(piece.getValue(0) + 1);
                       }
                   }
               }
          }
          if (!design.inZone(0, board.player, pos)) {
              if (result[ix - 1] % 2 == 0) {
                  fr += result[ix - 1];
                  result[ix - 1] = 0;
              }
              if ((result[ix - 1] == 3) && canTuzdyk(design, board, pos, board.player)) {
                  fr += 3;
                  result[ix - 1] = -1;
              }
          }
          var pos = move.actions[0][0][0];
          for (var ix = 0; ix < result.length; ix++) {
               var player = board.player;
               if (!design.inZone(0, board.player, pos)) {
                   player = design.nextPlayer(player);
               }
               var piece = createPiece(design, player, result[ix]);
               if (result[ix] == 0) {
                   if (ix > 0) {
                       move.capturePiece(pos);
                   }
               } else {
                   if (piece !== null) {
                       if (ix == 1) {
                           move.actions[0][2] = [ piece ];
                       } else {
                           if ((ix > 0) && (board.getPiece(pos) !== null)) {
                               move.movePiece(pos, pos, piece);
                           } else {
                               move.dropPiece(pos, piece);
                           }
                       }
                   }
               }
               pos = design.navigate(board.player, pos, 0);
          }
          toReserve(design, board, board.player, move, fr);
          toReserve(design, board, design.nextPlayer(board.player), move, er);
      }
  });
  CheckInvariants(board);
}

})();
