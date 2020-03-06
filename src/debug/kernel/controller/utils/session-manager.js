(function() {

var sessionManager = null;

function SessionManager(controller) {
  this.controller = controller;
  this.states = [];
}

Dagaz.Controller.getSessionManager = function(controller) {
  if (sessionManager === null) {
      sessionManager = new SessionManager(controller);
  }
  return sessionManager;
}

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
  var str = document.cookie;
  var result = str.match(/dagaz\.(session=[^*]*)/);
  if (result) {
      var r = decodeURIComponent(result[1]);
      if (badName(r)) return "";
      return "?" + r;
  } else {
      return "";
  }
}

var getMaxage = function() {
  var str = window.location.search.toString();
  var result = str.match(/[?&]cookie=(\d+)/);
  if (result) {
      return result[1];
  } else {
      return "";
  }
}

SessionManager.prototype.aiPresent = function() {
  return this.controller.getAI() !== null;
}

SessionManager.prototype.updateButtons = function() {
  if (!_.isUndefined(this.current) && !_.isUndefined(this.current.parent)) {
      undo.style.display = "inline";
  } else {
      undo.style.display = "none";
  }
  if (!_.isUndefined(this.current) && !_.isUndefined(this.current.current)) {
      redo.style.display = "inline";
  } else {
      redo.style.display = "none";
  }
}

Dagaz.Model.playerToString = function(player) {
  if (player == 1) {
      return "W";
  } else {
      return "B";
  }
}

Dagaz.Model.moveToString = function(move) {
  var r = "";
  for (var i = 0; i < move.actions.length; i++) {
       if (move.actions[i][1] !== null) {
           if (r != "") {
               r = r + "-";
           }
           if (move.actions[i][0] !== null) {
               r = r + Dagaz.Model.posToString(move.actions[i][0][0]);
           }
           if (move.actions[i][1] !== null) {
               r = r + Dagaz.Model.posToString(move.actions[i][1][0]);
           }
       }
  }
  return r;
}

SessionManager.prototype.save = function() {
  if (_.isUndefined(this.current) || _.isUndefined(this.current.board)) return null;
  var states = [];
  var board  = this.current.board;
  while (board.parent !== null) {
      states.push(board);
      board = board.parent;
  }
  var r = "(";
  while (states.length > 0) {
      var board = states.pop();
      r = r + ";" + Dagaz.Model.playerToString(board.parent.player);
      r = r + "[" + Dagaz.Model.moveToString(board.move) + "]";
  }
  r = r + ")";
  return r;
}

SessionManager.prototype.locateMove = function(board, notation) {
  board.generate(Dagaz.Model.getDesign());
  for (var i = 0; i < board.moves.length; i++) {
       if (Dagaz.Model.moveToString(board.moves[i]) == notation) {
           return board.moves[i];
       }
  }
  return null;
}

SessionManager.prototype.load = function(sgf) {
  if (_.isUndefined(Dagaz.Model.parseSgf)) return false;
  var res = Dagaz.Model.parseSgf(sgf);
  this.states = [];
  delete this.current;
  var board = Dagaz.Model.getInitBoard();
  this.addState(Dagaz.Model.createMove(), board);
  for (var i = 0; i < res.length; i++) {
       var p = res[i].name;
       if (p != Dagaz.Model.playerToString(board.player)) return false;
       if (res[i].arg.length != 1) return false;
       var move = this.locateMove(board, res[i].arg[0]);
       if (move === null) return false;
       board = board.apply(move);
       this.addState(move, board);
  }  
  this.controller.setBoard(board, true);
  return true;
}

SessionManager.prototype.addState = function(move, board) {
  var current = {
      move:   move,
      board:  board,
      states: []
  };
  if (!_.isUndefined(this.current)) {
      current.parent = this.current;
      for (var i = 0; i < this.current.states.length; i++) {
           if (this.current.states[i].move.toString() == move.toString()) {
               this.current.current = this.current.states[i];
               this.current = this.current.states[i];
               return;
           }
      }
      this.current.states.push(current);
      this.current.current = current;
  } else {
      this.states.push(current);
  }
  this.current = current;
  if (Dagaz.Controller.persistense == "session") {
      var maxage = getMaxage();
      if (!maxage && (Dagaz.Controller.defaultLife > 0)) maxage = Dagaz.Controller.defaultLife;
      var str = Dagaz.Controller.getSessionManager().save();
      if (str == "()") return;
      str = str + "&game=" + getName();
      if (maxage) {
          document.cookie = "dagaz.session=" + encodeURIComponent(str + "*") + "; max-age=" + maxage;
      } else {
          document.cookie = "dagaz.session=" + encodeURIComponent(str + "*");
      }
  }
}

Dagaz.Controller.addState = function(move, board) {  
  var sm = Dagaz.Controller.getSessionManager();
  sm.addState(move, board);
  sm.updateButtons();
}

Dagaz.Controller.pushState = function(move, board) {
  var sm = Dagaz.Controller.getSessionManager();
  if (!_.isUndefined(sm.current) && _.isUndefined(sm.current.current)) {
      board.generate();
      sm.current.current = {
          parent: sm.current,
          move:   move,
          board:  board,
          states: []
      };
      sm.current.states.push(sm.current.current);
      sm.updateButtons();
  }
}

Dagaz.Controller.noRedo = function() {
  var sm = Dagaz.Controller.getSessionManager();
  return !_.isUndefined(sm.current) && _.isUndefined(sm.current.current);
}

var noMoves = function(board) {
  if (!_.isUndefined(Dagaz.Controller.skip)) {
      if (Dagaz.Controller.skip(board)) {
          return true;
      }
  }
  for (var ix = 0; ix < board.moves.length; ix++) {
       if (!board.moves[ix].isPass()) return false;
  }
  return true;
}

SessionManager.prototype.redo = function(board) {
  if (_.isUndefined(this.current) || _.isUndefined(this.current.current)) return null;
  this.current = this.current.current;
  console.log("redo");
  return this.current.board;
}

var isRandom = function(board) {
  var design = Dagaz.Model.getDesign();
  if (_.isUndefined(design.turns)) return false;
  if (_.isUndefined(design.turns[board.turn])) return false;
  return design.turns[board.turn].random;
}

Dagaz.Controller.redo = function() {
  var sm = Dagaz.Controller.getSessionManager();
  if (_.isUndefined(sm.current) || !sm.controller.isReady()) return;
  var current = sm.current;
  var board   = sm.redo();
  if (board === null) return;
  if (!_.isUndefined(sm.controller.setMove) && Dagaz.Model.animateRedo) {
      sm.controller.setMove(board.move);
  } else {
      if (_.isUndefined(sm.controller.setBoard)) return;
      while ((sm.aiPresent() && (board.player != current.board.player) && sm.current.current) || noMoves(board) || isRandom(board)) {
         if (_.isUndefined(sm.current.current)) break;
         var b = sm.redo();
         if (b === null) {
             sm.current = current;
             return;
         }
         board = b;
      }
      if (!_.isUndefined(Dagaz.Controller.play)) {
          Dagaz.Controller.play(Dagaz.Sounds.page);
      }
      sm.controller.setBoard(board);
  }
  sm.updateButtons();
}

SessionManager.prototype.undo = function() {
  if (_.isUndefined(this.current) || _.isUndefined(this.current.parent)) return null;
  this.current = this.current.parent;
  console.log("undo");
  return this.current.board;
}

Dagaz.Controller.undo = function() {
  var sm = Dagaz.Controller.getSessionManager();
  if (_.isUndefined(sm.current) || _.isUndefined(sm.controller.setBoard) || !sm.controller.isReady()) return;
  var current = sm.current;
  var board   = sm.undo();
  if (board !== null) {
      while ((sm.aiPresent() && (board.player != current.board.player) && board.parent) || noMoves(board) || isRandom(board)) {
         var b = sm.undo();
         if (b === null) {
             sm.current = current;
             return;
         }
         board = b;
      }
  }
  if (!_.isUndefined(Dagaz.Controller.play)) {
      Dagaz.Controller.play(Dagaz.Sounds.page);
  }
  sm.controller.setBoard(board);
  sm.updateButtons();
}

var clearGame = Dagaz.Controller.clearGame;

Dagaz.Controller.clearGame = function() {
   document.cookie = "dagaz.session=" + encodeURIComponent("*") + "; max-age=0";
   if (!_.isUndefined(clearGame)) {
       clearGame();
   }
}

Dagaz.Model.load = function(board) {
  var str = getCookie();
  var result = str.match(/session=([^&]*)/);
  if (result) {
      var sm = Dagaz.Controller.getSessionManager();
      sm.load(result[1]);
      sm.updateButtons();
  }
}

})();
