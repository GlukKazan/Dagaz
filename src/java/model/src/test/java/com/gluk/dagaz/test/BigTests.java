package com.gluk.dagaz.test;

import java.util.ArrayList;
import java.util.List;

import org.junit.Test;

import com.gluk.dagaz.api.state.IEnvironment;
import com.gluk.dagaz.api.state.IPiece;
import com.gluk.dagaz.exceptions.CommonException;
import com.gluk.dagaz.mock.MockMoveLogger;
import com.gluk.dagaz.mock.MockProcessor;
import com.gluk.dagaz.model.Board;
import com.gluk.dagaz.model.Grid;
import com.gluk.dagaz.model.Piece;
import com.gluk.dagaz.model.Players;
import com.gluk.dagaz.state.GlobalEnvironment;
import com.gluk.dagaz.state.LocalEnvironment;
import com.gluk.dagaz.state.PlayersEnvironment;
import com.gluk.dagaz.state.State;
import com.gluk.dagaz.state.StateEnvironment;
import com.gluk.dagaz.statements.AbstractStatement;
import com.gluk.dagaz.statements.SeqStatement;

public class BigTests {

	@Test
	public void testQueens() throws CommonException {
		IEnvironment ge = new GlobalEnvironment();
		Players players = new Players();
		players.addPlayer("You");                              
		IEnvironment pe = new PlayersEnvironment(players, 1, ge);

		Board board = new Board();
		Grid g = new Grid(board);
		g.addDimension("a-d");
		g.addDimension("4-0");
		g.createPositions();
		
		List<Integer> deltas = new ArrayList<Integer>();
		deltas.add(-1);
		deltas.add(0);
		g.addDirection("w", deltas);
		deltas.clear();
		deltas.add(-1);
		deltas.add(-1);
		g.addDirection("nw", deltas);
		deltas.clear();
		deltas.add(-1);
		deltas.add(1);
		g.addDirection("sw", deltas);
	
		State state = new State(board);
		IEnvironment se = new StateEnvironment(state, pe);
		IEnvironment env = new LocalEnvironment(se);
		MockMoveLogger logger = new MockMoveLogger();
		MockProcessor processor = new MockProcessor(board, logger);
		AbstractStatement root = new SeqStatement();

		IPiece p = new Piece("Queen", "You");
		state.setPiece("a0", p);
		state.setPiece("b0", p);
		state.setPiece("c0", p);
		state.setPiece("d0", p);
		
		root.setBuild(processor);
		root.tag("check");
		root.val("a0");
		root.end();
		root.tag("take");
		root.end();
		root.tag("check");
		root.tag("any");
		root.val("a1");
		root.val("a2");
		root.val("a3");
		root.val("a4");
		root.end();
		root.end();
		root.tag("log");
		root.val("position");
		root.end();
		root.tag("drop");
		root.end();
		
		root.tag("check");
		root.val("b0");
		root.end();
		root.tag("take");
		root.end();
		root.tag("check");
		root.tag("any");
		root.val("b1");
		root.val("b2");
		root.val("b3");
		root.val("b4");
		root.end();
		root.end();
		root.tag("check");
		root.tag("is-empty?");
		root.val("w");
		root.end();
		root.end();
		root.tag("check");
		root.tag("is-empty?");
		root.val("nw");
		root.end();
		root.end();
		root.tag("check");
		root.tag("is-empty?");
		root.val("sw");
		root.end();
		root.end();
		root.tag("log");
		root.val("position");
		root.end();
		root.tag("drop");
		root.end();
		
		root.tag("check");
		root.val("c0");
		root.end();
		root.tag("take");
		root.end();
		root.tag("check");
		root.tag("any");
		root.val("c1");
		root.val("c2");
		root.val("c3");
		root.val("c4");
		root.end();
		root.end();
		root.tag("check");
		root.tag("is-empty?");
		root.val("w");
		root.end();
		root.end();
		root.tag("check");
		root.tag("is-empty?");
		root.val("w");
		root.val("w");
		root.end();
		root.end();
		root.tag("check");
		root.tag("is-empty?");
		root.val("nw");
		root.end();
		root.end();
		root.tag("check");
		root.tag("is-empty?");
		root.val("nw");
		root.val("nw");
		root.end();
		root.end();
		root.tag("check");
		root.tag("is-empty?");
		root.val("sw");
		root.end();
		root.end();
		root.tag("check");
		root.tag("is-empty?");
		root.val("sw");
		root.val("sw");
		root.end();
		root.end();
		root.tag("log");
		root.val("position");
		root.end();
		root.tag("drop");
		root.end();
		
		root.tag("check");
		root.val("d0");
		root.end();
		root.tag("take");
		root.end();
		root.tag("check");
		root.tag("any");
		root.val("d1");
		root.val("d2");
		root.val("d3");
		root.val("d4");
		root.end();
		root.end();
		root.tag("check");
		root.tag("is-empty?");
		root.val("w");
		root.end();
		root.end();
		root.tag("check");
		root.tag("is-empty?");
		root.val("w");
		root.val("w");
		root.end();
		root.end();
		root.tag("check");
		root.tag("is-empty?");
		root.val("w");
		root.val("w");
		root.val("w");
		root.end();
		root.end();
		root.tag("check");
		root.tag("is-empty?");
		root.val("nw");
		root.end();
		root.end();
		root.tag("check");
		root.tag("is-empty?");
		root.val("nw");
		root.val("nw");
		root.end();
		root.end();
		root.tag("check");
		root.tag("is-empty?");
		root.val("nw");
		root.val("nw");
		root.val("nw");
		root.end();
		root.end();
		root.tag("check");
		root.tag("is-empty?");
		root.val("sw");
		root.end();
		root.end();
		root.tag("check");
		root.tag("is-empty?");
		root.val("sw");
		root.val("sw");
		root.end();
		root.end();
		root.tag("check");
		root.tag("is-empty?");
		root.val("sw");
		root.val("sw");
		root.val("sw");
		root.end();
		root.end();
		root.tag("log");
		root.val("position");
		root.end();
		root.tag("drop");
		root.end();
		root.tag("end-move");
		root.end();
	}
}
