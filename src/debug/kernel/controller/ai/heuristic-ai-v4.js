(function() {


function Ai(parent) {
  this.parent = parent;
}

var findBot = Dagaz.AI.findBot;

Dagaz.AI.findBot = function(type, params, parent) {
  if ((type == "heuristic") || (type == "common") || (type == "1") || (type == "2")) {
      return new Ai(parent);
  } else {
      return findBot(type, params, parent);
  }
}

var simulate = function(ctx, node, player) {
  node.b.moves = Dagaz.AI.generate(ctx, node.b);
  if (node.b.moves.length == 0) {
      node.e = Dagaz.AI.eval(ctx.design, node.b, player);
      return node;
  }
  if (node.b.player != player) {
      if ((node.b.moves == 1) && node.b.moves[0].isPass()) {
           node.b = node.b.apply(node.b.moves[0]);
           return simulate(ctx, node, player);
      }
      node.e = Dagaz.AI.eval(ctx.design, node.b, player);
      return node;
  }
  node.n = _.map(node.b.moves, function(move) {
      return {
           m: move,
           b: node.b.apply(move),
           p: node
      };
  });
  var best = null;
  for (var i = 0; i < node.n.length; i++) {
       var r = simulate(ctx, node.n[i], player);
       if ((best === null) || (best.e < r.e)) {
           best = r;
       }
  }
  return best;
}

Ai.prototype.setContext = function(ctx, board) {
  if (this.parent) {
      this.parent.setContext(ctx, board);
  }
  ctx.board     = board;
  ctx.timestamp = Date.now();
}

Ai.prototype.getMove = function(ctx) {
  ctx.board.moves = Dagaz.AI.generate(ctx, ctx.board);
  if (ctx.board.moves.length == 0) {
      return { done: true, ai: "nothing" };
  }
  if (_.isUndefined(ctx.moves) || (ctx.moves.length == 0)) {
      var nodes = _.map(ctx.board.moves, function(move) {
          return {
             m: move,
             b: ctx.board.apply(move),
             p: null
          };
      });
      var best = null;
      _.each(nodes, function(node) {
          var r = simulate(ctx, node, ctx.board.player);
          if ((best === null) || (best.e < r.e)) {
               if (r.e > 0) {
                   best = r;
               }
          }
      });
      ctx.moves = [];
      while (best !== null) {
          ctx.moves.push(best.m);
          best = best.p;
      }
  }
  if (ctx.moves.length > 0) {
      return {
           done: true,
           move: ctx.moves.pop(),
           time: Date.now() - ctx.timestamp,
           ai:  "heuristic"
      };
  }
  if (this.parent) {
      return this.parent.getMove(ctx);
  }
}

})();
