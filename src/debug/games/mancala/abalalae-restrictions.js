(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "abalalae-restrictions") {
      checkVersion(design, name, value);
  }
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = Dagaz.Model.design;
  var isForced = false;
  _.each(design.allPositions(), function(pos) {
      var piece = board.getPiece(pos);
      if ((piece !== null) && (+piece.getValue(0) < 0)) {
          isForced = true;
      }
  });
  if (isForced) {
      _.each(board.moves, function(move) {
          var pos = move.actions[0][0][0];
          var piece = board.getPiece(pos);
          if ((piece !== null) && (+piece.getValue(0) >= 0)) {
              move.failed = true;
          }
      });
  }
  CheckInvariants(board);
}

})();
