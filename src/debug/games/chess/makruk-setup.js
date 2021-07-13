Dagaz.Controller.persistense = "none";
Dagaz.Model.WIDTH  = 8;
Dagaz.Model.HEIGHT = 8;

(function() {

var getName = function() {
  var str = window.location.pathname.toString();
  var result = str.match(/\/([^.\/]+)\./);
  if (result) {
      return result[1].replace("-board", "").replace("-ai", "");
  } else {
      return str;
  }
}

var badName = function(str) {
  var result = str.match(/[?&]game=([^&*]*)/);
  if (result) {
      return result[1] != getName();
  } else {
      return true;
  }
}

var getCookie = function() {
  var result = localStorage.getItem('dagaz.setup');
  if (result) {
      if (badName(result)) return "";
      return result;
  } else {
      return "";
  }
}

var getSetup = function(setup) {
  var str = window.location.search.toString();
  if (setup) {
      str = setup;
  }
  var result = str.match(/[?&]setup=([^&]*)/);
  if (result) {
      return result[1];
  } else {
      str = getCookie();
      result = str.match(/[?&]setup=([^&]*)/);
      if (result) {
          return result[1];
      } else {
          return "";
      }
  }
}

var getTurn = function(setup) {
  var str = window.location.search.toString();
  if (setup) {
      str = setup;
  }
  var result = str.match(/[?&]turn=(\d+)/);
  if (result) {
      return result[1];
  } else {
      str = getCookie();
      result = str.match(/[?&]turn=(\d+)/);
      if (result) {
          return result[1];
      } else {
          return "";
      }
  }
}

var createPiece = function(design, c) {
  if (c == 'P') return Dagaz.Model.createPiece(design.getPieceType("Bia"), 1);
  if (c == 'p') return Dagaz.Model.createPiece(design.getPieceType("Bia"), 2);
  if (c == 'R') return Dagaz.Model.createPiece(design.getPieceType("Ruea"), 1);
  if (c == 'r') return Dagaz.Model.createPiece(design.getPieceType("Ruea"), 2);
  if (c == 'N') return Dagaz.Model.createPiece(design.getPieceType("Ma"), 1);
  if (c == 'n') return Dagaz.Model.createPiece(design.getPieceType("Ma"), 2);
  if (c == 'B') return Dagaz.Model.createPiece(design.getPieceType("Khon"), 1);
  if (c == 'b') return Dagaz.Model.createPiece(design.getPieceType("Khon"), 2);
  if (c == 'Q') return Dagaz.Model.createPiece(design.getPieceType("Met"), 1);
  if (c == 'q') return Dagaz.Model.createPiece(design.getPieceType("Met"), 2);
  if (c == 'K') return Dagaz.Model.createPiece(design.getPieceType("Khun"), 1);
  if (c == 'k') return Dagaz.Model.createPiece(design.getPieceType("Khun"), 2);
  return null;
}

Dagaz.Model.setup = function(board, init) {
  var design = Dagaz.Model.design;
  var setup  = getSetup(init);
  var player = 1;
  if (setup) {
      board.clear();
      var pos = 0;
      for (var i = 0; i < setup.length; i++) {
           var c = setup[i];
           if (c != '/') {
               if ((c >= '0') && (c <= '9')) {
                   pos += +c;
               } else {
                   var piece = createPiece(design, c);
                   board.setPiece(pos, piece);
                   pos++;
               }
               if (pos >= Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT) break;
           }
      }
      var turn = getTurn(init);
      if (turn) {
          board.turn   = +turn;
          board.player = design.currPlayer(board.turn);
      }
  }
}

var getPieceNotation = function(design, piece) {
  var r = 'P';
  if (piece.type == design.getPieceType("Ruea"))   r = 'R';
  if (piece.type == design.getPieceType("Ma"))     r = 'N';
  if (piece.type == design.getPieceType("Khon"))   r = 'B';
  if (piece.type == design.getPieceType("Met"))    r = 'Q';
  if (piece.type == design.getPieceType("Khun"))   r = 'K';
  if (piece.player > 1) {
      return r.toLowerCase();
  }
  return r;
}

Dagaz.Model.getSetup = function(design, board) {
  var str = "?turn=" + board.turn + ";&setup=";
  var k = 0; var c = 0;
  for (var pos = 0; pos < Dagaz.Model.WIDTH * Dagaz.Model.HEIGHT; pos++) {
       if (k >= Dagaz.Model.WIDTH) {
           if (c > 0) {
               str += c;
           }
           str += "/";
           k = 0;
           c = 0;
       }
       k++;
       var piece = board.getPiece(pos);
       if (piece === null) {
           c++;
       } else {
           if (c > 0) {
               str += c;
           }
           c = 0;
           str += getPieceNotation(design, piece);
       }
  }
  if (c > 0) {
      str += c;
  }
  if (board.turn == 0) {
      str += " w";
  } else {
      str += " b";
  }
  if (Dagaz.Controller.persistense == "setup") {
      var s = str + "&game=" + getName() + "*";
      localStorage.setItem('dagaz.setup', s);
  }
  return str;
}

var clearGame = Dagaz.Controller.clearGame;

Dagaz.Controller.clearGame = function() {
   localStorage.setItem('dagaz.setup', '');
   if (!_.isUndefined(clearGame)) {
       clearGame();
   }
}

})();
