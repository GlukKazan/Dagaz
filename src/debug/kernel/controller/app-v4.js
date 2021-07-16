(function() {

var STATE = {
    INIT: 0,
    IDLE: 1,
    WAIT: 2,
    BUZY: 3,
    EXEC: 4,
    DONE: 5,
    STOP: 6
};

var isDrag = false;
var passForced = 0;
var once = false;
var lastPosition = null;
var determinated = null;
var dropIndex = 0;
var onceGameOver = true;

function App(canvas, params) {
  this.design = Dagaz.Model.getDesign();
  this.canvas = canvas;
  this.view   = Dagaz.View.getView();
  this.state  = STATE.INIT;
  if (params) {
      this.params = params;
  } else {
      this.params = [];
  }
  if (_.isUndefined(this.params.AI_WAIT)) {
      this.params.AI_WAIT = 3000;
  }
  if (_.isUndefined(this.params.WAIT_FRAME)) {
      this.params.WAIT_FRAME = 100;
  }
  if (_.isUndefined(this.params.SHOW_TARGETS)) {
      this.params.SHOW_TARGETS = true;
  }
  if (_.isUndefined(this.params.SHOW_ATTACKING)) {
      this.params.SHOW_ATTACKING = true;
  }
}

Dagaz.Controller.newGame = function() {
  if (!_.isUndefined(Dagaz.Controller.clearGame)) {
      Dagaz.Controller.clearGame();
  }
  var str = window.location.toString();
  var result = str.match(/^([^?]+)/);
  if (result) {
      str = result[1];
  }
  window.location = str;
}

var gameOver = function(text, self, player) {
  if (!Dagaz.Model.silent || (player != 0)) {
      if (!_.isUndefined(Dagaz.Controller.clearGame)) {
          Dagaz.Controller.clearGame();
      }
      alert(text);
  }
  if (Dagaz.Model.progressive) {
      if (Dagaz.Model.silent && (player != 0)) return;
      if (Dagaz.Controller.loseRefresh && (player < 0)) {
          window.location = window.location.toString();
          return;
      }
      if (Dagaz.Model.progressiveUrl !== null) {
          window.location = Dagaz.Model.progressiveUrl;
          return;
      }
      var str = Dagaz.Model.continue(self.design, self.board, window.location.toString());
      if (str !== null) {
          window.location = str;
      }
  }
}

App.prototype.gameOver = function(text, player) {
  Dagaz.Controller.Done(this.board);
  this.view.markPositions(Dagaz.View.markType.KO, []);
  if (onceGameOver) {
      _.delay(gameOver, 1000, text, this, player);
      onceGameOver = false;
  }
  if (this.board && Dagaz.Model.showLose) {
     var captured = [];
     _.each(this.design.allPositions(), function(pos) {
        var piece = this.board.getPiece(pos);
        if (piece !== null) {
            if ((player == 0) || 
                ((player < 0) && (piece.player == -player)) ||
                ((player > 0) && (piece.player != player))) {
                captured.push(pos);
            }
        }
     }, this);
     this.view.markPositions(Dagaz.View.markType.ATTACKING, captured);
  }
}

Dagaz.Controller.createApp = function(canvas) {
  if (_.isUndefined(Dagaz.Controller.app)) {
      Dagaz.Controller.app = new App(canvas);
  }
  return Dagaz.Controller.app;
}

App.prototype.done = function() {
  if (this.state != STATE.DONE) {
      this.state = STATE.STOP;
  } else {
      if (this.doneMessage) {
          this.gameOver(this.doneMessage, this.winPlayer);
      }
  }
}

App.prototype.getStarts = function() {
  if (_.isUndefined(this.starts)) {
      if (_.isUndefined(this.list)) {
          this.starts = [];
      } else {
          this.starts = this.list.getStarts();
      }
  }
  return this.starts;
}

App.prototype.getStops = function() {
  if (_.isUndefined(this.stops)) {
      if (_.isUndefined(this.list)) {
          this.stops = [];
      } else {
          this.stops = this.list.getStops();
      }
  }
  return this.stops;
}

App.prototype.getTargets = function() {
  if (_.isUndefined(this.targets)) {
      if (_.isUndefined(this.list)) {
          this.targets = [];
      } else {
          this.targets = this.list.getTargets();
      }
  }
  return this.targets;
}

App.prototype.getDrops = function() {
  if (_.isUndefined(this.list) || (Dagaz.Model.showDrops == 0)) {
      this.drops = [];
  } else {
      if (_.isUndefined(this.drops) || (this.drops.length == 0)) {
          this.drops = this.list.getDrops();
      }
  }
  return this.drops;
}

App.prototype.clearPositions = function() {
  delete this.starts;
  delete this.stops;
  delete this.targets;
  delete this.drops;
  this.view.clearDrops();
}

App.prototype.setPosition = function(pos) {
  this.move = this.list.setPosition(pos);
  this.clearPositions();
  if (this.params.SHOW_TARGETS) {
      this.view.markPositions(Dagaz.View.markType.TARGET, this.getTargets());
  }
  if (this.params.SHOW_ATTACKING && Dagaz.Model.showCaptures && _.isUndefined(Dagaz.Model.getMarked)) {
      this.view.markPositions(Dagaz.View.markType.ATTACKING, this.list.getCaptures());
  }
  this.state = STATE.EXEC;
  Canvas.style.cursor = "default";
  this.view.markPositions(Dagaz.View.markType.CURRENT, [ pos ]);
}

App.prototype.syncCaptures = function(move) {
  var m = Dagaz.Model.createMove(move.mode, move.sound);
  _.each(move.actions, function(a) {
      if ((a[0] !== null) && (a[1] === null)) {
          m.actions.push(a);
      }
  });
  m.applyAll(this.view);
}

App.prototype.mouseWheel = function(view, delta) {
  dropIndex += delta;
  if (dropIndex < 0) dropIndex = 0;
  var pos = this.currPos;
  this.currPos = -1;
  this.mouseLocate(view, pos);
}

App.prototype.mouseLocate = function(view, pos) {
  if (this.currPos != pos) {
      this.getDrops();
      if ((Dagaz.Model.showDrops == -1) || (!_.isUndefined(this.drops) && (Dagaz.Model.showDrops > 0) && (this.drops.length > Dagaz.Model.showDrops))) {
          if (!_.isUndefined(this.list) && (pos.length == 1) && (_.indexOf(this.getDrops(), pos[0]) >= 0)) {
              var pieces = this.list.getDropPieces(pos[0]);
              if ((pieces !== null) && (pieces.length > 0)) {
                  if (dropIndex >= pieces.length) {
                     if (Dagaz.Controller.cyclicDropIndex){
                         dropIndex = 0;
                     } else {
                         dropIndex = pieces.length - 1;
                     }
                  }
                  this.view.setDrops(pieces[dropIndex].toString(), [ pos[0] ]);
              }
          } else {
              this.view.clearDrops();
          }
      }
      if ((this.state == STATE.IDLE) && !_.isUndefined(this.list)) {
          if (isDrag) {
              if (_.intersection(this.getStops(), pos).length > 0) {
                  Canvas.style.cursor = "pointer";
              } else {
                  Canvas.style.cursor = "move";
              }
          } else {
              if (_.intersection(this.getStarts(), pos).length > 0) {
                  Canvas.style.cursor = "pointer";
              } else {
                  Canvas.style.cursor = "default";
              }
          }
      }
      this.view.markPositions(Dagaz.View.markType.GOAL, []);
      if (!isDrag && !_.isUndefined(this.board)) {
          var piece = this.board.getPiece(pos);
          if (piece !== null) {
              var types = Dagaz.Model.getPieceTypes(piece, this.board);
              if (Dagaz.Model.showGoals) {
                  var positions = this.design.getGoalPositions(this.board.player, types);
                  this.view.markPositions(Dagaz.View.markType.GOAL, positions);
              }
          }
      }
  }
  this.currPos = pos;
}

App.prototype.boardApply = function(move) {
  this.board = this.board.apply(move);
  if (!_.isUndefined(this.view.sync)) {
      this.view.sync(this.board);
  }
  if (!_.isUndefined(Dagaz.Controller.addState)) {
      Dagaz.Controller.addState(move, this.board);
  }
}

App.prototype.mouseDown = function(view, pos) {
  this.view.markPositions(Dagaz.View.markType.GOAL, []);
  if ((this.state == STATE.IDLE) && !_.isUndefined(this.list)) {
      var positions = _.intersection(this.getTargets(), pos);
      if (positions.length == 0) {
          positions = _.intersection(this.getStops(), pos);
      }
      if (positions.length == 0) {
          positions = _.intersection(this.getStarts(), pos);
      }
      if (positions.length > 0) {
          Canvas.style.cursor = "move";
          this.setPosition(positions[0]);
          if (this.move && this.move.isPass() && (lastPosition == positions[0])) {
              if (this.list && this.list.canPass()) {
                  var moves = this.list.getMoves();
                  if (moves.length == 1) {
                      this.boardApply(moves[0]);
                      this.syncCaptures(moves[0]);
                      this.state = STATE.IDLE;
                      delete this.list;
                      this.view.clearDrops();
                      lastPosition = null;
                      if (_.isUndefined(Dagaz.Model.getMarked)) {
                          this.view.markPositions(Dagaz.View.markType.ATTACKING, []);
                      }
                      this.view.markPositions(Dagaz.View.markType.CURRENT, []);
                      this.view.markPositions(Dagaz.View.markType.TARGET, []);
                      return;
                  }
              }
          }
          lastPosition = positions[0];
          isDrag = true;
      }
  }
}

App.prototype.mouseUp = function(view, pos) {
  if ((this.state == STATE.IDLE) && !_.isUndefined(this.list) && Dagaz.Model.dragNdrop) {
      var positions = _.intersection(this.getTargets(), pos);
      if (positions.length > 0) {
          this.setPosition(positions[0]);
      }
  }
  Canvas.style.cursor = "default";
  isDrag = false;
}

App.prototype.getAI = function() {
  if (_.isUndefined(this.ai)) {
      this.ai = null;
      if (this.design.isPuzzle()) {
          this.ai = Dagaz.AI.findBot("solver",  this.params, this.ai);
      } else {
          this.ai = Dagaz.AI.findBot("random",  this.params, this.ai);
          this.ai = Dagaz.AI.findBot("common",  this.params, this.ai);
          this.ai = Dagaz.AI.findBot("opening", this.params, this.ai);
      }
  }
  return this.ai;
}

App.prototype.getBoard = function() {
  if (_.isUndefined(this.board)) {
      this.board  = Dagaz.Model.getInitBoard();
      if (!_.isUndefined(Dagaz.Controller.addState)) {
          Dagaz.Controller.addState(Dagaz.Model.createMove(), this.board);
      }
      Dagaz.Model.Done(this.design, this.board);
  }
  return this.board;
}

App.prototype.getContext = function(player, forced) {
  if (_.isUndefined(forced) && Dagaz.AI.isFriend(1, player) && !this.design.isPuzzle()) return null;
  if (_.isUndefined(this.context)) {
      this.context = [];
  }
  if (_.isUndefined(this.context[player])) {
      this.context[player] = Dagaz.AI.createContext(this.design);
  }
  return this.context[player];
}

App.prototype.determinate = function(move) {
  var moves = move.determinate();
  determinated = null;
  if (moves.length > 1) {
      var promote = confirm("Promote piece?");
      if (promote) {
          move = moves[1];
      } else {
          move = moves[0];
      }
      determinated = move;
  }
  return move;
}

App.prototype.isReady = function() {
  return this.state == STATE.IDLE;
}

App.prototype.setBoard = function(board, isForced) {
  if (this.isReady() || isForced) {
      this.board = board;
      this.view.reInit(board);
      delete this.list;
      this.clearPositions();
      this.view.markPositions(Dagaz.View.markType.TARGET, []);
  }
}

App.prototype.setMove = function(move) {
  if (this.state == STATE.IDLE) {
      delete this.list;
      this.boardApply(move);
      Dagaz.Model.Done(this.design, this.board);
      this.move = move;
      this.state = STATE.EXEC;
  }
}

App.prototype.isRandom = function() {
  if (!_.isUndefined(this.design.turns) && !_.isUndefined(this.design.turns[this.board.turn])) {
      return this.design.turns[this.board.turn].random;
  }
  return false;
}

Dagaz.AI.callback = function(result) {
  var app = Dagaz.Controller.app;
  console.log('Advisor: ' + result);
  var move = null;
  _.each(app.board.moves, function(m) {
      var x = m.toString() + ' ';
      if (x.startsWith(result + ' ')) {
          move = m;
      }
  });
  if (move === null) return;
  var board = app.board.apply(move);
  Dagaz.Controller.pushState(move, board);
  if (!_.isUndefined(Dagaz.Sounds) && !_.isUndefined(Dagaz.Sounds.hint)) {
      Dagaz.Controller.play(Dagaz.Sounds.hint);
  }
}

App.prototype.exec = function() {
  this.view.configure();
  if (!_.isUndefined(Dagaz.Model.load) && (Dagaz.Controller.persistense == "session")) {
      var board = Dagaz.Model.getInitBoard();
      Dagaz.Model.load(board);
      delete Dagaz.Model.load;
  }
  this.view.draw(this.canvas);
  if (this.state == STATE.STOP) {
      this.state = STATE.IDLE;
      return;
  }
  if (this.state == STATE.IDLE) {
      var ctx = this.getContext(this.getBoard().player);
      if (this.isRandom()) {
          this.move = null;
          while (this.isRandom()) {
              if (_.isUndefined(this.board.moves)) {
                  this.board.generate(this.design);
              }
              var moves = _.filter(this.board.moves, function(move) {
                  if (!_.isUndefined(move.failed)) return false;
                  return _.indexOf(this.design.turns[this.board.turn].modes, move.mode) >= 0;
              }, this);
              if (moves.length > 0) {
                  var ix = 0;
                  if (moves.length > 1) {
                      ix = _.random(0, moves.length - 1);
                  }
                  var move = moves[ix];
                  this.boardApply(move);
                  if (this.move === null) {
                      this.move = move;
                  } else {
                      this.move.join(move);
                  }
              } else {
                  this.boardApply(Dagaz.Model.createMove(0));
              }
          }
          this.state = STATE.EXEC;
          return;
      }
      var ai  = this.getAI();
      if ((ctx !== null) && (ai !== null)) {
         ai.setContext(ctx, this.board);
         this.state = STATE.BUZY;
         Canvas.style.cursor = "wait";
         this.timestamp = Date.now();
         once = true;
      } else {
         if (!_.isUndefined(Dagaz.AI.advisorStamp) && !_.isUndefined(Dagaz.Controller.pushState) && (ai !== null) && (Dagaz.Model.advisorWait !== null)) {
             var timestamp = Date.now();
             if (Dagaz.AI.advisorStamp === null) {
                 Dagaz.AI.advisorStamp = timestamp + Dagaz.Model.advisorWait;
             }
             if (Dagaz.Controller.noRedo() && (Dagaz.AI.advisorStamp < timestamp)) {
                 var ctx = this.getContext(this.board.player, true);
                 if (ctx !== null) {
                     ai.setContext(ctx, this.board);
                     var result = ai.getMove(ctx);
                     if (result && result.done && result.move) {
                         var board = this.board.apply(result.move);
                         Dagaz.Controller.pushState(result.move, board);
                         if (!_.isUndefined(Dagaz.Sounds.hint)) {
                             Dagaz.Controller.play(Dagaz.Sounds.hint);
                         }
                     }
                     delete Dagaz.AI.advisorStamp;
                 }
             }
         }
         if (_.isUndefined(this.list)) {
             Dagaz.AI.advisorStamp = null;
             var player = this.design.playerNames[this.board.player];
             console.log("Player: " + player);
             if (!_.isUndefined(Dagaz.Model.getSetup)) {
                 console.log("Setup: " + Dagaz.Model.getSetup(this.design, this.board));
             }
             if (!Dagaz.Controller.noDropIndex) {
                 dropIndex = 0;
             }
             this.list = Dagaz.Model.getMoveList(this.board);
             var ko = [];
             if (!_.isUndefined(this.board.ko)) {
                 ko = this.board.ko;
             }
             this.view.markPositions(Dagaz.View.markType.KO, ko);
             if (!_.isUndefined(Dagaz.Model.getMarked)) {
                 this.view.markPositions(Dagaz.View.markType.ATTACKING, Dagaz.Model.getMarked(this.list));
             } else {
                 if (this.params.SHOW_ATTACKING && Dagaz.Model.showCaptures) {
                     this.view.markPositions(Dagaz.View.markType.ATTACKING, this.list.getCaptures());
                 }
             }
             var drops = this.getDrops();
             if ((Dagaz.Model.showDrops == -2) || (!_.isUndefined(this.drops) && (Dagaz.Model.showDrops > 0) && (this.drops.length <= Dagaz.Model.showDrops))) {
                 if (drops.length > 0) {
                     var pieces = this.list.getDropPieces(drops[0]);
                     if ((pieces !== null) && (pieces.length > 0)) {
                         if (dropIndex >= pieces.length) {
                             if (Dagaz.Controller.cyclicDropIndex){
                                 dropIndex = 0;
                             } else {
                                 dropIndex = pieces.length - 1;
                             }
                         }
                         this.view.setDrops(pieces[dropIndex].toString(), drops);
                     }
                 }
                 this.view.invalidate();
             }
             if (this.list.isPassForced()) {
                  if (Dagaz.Model.passForcedDraw && (passForced >= this.design.getPlayersCount())) {
                      this.state = STATE.DONE;
                      Canvas.style.cursor = "default";
                      if (!_.isUndefined(Dagaz.Controller.play)) {
                          Dagaz.Controller.play(Dagaz.Sounds.draw);
                      }
                      this.gameOver("Draw", 0);
                  } else {
                      this.boardApply(Dagaz.Model.createMove());
                      this.state = STATE.IDLE;
                      delete this.list;
                      this.view.clearDrops();
                      passForced++;
                  }
                  return;
             }
             passForced = 0;
             if (this.list.isEmpty()) {
                 this.state = STATE.DONE;
                 Canvas.style.cursor = "default";
                 if (!_.isUndefined(Dagaz.Controller.play)) {
                     Dagaz.Controller.play(Dagaz.Sounds.lose);
                 }
                 this.gameOver(player + " lose", -this.board.player);
                 return;
             }
         }
      }
  }
  if (this.state == STATE.BUZY) {
      var ctx = this.getContext(this.board.player);
      var player = this.design.playerNames[this.board.player];
      var result = this.getAI().getMove(ctx);
      if (once) {
          console.log("Player: " + player);
          if (!_.isUndefined(Dagaz.Model.getSetup)) {
              console.log("Setup: " + Dagaz.Model.getSetup(this.design, this.board));
          }
          once = false;
      }
      if (result) {
          if (_.isUndefined(result.move)) {
              if (result.done) {
                  this.state = STATE.DONE;
                  Canvas.style.cursor = "default";
                  if (!_.isUndefined(Dagaz.Controller.play)) {
                      Dagaz.Controller.play(Dagaz.Sounds.win);
                  }
                  this.gameOver(player + " lose", -this.board.player);
              }
              return;
          }
          if (result.done || (Date.now() - this.timestamp >= this.params.AI_WAIT)) {
              this.boardApply(result.move);
              Dagaz.Model.Done(this.design, this.board);
              if (result.move.isPass()) {
                  if (Dagaz.Model.passForcedDraw && (passForced >= this.design.getPlayersCount())) {
                      this.state = STATE.DONE;
                      Canvas.style.cursor = "default";
                      if (!_.isUndefined(Dagaz.Controller.play)) {
                          Dagaz.Controller.play(Dagaz.Sounds.draw);
                      }
                      this.gameOver("Draw", 0);
                  } else {
                      this.state = STATE.IDLE;
                      delete this.list;
                      this.view.clearDrops();
                      passForced++;
                      return;
                  }
              } else {
                  passForced = 0;
              }
              this.move = result.move;
              this.state = STATE.EXEC;
          }
      }
  }
  if (this.state == STATE.EXEC) {
      delete Dagaz.AI.advisorStamp;
      this.state = STATE.IDLE;
      isDrag = false;
      if (!_.isUndefined(this.list) && this.list.isDone()) {
          var moves = this.list.filterDrops(this.list.getMoves(), dropIndex);
          if (moves.length == 1) this.move = moves[0];
      }
      if (!this.move.isPass()) {
          this.view.markPositions(Dagaz.View.markType.TARGET, []);
          this.view.markPositions(Dagaz.View.markType.CURRENT, []);
          lastPosition = null;
          if (Dagaz.Model.showMoves) {
              console.log(this.move.toString());
          }
          this.move = this.determinate(this.move);
          this.move.applyAll(this.view);
          if (!_.isUndefined(this.list)) {
              this.view.markPositions(Dagaz.View.markType.CURRENT, [ this.move.getTarget() ]);
          }
          this.state = STATE.WAIT;
      }
      if (!_.isUndefined(this.list)) {
          if (this.list.isDone()) {
              this.view.markPositions(Dagaz.View.markType.CURRENT, []);
              var moves = this.list.filterDrops(this.list.getMoves(), dropIndex);
              delete this.list;
              this.view.clearDrops();
              if ((moves.length > 0) || (determinated !== null)) {
                  var m = moves[0];
                  if (determinated !== null) {
                      m.clarify(determinated);
                      determinated = null;
                  }
                  this.boardApply(m);
                  Dagaz.Model.Done(this.design, this.board);
                  console.log("Debug: " + m.toString());
              }
          }
      }
      if (!this.move.isPass()) {
          if (!_.isUndefined(Dagaz.Controller.play)) {
              var sound = Dagaz.Sounds.move;
              if (!_.isUndefined(this.move.sound)) {
                  sound = this.move.sound;
              }
              Dagaz.Controller.play(sound, this.board.player);
          }
      }
      if (this.board.parent !== null) {
          var g = this.board.checkGoals(this.design, this.board.parent.player);
          if (g !== null) {
              var player = this.design.playerNames[this.board.parent.player];
              this.state = STATE.DONE;
              Canvas.style.cursor = "default";
              if (g > 0) {
                  if (!_.isUndefined(Dagaz.Controller.play)) {
                      if (this.board.parent.player == 1) {
                         Dagaz.Controller.play(Dagaz.Sounds.win);
                      } else {
                         Dagaz.Controller.play(Dagaz.Sounds.lose);
                      }
                  }
                  this.doneMessage = player + " won";
                  this.winPlayer   = this.board.parent.player;
              } else if (g < 0) {
                  if (!_.isUndefined(Dagaz.Controller.play)) {
                      if (this.board.parent.player != 1) {
                         Dagaz.Controller.play(Dagaz.Sounds.win);
                      } else {
                         Dagaz.Controller.play(Dagaz.Sounds.lose);
                      }
                  }
                  this.doneMessage = player + " lose";
                  this.winPlayer   = -this.board.parent.player;
              } else {
                  if (!_.isUndefined(Dagaz.Controller.play)) {
                      Dagaz.Controller.play(Dagaz.Sounds.draw);
                  }
                  this.doneMessage = "Draw";
                  this.winPlayer   = 0;
              }
          }
     }
  }
}

Dagaz.Model.InitGame();
Dagaz.Controller.app = Dagaz.Controller.createApp(Canvas);

if (!_.isUndefined(Dagaz.Controller.getSessionManager)) {
  Dagaz.Controller.getSessionManager(Dagaz.Controller.app);
}
if (!_.isUndefined(Dagaz.Controller.play)) {
  Dagaz.Controller.play(Dagaz.Sounds.start);
}

App.prototype.run = function() {
  var timestamp = Date.now();
  this.exec();
  var delta = Date.now() - timestamp;
  _.delay(function() {
     Dagaz.Controller.app.run();
  }, (delta > this.params.WAIT_FRAME) ? 0 : this.params.WAIT_FRAME - delta);
}

Dagaz.Controller.app.view.init(Dagaz.Controller.app.canvas, Dagaz.Controller.app);
Dagaz.Controller.app.run();

})();
