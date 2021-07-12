Dagaz.Model.WIDTH      = 6;
Dagaz.Model.HEIGHT     = 6;
Dagaz.AI.g_flags       = 0x600000;

ZRF = {
    JUMP:          0,
    IF:            1,
    FORK:          2,
    FUNCTION:      3,
    IN_ZONE:       4,
    FLAG:          5,
    SET_FLAG:      6,
    POS_FLAG:      7,
    SET_POS_FLAG:  8,
    ATTR:          9,
    SET_ATTR:      10,
    PROMOTE:       11,
    MODE:          12,
    ON_BOARD_DIR:  13,
    ON_BOARD_POS:  14,
    PARAM:         15,
    LITERAL:       16,
    VERIFY:        20
};

Dagaz.AI.pieceAdj = [
  [   0,   0,   0,   0,   0,   0,   // pieceEmpty
      0,   0,   0,   0,   0,   0,
      0,   0,   0,   0,   0,   0,
      0,   0,   0,   0,   0,   0,
      0,   0,   0,   0,   0,   0,
      0,   0,   0,   0,   0,   0 ],
  [   0,   0,   0,   0,   0,   0,   // piecePawn
    -25, 105, 135, 135, 105, -25,
    -80,   0,  30,  30,   0, -80,
    -85,  -5,  25,  25,  -5, -85,
    -90, -10,  20,  20, -10, -90,
      0,   0,   0,   0,   0,   0 ],
  [-200,-100, -50, -50,-100,-200,   // pieceKnight
   -100,   0,   0,   0,   0,-100,
    -50,   0,  60,  60,   0, -50,
    -50,   0,  30,  30,   0, -50,
   -100,   0,   0,   0,   0,-100,
   -200, -50, -25, -25, -50,-200 ],
  [   0,   0,   0,   0,   0,   0,   // pieceBishop
      0,   0,   0,   0,   0,   0,
      0,   0,   0,   0,   0,   0,
      0,   0,   0,   0,   0,   0,
      0,   0,   0,   0,   0,   0,
      0,   0,   0,   0,   0,   0 ],
  [ -60, -30, -10, -10, -30, -60,   // pieceRook
     40,  70,  90,  90,  70,  40,
    -60, -30, -10, -10, -30, -60,
    -60, -30, -10, -10, -30, -60,
    -60, -30, -10, -10, -30, -60,
    -60, -30, -10, -10, -30, -60 ],
  [ -50, -50, -25, -25, -50, -50,   // pieceQueen
    -50, -25, -10, -10, -25, -50,
    -25, -10,   0,   0, -10, -25,
    -25, -10,   0,   0, -10, -25,
    -50, -25, -10, -10, -25, -50,
    -50, -50, -25, -25, -50, -50 ],
  [  50, 150, -25, -25, 150,  50,   // pieceKing
     50, 150, -25, -25, 150,  50,
     50, 150, -25, -25, 150,  50,
     50, 150, -25, -25, 150,  50,
     50, 150, -25, -25, 150,  50,
    150, 250,  75,  75, 250, 150 ]
];

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("advisor-wait", "10");
    design.checkVersion("chess-invariant", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");

    design.addPlayer("White", [1, 0, 4, 6, 2, 7, 3, 5]);
    design.addPlayer("Black", [1, 0, 4, 6, 2, 7, 3, 5]);

    design.addPosition("a6", [0, 1, 6, 0, 0, 7, 0, 0]);
    design.addPosition("b6", [-1, 1, 6, 0, 0, 7, 5, 0]);
    design.addPosition("c6", [-1, 1, 6, 0, 0, 7, 5, 0]);
    design.addPosition("d6", [-1, 1, 6, 0, 0, 7, 5, 0]);
    design.addPosition("e6", [-1, 1, 6, 0, 0, 7, 5, 0]);
    design.addPosition("f6", [-1, 0, 6, 0, 0, 0, 5, 0]);
    design.addPosition("a5", [0, 1, 6, -5, -6, 7, 0, 0]);
    design.addPosition("b5", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("c5", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("d5", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("e5", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("f5", [-1, 0, 6, 0, -6, 0, 5, -7]);
    design.addPosition("a4", [0, 1, 6, -5, -6, 7, 0, 0]);
    design.addPosition("b4", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("c4", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("d4", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("e4", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("f4", [-1, 0, 6, 0, -6, 0, 5, -7]);
    design.addPosition("a3", [0, 1, 6, -5, -6, 7, 0, 0]);
    design.addPosition("b3", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("c3", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("d3", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("e3", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("f3", [-1, 0, 6, 0, -6, 0, 5, -7]);
    design.addPosition("a2", [0, 1, 6, -5, -6, 7, 0, 0]);
    design.addPosition("b2", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("c2", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("d2", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("e2", [-1, 1, 6, -5, -6, 7, 5, -7]);
    design.addPosition("f2", [-1, 0, 6, 0, -6, 0, 5, -7]);
    design.addPosition("a1", [0, 1, 0, -5, -6, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -5, -6, 0, 0, -7]);
    design.addPosition("c1", [-1, 1, 0, -5, -6, 0, 0, -7]);
    design.addPosition("d1", [-1, 1, 0, -5, -6, 0, 0, -7]);
    design.addPosition("e1", [-1, 1, 0, -5, -6, 0, 0, -7]);
    design.addPosition("f1", [-1, 0, 0, 0, -6, 0, 0, -7]);
    design.addPosition("X1", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X2", [0, 0, 0, 0, 0, 0, 0, 0]);
    design.addPosition("X3", [0, 0, 0, 0, 0, 0, 0, 0]);

    design.addZone("last-rank", 1, [0, 1, 2, 3, 4, 5]);
    design.addZone("last-rank", 2, [30, 31, 32, 33, 34, 35]);
    design.addZone("third-rank", 1, [18, 19, 20, 21, 22, 23]);
    design.addZone("third-rank", 2, [12, 13, 14, 15, 16, 17]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.PROMOTE,	5);	// Queen
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.JUMP,	2);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.IF,	4);
    design.addCommand(1, ZRF.PROMOTE,	5);	// Queen
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.JUMP,	2);
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.IF,	7);
    design.addCommand(3, ZRF.FORK,	3);
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.JUMP,	-8);
    design.addCommand(3, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(3, ZRF.FUNCTION,	0);	// not
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addPiece("Pawn", 0, 100);
    design.addMove(0, 0, [4], 0);
    design.addMove(0, 1, [7], 0);
    design.addMove(0, 1, [3], 0);

    design.addPiece("King", 1, 20000);
    design.addMove(1, 2, [4], 0);
    design.addMove(1, 2, [2], 0);
    design.addMove(1, 2, [0], 0);
    design.addMove(1, 2, [1], 0);
    design.addMove(1, 2, [7], 0);
    design.addMove(1, 2, [6], 0);
    design.addMove(1, 2, [3], 0);
    design.addMove(1, 2, [5], 0);

    design.addPiece("Rook", 2, 500);
    design.addMove(2, 3, [4, 4], 0);
    design.addMove(2, 3, [2, 2], 0);
    design.addMove(2, 3, [0, 0], 0);
    design.addMove(2, 3, [1, 1], 0);

    design.addPiece("Knight", 3, 330);
    design.addMove(3, 4, [4, 7], 0);
    design.addMove(3, 4, [4, 3], 0);
    design.addMove(3, 4, [2, 6], 0);
    design.addMove(3, 4, [2, 5], 0);
    design.addMove(3, 4, [0, 7], 0);
    design.addMove(3, 4, [0, 6], 0);
    design.addMove(3, 4, [1, 3], 0);
    design.addMove(3, 4, [1, 5], 0);

    design.addPiece("Bishop", 4);
    design.addMove(4, 3, [7, 7], 0);
    design.addMove(4, 3, [6, 6], 0);
    design.addMove(4, 3, [3, 3], 0);
    design.addMove(4, 3, [5, 5], 0);

    design.addPiece("Queen", 5, 900);
    design.addMove(5, 3, [4, 4], 0);
    design.addMove(5, 3, [2, 2], 0);
    design.addMove(5, 3, [0, 0], 0);
    design.addMove(5, 3, [1, 1], 0);
    design.addMove(5, 3, [7, 7], 0);
    design.addMove(5, 3, [6, 6], 0);
    design.addMove(5, 3, [3, 3], 0);
    design.addMove(5, 3, [5, 5], 0);

    design.setup("White", "Pawn", 24);
    design.setup("White", "Pawn", 25);
    design.setup("White", "Pawn", 26);
    design.setup("White", "Pawn", 27);
    design.setup("White", "Pawn", 28);
    design.setup("White", "Pawn", 29);
    design.setup("White", "Rook", 30);
    design.setup("White", "Rook", 35);
    design.setup("White", "Knight", 31);
    design.setup("White", "Knight", 34);
    design.setup("White", "Queen", 32);
    design.setup("White", "King", 33);
    design.setup("Black", "Pawn", 6);
    design.setup("Black", "Pawn", 7);
    design.setup("Black", "Pawn", 8);
    design.setup("Black", "Pawn", 9);
    design.setup("Black", "Pawn", 10);
    design.setup("Black", "Pawn", 11);
    design.setup("Black", "Rook", 0);
    design.setup("Black", "Rook", 5);
    design.setup("Black", "Knight", 1);
    design.setup("Black", "Knight", 4);
    design.setup("Black", "Queen", 2);
    design.setup("Black", "King", 3);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhitePawn", "White Pawn");
    view.defPiece("BlackPawn", "Black Pawn");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
    view.defPiece("WhiteRook", "White Rook");
    view.defPiece("BlackRook", "Black Rook");
    view.defPiece("WhiteKnight", "White Knight");
    view.defPiece("BlackKnight", "Black Knight");
    view.defPiece("WhiteQueen", "White Queen");
    view.defPiece("BlackQueen", "Black Queen");
 
    view.defPosition("a6", 2, 2, 68, 68);
    view.defPosition("b6", 70, 2, 68, 68);
    view.defPosition("c6", 138, 2, 68, 68);
    view.defPosition("d6", 206, 2, 68, 68);
    view.defPosition("e6", 274, 2, 68, 68);
    view.defPosition("f6", 342, 2, 68, 68);
    view.defPosition("a5", 2, 70, 68, 68);
    view.defPosition("b5", 70, 70, 68, 68);
    view.defPosition("c5", 138, 70, 68, 68);
    view.defPosition("d5", 206, 70, 68, 68);
    view.defPosition("e5", 274, 70, 68, 68);
    view.defPosition("f5", 342, 70, 68, 68);
    view.defPosition("a4", 2, 138, 68, 68);
    view.defPosition("b4", 70, 138, 68, 68);
    view.defPosition("c4", 138, 138, 68, 68);
    view.defPosition("d4", 206, 138, 68, 68);
    view.defPosition("e4", 274, 138, 68, 68);
    view.defPosition("f4", 342, 138, 68, 68);
    view.defPosition("a3", 2, 206, 68, 68);
    view.defPosition("b3", 70, 206, 68, 68);
    view.defPosition("c3", 138, 206, 68, 68);
    view.defPosition("d3", 206, 206, 68, 68);
    view.defPosition("e3", 274, 206, 68, 68);
    view.defPosition("f3", 342, 206, 68, 68);
    view.defPosition("a2", 2, 274, 68, 68);
    view.defPosition("b2", 70, 274, 68, 68);
    view.defPosition("c2", 138, 274, 68, 68);
    view.defPosition("d2", 206, 274, 68, 68);
    view.defPosition("e2", 274, 274, 68, 68);
    view.defPosition("f2", 342, 274, 68, 68);
    view.defPosition("a1", 2, 342, 68, 68);
    view.defPosition("b1", 70, 342, 68, 68);
    view.defPosition("c1", 138, 342, 68, 68);
    view.defPosition("d1", 206, 342, 68, 68);
    view.defPosition("e1", 274, 342, 68, 68);
    view.defPosition("f1", 342, 342, 68, 68);

    view.defPopup("Promote", 94, 110);
    view.defPopupPosition("X1", 10, 7, 68, 68);
    view.defPopupPosition("X2", 80, 7, 68, 68);
    view.defPopupPosition("X3", 150, 7, 68, 68);
}
