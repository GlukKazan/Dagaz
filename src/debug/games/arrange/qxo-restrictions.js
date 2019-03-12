(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "qxo-restrictions") {
     checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  _.each(board.moves, function(move) {
      if (move.isDropMove()) {
          var piece = move.actions[0][2][0];
          var pos   = design.navigate(1, move.actions[0][1][0], 8);
          while (pos !== null) {
              var p = board.getPiece(pos);
              if ((p !== null) && (p.player == piece.player) && (p.type - 4 == piece.type)) {
                  move.failed = true;
              }
              pos = design.navigate(1, pos, 8);
          }
      }
  });
  CheckInvariants(board);
}

})();