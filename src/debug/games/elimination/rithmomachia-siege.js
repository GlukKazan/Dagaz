(function() {

var checkVersion = Dagaz.Model.checkVersion;

Dagaz.Model.checkVersion = function(design, name, value) {
  if (name != "rithmomachia-siege") {
      checkVersion(design, name, value);
  }
}

var checkDirection = function(design, board, pos, dir, dirs, move) {
  var p = design.navigate(1, pos, dir);
  if (p === null) return;
  var piece = board.getPiece(p);
  if (piece === null) return;
  if (piece.player == board.player) return;
  for (var i = 0; i < dirs.length; i++) {
       var q = design.navigate(1, p, dirs[i]);
       if (q !== null) {
           var x = board.getPiece(q);
           if (x === null) return;
           if (x.player != board.player) return;
       }
  }
  move.capturePiece(p);
}

var CheckInvariants = Dagaz.Model.CheckInvariants;

Dagaz.Model.CheckInvariants = function(board) {
  var design = board.game.design;
  _.each(board.moves, function(move) {
      var pos = move.actions[0][1][0];
      checkDirection(design, board, pos, 0, [0, 2, 5], move);
      checkDirection(design, board, pos, 1, [1, 3, 4], move);
      checkDirection(design, board, pos, 2, [2, 0, 6], move);
      checkDirection(design, board, pos, 3, [3, 1, 7], move);
      checkDirection(design, board, pos, 4, [4, 1, 7], move);
      checkDirection(design, board, pos, 5, [5, 0, 6], move);
      checkDirection(design, board, pos, 6, [6, 2, 5], move);
      checkDirection(design, board, pos, 7, [7, 3, 4], move);
  });
  CheckInvariants(board);
}

})();
