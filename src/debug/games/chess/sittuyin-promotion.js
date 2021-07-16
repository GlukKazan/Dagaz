(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "sittuyin-promotion") {
      checkVersion(design, name, value);
  }
}

Dagaz.Model.moveToString = function(move) {
  var r = "";
  _.each(move.actions, function(a) {
      if (a[1] === null) return;
      if (r != "") {
          r = r + " ";
      }
      if (a[0] != null) {
          r = r + Dagaz.Model.posToString(a[0][0]);
          if (a[1] !== null) {
              r = r + '-';
          }
      }
      if (a[1] !== null) {
          r = r + Dagaz.Model.posToString(a[1][0]);
      }
      if ((a[2] !== null) && ((a[0] != null) || (a[1] !== null))) {
          r = r + " " + a[2][0].getType();
      }
  });
  return r;
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var pawn   = design.getPieceType("Ne");
  var queen  = design.getPieceType("Sit-ke");
  _.each(board.moves, function(m) {
      if (m.isSimpleMove() && (m.actions[0][2] !== null)) {
          var piece = board.getPiece(m.actions[0][0][0]);
          var promoted = m.actions[0][2][0];
          if ((piece.type == pawn) && (promoted.type == queen)) {
               var pieces = _.filter(design.allPositions(), function(pos) {
                   var piece = board.getPiece(pos);
                   if (piece === null) return false;
                   if (piece.player != board.player) return false;
                   return piece.type == queen;
               });
               if (pieces.length > 0) {
                   if (m.actions[0][0][0] == m.actions[0][1][0]) {
                       m.failed = true;
                   } else {
                       m.actions[0][2] = [ piece ];
                   }
               }
          }
      }
  });
  CheckInvariants(board);
}

})();
