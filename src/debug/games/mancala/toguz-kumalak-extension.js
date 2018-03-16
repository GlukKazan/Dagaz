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
      return null;
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
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
               if (ix < result.length) {
                   result[ix]++;
               } else {
                   piece = board.getPiece(pos);
                   if (piece === null) {
                       result.push(1);
                   } else {
                       result.push(piece.getValue(0) + 1);
                   }
               }
          }
          var pos = move.actions[0][0][0];
          for (var ix = 0; ix < result.length; ix++) {
               var player = board.player;
               if (!design.inZone(0, board.player, pos)) {
                   player = design.nextPlayer(player);
               }
               var piece = createPiece(design, player, result[ix]);
               if (piece === null) {
                   if (ix > 0) {
                       move.capturePiece(pos);
                   }
               } else {
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
               pos = design.navigate(board.player, pos, 0);
          }
      }
      console.log(move);
  });
  CheckInvariants(board);
}

})();