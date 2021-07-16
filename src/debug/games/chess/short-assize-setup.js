Dagaz.Controller.persistense = "setup";
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

var getSeed = function(setup) {
  var str = window.location.search.toString();
  if (setup) {
      str = setup;
  }
  var result = str.match(/[?&]seed=(\d+)/);
  if (result) {
      return result[1];
  } else {
      str = getCookie();
      result = str.match(/[?&]seed=(\d+)/);
      if (result) {
          return result[1];
      } else {
          return "";
      }
  }
}

var getReserve = function(setup) {
  var str = window.location.search.toString();
  if (setup) {
      str = setup;
  }
  var result = str.match(/[?&]reserve=([,;\d]+)/);
  if (result) {
      return result[1];
  } else {
      str = getCookie();
      result = str.match(/[?&]reserve=([,;\d]+)/);
      if (result) {
          return result[1];
      } else {
          return "";
      }
  }
}

var createPiece = function(design, c) {
  if (c == 'P') return Dagaz.Model.createPiece(design.getPieceType("Pawn"), 1);
  if (c == 'p') return Dagaz.Model.createPiece(design.getPieceType("Pawn"), 2);
  if (c == 'R') return Dagaz.Model.createPiece(design.getPieceType("Rook"), 1);
  if (c == 'r') return Dagaz.Model.createPiece(design.getPieceType("Rook"), 2);
  if (c == 'N') return Dagaz.Model.createPiece(design.getPieceType("Knight"), 1);
  if (c == 'n') return Dagaz.Model.createPiece(design.getPieceType("Knight"), 2);
  if (c == 'B') return Dagaz.Model.createPiece(design.getPieceType("Bishop"), 1);
  if (c == 'b') return Dagaz.Model.createPiece(design.getPieceType("Bishop"), 2);
  if (c == 'Q') return Dagaz.Model.createPiece(design.getPieceType("Queen"), 1);
  if (c == 'q') return Dagaz.Model.createPiece(design.getPieceType("Queen"), 2);
  if (c == 'K') return Dagaz.Model.createPiece(design.getPieceType("King"), 1);
  if (c == 'k') return Dagaz.Model.createPiece(design.getPieceType("King"), 2);
  if (c == 'X') return Dagaz.Model.createPiece(design.getPieceType("PQ"), 1);
  if (c == 'x') return Dagaz.Model.createPiece(design.getPieceType("PQ"), 2);
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
          if (design.turns.length > 9) {
              if (turn < 14) turn = +turn + 7;
          } else {
              if (turn > 8) turn = +turn - 7;
          }
          board.turn   = +turn;
          board.player = design.currPlayer(board.turn);
      }
      _.each(_.keys(board.reserve), function(t) {
          _.each(_.keys(board.reserve[t]), function(p) {
              board.reserve[t][p] = 0;
          });
      });
      var rs = getReserve(init);
      if (rs) {
          Dagaz.Model.setReserve(design, board, rs);
      }
  }
}

var getPieceNotation = function(design, piece) {
  r = 'X';
  if (piece.type == design.getPieceType("Pawn"))   r = 'P';
  if (piece.type == design.getPieceType("Rook"))   r = 'R';
  if (piece.type == design.getPieceType("Knight")) r = 'N';
  if (piece.type == design.getPieceType("Bishop")) r = 'B';
  if (piece.type == design.getPieceType("Queen"))  r = 'Q';
  if (piece.type == design.getPieceType("King"))   r = 'K';
  if (piece.player > 1) {
      return r.toLowerCase();
  }
  return r;
}

Dagaz.Model.getReserve = function(design, board) {
  var r = "";
  for (var o = 1; o < design.playerNames.length; o++) {
       if (r != "") r = r + ";";
       _.each(_.keys(design.pieceNames), function(t) {
           if (_.isUndefined(board.reserve[t])) return;
           if (_.isUndefined(board.reserve[t][o])) {
               r = r + "0,";
           } else {
               r = r + board.reserve[t][o] + ",";
           }
       });
  }
  return r;
}

Dagaz.Model.setReserve = function(design, board, str) {
  design.reserve = [];
  var o = 1; var t = 0; var n = 0;
  for (var i = 0; i < str.length; i++) {
       if (str[i] == ';') {
           o++;
           t = 0;
       } else if (str[i] == ',') {
           if (_.isUndefined(design.reserve[t])) {
               design.reserve[t] = [];
           }
           design.reserve[t][o] = n;
           t++; n = 0;
       } else {
           n = n * 10;
           n += +str[i];
       }
  }
  board.reserve = design.reserve;
}

Dagaz.Model.getSetup = function(design, board) {
  var str = "?turn=" + board.turn 
  var rs = Dagaz.Model.getReserve(design, board);
  if (rs != "") {
      str = str + "&reserve=" + rs;
  }
  if (!_.isUndefined(Dagaz.Controller.seed)) {
      str = str + "&seed=" + Dagaz.Controller.seed;
  }
  str = str + ";&setup=";
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
  if (board.player == 1) {
      str += " w ";
  } else {
      str += " b ";
  }
  if (Dagaz.Controller.persistense == "setup") {
      var s = str + "&game=" + getName() + "*";
      localStorage.setItem('dagaz.setup', s);
  }
  return str;
}

var getSetupSelector = Dagaz.Model.getSetupSelector;

Dagaz.Model.getSetupSelector = function(val) {
  if (Dagaz.Controller.randomized && _.isUndefined(Dagaz.Controller.seed)) {
      Dagaz.Controller.seed = getSeed();
      if (!Dagaz.Controller.seed) {
          Dagaz.Controller.seed = _.random(0, 10000);
      }
      console.log("Seed: " + Dagaz.Controller.seed);
      Math.seedrandom(+Dagaz.Controller.seed);
  }
  return getSetupSelector(val);
}

var clearGame = Dagaz.Controller.clearGame;

Dagaz.Controller.clearGame = function() {
   localStorage.setItem('dagaz.setup', '');
   if (!_.isUndefined(clearGame)) {
       clearGame();
   }
}

})();
