(function() {

function AggressiveAi(params, parent) {
  this.params = params;
  this.parent = parent;
  if (_.isUndefined(this.params.rand)) {
      this.params.rand = _.random;
  }
  if (_.isUndefined(this.params.AI_FRAME)) {
      this.params.AI_FRAME = 100;
  }
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if (type == "common") {
      return new AggressiveAi(params, parent);
  } else {
      return findBot(type, params, parent);
  }
}

AggressiveAi.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.board  = board;
}

var isSafe = function(design, board, move) {
  var pos = move.actions[0][1][0];
  board.generate(design);
  var moves = _.filter(board.moves, function(move) {
      var actions = _.filter(move.actions, function(action) {
          return (action[0][0] == pos) && (action[1] === null);
      });
      return actions.length > 0;
  });
  return moves.length == 0;
}

AggressiveAi.prototype.getMove = function(ctx) {
  var timestamp = Date.now();
  var design = Dagaz.Model.getDesign();
  var result = null;
  var captured = 0;
  var safe = [];
  _.chain(Dagaz.AI.generate(ctx, ctx.board))
   .filter(function(move) {
       return move.actions.length > 0;
    })
   .each(function(move) {
      var board = ctx.board.apply(move);
      if (board.checkGoals(design, ctx.board.player) != 0) {
          result = move;
          captured = null;
      }
      if (captured !== null) {
          var c = _.chain(move.actions)
           .filter(function(action) {
                return (action[0] !== null) && (action[1] === null);
            })
           .size()
           .value();
          if (c > captured) {
              captured = c;
              result = move;
          }
      }
      if ((result === null) && (Date.now() - timestamp < this.params.AI_FRAME) && isSafe(design, board, move)) {
          safe.push(move);
      }
  }, this);
  if ((result === null) && (safe.length > 0)) {
      var ix = this.params.rand(0, safe.length - 1);
      result = safe[ix];
  }
  if (result) {
      return {
          done: true,
          move: result,
          ai:   "aggressive"
      };
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
