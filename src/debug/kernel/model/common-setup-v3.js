(function() {

Dagaz.Controller.persistense = "setup";

var getName = function() {
  var str = window.location.pathname.toString();
  var result = str.match(/\/([^.\/]+)\./);
  if (result) {
      return result[1].replace("-board", "").replace("-ai", "").replace("-kanji", "");
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
      return "?setup=" + result;
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

var getGlobal = function(setup) {
  var str = window.location.search.toString();
  if (setup) {
      str = setup;
  }
  var result = str.match(/[?&]global=([;\d]+)/);
  if (result) {
      return result[1];
  } else {
      str = getCookie();
      result = str.match(/[?&]global=([;\d]+)/);
      if (result) {
          return result[1];
      } else {
          return "";
      }
  }
}

var getNum = function(c) {
  if ((c >= "0".charCodeAt(0)) && (c <= "9".charCodeAt(0))) {
      return c - "0".charCodeAt(0);
  }
  if ((c >= "A".charCodeAt(0)) && (c <= "Z".charCodeAt(0))) {
      return c - "A".charCodeAt(0) + 10;
  }
  return null;
}

Dagaz.Model.setup = function(board, init) {
  var design = Dagaz.Model.design;
  var setup  = getSetup(init);
  var player = 1;
  if (setup) {
      setup = setup + ";";
      board.clear();
      var type = null;
      var pos  = null;
      for (var i = 0; i < setup.length; i++) {
           var c = setup.charCodeAt(i);
           if (c == "-".charCodeAt(0)) {
               player++;
               continue;
           }
           if (c == ";".charCodeAt(0)) {
               if ((type === null) || (pos === null)) break;
               var piece = Dagaz.Model.createPiece(type, player);
               board.setPiece(Dagaz.Model.stringToPos(pos), piece);
               type = null;
               pos  = null;
           }
           if (type === null) {
               var n = getNum(c);
               type = n;
               continue;
           }
           if (pos === null) {
               pos = setup[i];
           } else {
               pos = pos + setup[i];
           }
      }
      var turn = getTurn(init);
      if (turn) {
          board.turn   = +turn;
          board.player = design.currPlayer(board.turn);
      }
      var rs = getReserve(init);
      if (rs) {
          Dagaz.Model.setReserve(design, board, rs);
      }
      var g = getGlobal(init);
      if (g) {
          Dagaz.Model.setGlobal(design, board, g);
      }
  }
}

var toChar = function(n) {
  if (n < 10) {
      return String.fromCharCode("0".charCodeAt(0) + n);
  } else {
      return String.fromCharCode("A".charCodeAt(0) + n - 10);
  }
}

Dagaz.Model.getGlobal = function(design, board) {
  var r = "";
  var k = _.keys(board.values);
  if (k.length > 0) {
     for (var i = 0; i <= _.max(k); i++) {
          var v = board.getValue(i);
          if (v !== null) {
              r = r + v;
          }
          r = r + ";";
     }
  }
  return r;
}

Dagaz.Model.setGlobal = function(design, board, str) {
  var ix = 0; var n = null;
  for (var i = 0; i < str.length; i++) {
       if (str[i] == ';') {
           if (n !== null) {
               board.setValue(ix, n);
           }
           n = null;
           ix++;
       } else {
           if (n !== null) {
               n = n * 10;
           } else {
               n = 0;
           }
           n += +str[i];
       }
  }
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
  var str = "";
  for (var player = 1; player < design.playerNames.length; player++) {
      if (str != "") str = str + "-";
      _.each(design.allPositions(), function(pos) {
            var piece = board.getPiece(pos);
            if ((piece !== null) && (piece.player == player)) {
                str = str + toChar(piece.type);
                str = str + Dagaz.Model.posToString(pos);
                str = str + ";";
            }
      });
  }
  str = str + ";&turn=" + board.turn;
  var rs = Dagaz.Model.getReserve(design, board);
  if (rs != "") {
      str = str + "&reserve=" + rs;
  }
  var g = Dagaz.Model.getGlobal(design, board);
  if (g != "") {
      str = str + "&global=" + g;
  }
  if (!_.isUndefined(Dagaz.Controller.seed)) {
      str = str + "&seed=" + Dagaz.Controller.seed;
  }
  if (Dagaz.Controller.persistense == "setup") {
      var s = str + "&game=" + getName() + "*";
      localStorage.setItem('dagaz.setup', s);
  }
  return "?setup=" + str;
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
