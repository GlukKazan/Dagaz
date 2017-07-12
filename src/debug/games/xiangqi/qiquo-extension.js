(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "qiquo-extension") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = board.game.design;
  var king   = design.getPieceType("Jiang");
  _.chain(board.moves)
   .filter(function(move) {
        return move.actions.length > 0;
    })
   .each(function(move) {
        _.chain(move.actions)
         .filter(function(action) {
              return (action[0] !== null) && (action[1] !== null);
          })
         .each(function(action) {
              var piece = board.getPiece(action[1][0]);
              if ((piece !== null) && (piece.type == king)) {
                   _.chain(design.allPositions())
                    .filter(function(pos) {
                         var p = board.getPiece(pos);
                         if (p === null) return false;
                         if (p.type == king) return false;
                         return p.player == piece.player;
                     })
                    .each(function(pos) {
                         move.capturePiece(pos);
                     });
              }
          });
    });
  CheckInvariants(board);
}

})();
