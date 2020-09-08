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

Dagaz.Model.BuildDesign = function(design) {
    design.checkVersion("z2j", "2");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");

    design.addDirection("se"); // 0
    design.addDirection("s");  // 1
    design.addDirection("sw"); // 2
    design.addDirection("e");  // 3
    design.addDirection("w");  // 4
    design.addDirection("ne"); // 5
    design.addDirection("nw"); // 6
    design.addDirection("n");  // 7

    design.addPlayer("White", [6, 7, 5, 4, 3, 2, 0, 1]);
    design.addPlayer("Black", [5, 7, 6, 3, 4, 0, 2, 1]);

    design.addPosition("a12", [13, 12, 0, 1, 0, 0, 0, 0]);
    design.addPosition("b12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("c12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("d12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("e12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("f12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("g12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("h12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("i12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("j12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("k12", [13, 12, 11, 1, -1, 0, 0, 0]);
    design.addPosition("l12", [0, 12, 11, 0, -1, 0, 0, 0]);
    design.addPosition("a11", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k11", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l11", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a10", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k10", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l10", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a9", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k9", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l9", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a8", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k8", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l8", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a7", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k7", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l7", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a6", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k6", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l6", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a5", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k5", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l5", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a4", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k4", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l4", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a3", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k3", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l3", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a2", [13, 12, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("c2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("d2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("e2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("f2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("g2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("h2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("i2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("j2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("k2", [13, 12, 11, 1, -1, -11, -13, -12]);
    design.addPosition("l2", [0, 12, 11, 0, -1, 0, -13, -12]);
    design.addPosition("a1", [0, 0, 0, 1, 0, -11, 0, -12]);
    design.addPosition("b1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("c1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("d1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("e1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("f1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("g1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("h1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("i1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("j1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("k1", [0, 0, 0, 1, -1, -11, -13, -12]);
    design.addPosition("l1", [0, 0, 0, 0, -1, 0, -13, -12]);

    design.addZone("last-rank", 1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    design.addZone("last-rank", 2, [132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143]);
    design.addZone("third-rank", 1, [108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119]);
    design.addZone("third-rank", 2, [24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.IF,	4);
    design.addCommand(0, ZRF.PROMOTE,	4);	// Queen
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.JUMP,	2);
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.IN_ZONE,	1);	// third-rank
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PARAM,	0);	// $1
    design.addCommand(2, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(2, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.IN_ZONE,	0);	// last-rank
    design.addCommand(2, ZRF.FUNCTION,	0);	// not
    design.addCommand(2, ZRF.IF,	4);
    design.addCommand(2, ZRF.PROMOTE,	4);	// Queen
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.JUMP,	2);
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PARAM,	0);	// $1
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	5);	// last-to?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.LITERAL,	0);	// Pawn
    design.addCommand(3, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	26);	// capture
    design.addCommand(3, ZRF.PARAM,	1);	// $2
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	6);	// mark
    design.addCommand(3, ZRF.PARAM,	2);	// $3
    design.addCommand(3, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(3, ZRF.FUNCTION,	4);	// last-from?
    design.addCommand(3, ZRF.FUNCTION,	20);	// verify
    design.addCommand(3, ZRF.FUNCTION,	7);	// back
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PARAM,	0);	// $1
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.IF,	7);
    design.addCommand(4, ZRF.FORK,	3);
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end
    design.addCommand(4, ZRF.PARAM,	1);	// $2
    design.addCommand(4, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(4, ZRF.JUMP,	-8);
    design.addCommand(4, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(4, ZRF.FUNCTION,	0);	// not
    design.addCommand(4, ZRF.FUNCTION,	20);	// verify
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.PARAM,	1);	// $2
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addPiece("Pawn", 0, 300);
    design.addMove(0, 0, [7], 0);
    design.addMove(0, 1, [7, 7], 0);
    design.addMove(0, 2, [6], 0);
    design.addMove(0, 2, [5], 0);
    design.addMove(0, 3, [3, 7, 7], 0);
    design.addMove(0, 3, [4, 7, 7], 0);

    design.addPiece("Rook", 1, 500);
    design.addMove(1, 4, [7, 7], 0);
    design.addMove(1, 4, [1, 1], 0);
    design.addMove(1, 4, [4, 4], 0);
    design.addMove(1, 4, [3, 3], 0);

    design.addPiece("Knight", 2, 320);
    design.addMove(2, 5, [7, 6], 0);
    design.addMove(2, 5, [7, 5], 0);
    design.addMove(2, 5, [1, 2], 0);
    design.addMove(2, 5, [1, 0], 0);
    design.addMove(2, 5, [4, 6], 0);
    design.addMove(2, 5, [4, 2], 0);
    design.addMove(2, 5, [3, 5], 0);
    design.addMove(2, 5, [3, 0], 0);

    design.addPiece("Bishop", 3, 330);
    design.addMove(3, 4, [6, 6], 0);
    design.addMove(3, 4, [2, 2], 0);
    design.addMove(3, 4, [5, 5], 0);
    design.addMove(3, 4, [0, 0], 0);

    design.addPiece("Queen", 4, 900);
    design.addMove(4, 4, [7, 7], 0);
    design.addMove(4, 4, [1, 1], 0);
    design.addMove(4, 4, [4, 4], 0);
    design.addMove(4, 4, [3, 3], 0);
    design.addMove(4, 4, [6, 6], 0);
    design.addMove(4, 4, [2, 2], 0);
    design.addMove(4, 4, [5, 5], 0);
    design.addMove(4, 4, [0, 0], 0);

    design.addPiece("King", 5, 20000);
    design.addMove(5, 6, [7], 0);
    design.addMove(5, 6, [1], 0);
    design.addMove(5, 6, [4], 0);
    design.addMove(5, 6, [3], 0);
    design.addMove(5, 6, [6], 0);
    design.addMove(5, 6, [2], 0);
    design.addMove(5, 6, [5], 0);
    design.addMove(5, 6, [0], 0);

    design.setup("White", "Pawn", 122);
    design.setup("White", "Pawn", 123);
    design.setup("White", "Pawn", 124);
    design.setup("White", "Pawn", 125);
    design.setup("White", "Pawn", 126);
    design.setup("White", "Pawn", 127);
    design.setup("White", "Pawn", 128);
    design.setup("White", "Pawn", 129);
    design.setup("White", "Rook", 134);
    design.setup("White", "Rook", 141);
    design.setup("White", "Knight", 135);
    design.setup("White", "Knight", 140);
    design.setup("White", "Bishop", 136);
    design.setup("White", "Bishop", 139);
    design.setup("White", "Queen", 137);
    design.setup("White", "King", 138);
    design.setup("Black", "Pawn", 14);
    design.setup("Black", "Pawn", 15);
    design.setup("Black", "Pawn", 16);
    design.setup("Black", "Pawn", 17);
    design.setup("Black", "Pawn", 18);
    design.setup("Black", "Pawn", 19);
    design.setup("Black", "Pawn", 20);
    design.setup("Black", "Pawn", 21);
    design.setup("Black", "Rook", 2);
    design.setup("Black", "Rook", 9);
    design.setup("Black", "Knight", 3);
    design.setup("Black", "Knight", 8);
    design.setup("Black", "Bishop", 4);
    design.setup("Black", "Bishop", 7);
    design.setup("Black", "Queen", 5);
    design.setup("Black", "King", 6);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhitePawn", "White Pawn");
    view.defPiece("BlackPawn", "Black Pawn");
    view.defPiece("WhiteRook", "White Rook");
    view.defPiece("BlackRook", "Black Rook");
    view.defPiece("WhiteKnight", "White Knight");
    view.defPiece("BlackKnight", "Black Knight");
    view.defPiece("WhiteBishop", "White Bishop");
    view.defPiece("BlackBishop", "Black Bishop");
    view.defPiece("WhiteQueen", "White Queen");
    view.defPiece("BlackQueen", "Black Queen");
    view.defPiece("WhiteKing", "White King");
    view.defPiece("BlackKing", "Black King");
 
    view.defPosition("a12", 2, 2, 50, 50);
    view.defPosition("b12", 52, 2, 50, 50);
    view.defPosition("c12", 102, 2, 50, 50);
    view.defPosition("d12", 152, 2, 50, 50);
    view.defPosition("e12", 202, 2, 50, 50);
    view.defPosition("f12", 252, 2, 50, 50);
    view.defPosition("g12", 302, 2, 50, 50);
    view.defPosition("h12", 352, 2, 50, 50);
    view.defPosition("i12", 402, 2, 50, 50);
    view.defPosition("j12", 452, 2, 50, 50);
    view.defPosition("k12", 502, 2, 50, 50);
    view.defPosition("l12", 552, 2, 50, 50);
    view.defPosition("a11", 2, 52, 50, 50);
    view.defPosition("b11", 52, 52, 50, 50);
    view.defPosition("c11", 102, 52, 50, 50);
    view.defPosition("d11", 152, 52, 50, 50);
    view.defPosition("e11", 202, 52, 50, 50);
    view.defPosition("f11", 252, 52, 50, 50);
    view.defPosition("g11", 302, 52, 50, 50);
    view.defPosition("h11", 352, 52, 50, 50);
    view.defPosition("i11", 402, 52, 50, 50);
    view.defPosition("j11", 452, 52, 50, 50);
    view.defPosition("k11", 502, 52, 50, 50);
    view.defPosition("l11", 552, 52, 50, 50);
    view.defPosition("a10", 2, 102, 50, 50);
    view.defPosition("b10", 52, 102, 50, 50);
    view.defPosition("c10", 102, 102, 50, 50);
    view.defPosition("d10", 152, 102, 50, 50);
    view.defPosition("e10", 202, 102, 50, 50);
    view.defPosition("f10", 252, 102, 50, 50);
    view.defPosition("g10", 302, 102, 50, 50);
    view.defPosition("h10", 352, 102, 50, 50);
    view.defPosition("i10", 402, 102, 50, 50);
    view.defPosition("j10", 452, 102, 50, 50);
    view.defPosition("k10", 502, 102, 50, 50);
    view.defPosition("l10", 552, 102, 50, 50);
    view.defPosition("a9", 2, 152, 50, 50);
    view.defPosition("b9", 52, 152, 50, 50);
    view.defPosition("c9", 102, 152, 50, 50);
    view.defPosition("d9", 152, 152, 50, 50);
    view.defPosition("e9", 202, 152, 50, 50);
    view.defPosition("f9", 252, 152, 50, 50);
    view.defPosition("g9", 302, 152, 50, 50);
    view.defPosition("h9", 352, 152, 50, 50);
    view.defPosition("i9", 402, 152, 50, 50);
    view.defPosition("j9", 452, 152, 50, 50);
    view.defPosition("k9", 502, 152, 50, 50);
    view.defPosition("l9", 552, 152, 50, 50);
    view.defPosition("a8", 2, 202, 50, 50);
    view.defPosition("b8", 52, 202, 50, 50);
    view.defPosition("c8", 102, 202, 50, 50);
    view.defPosition("d8", 152, 202, 50, 50);
    view.defPosition("e8", 202, 202, 50, 50);
    view.defPosition("f8", 252, 202, 50, 50);
    view.defPosition("g8", 302, 202, 50, 50);
    view.defPosition("h8", 352, 202, 50, 50);
    view.defPosition("i8", 402, 202, 50, 50);
    view.defPosition("j8", 452, 202, 50, 50);
    view.defPosition("k8", 502, 202, 50, 50);
    view.defPosition("l8", 552, 202, 50, 50);
    view.defPosition("a7", 2, 252, 50, 50);
    view.defPosition("b7", 52, 252, 50, 50);
    view.defPosition("c7", 102, 252, 50, 50);
    view.defPosition("d7", 152, 252, 50, 50);
    view.defPosition("e7", 202, 252, 50, 50);
    view.defPosition("f7", 252, 252, 50, 50);
    view.defPosition("g7", 302, 252, 50, 50);
    view.defPosition("h7", 352, 252, 50, 50);
    view.defPosition("i7", 402, 252, 50, 50);
    view.defPosition("j7", 452, 252, 50, 50);
    view.defPosition("k7", 502, 252, 50, 50);
    view.defPosition("l7", 552, 252, 50, 50);
    view.defPosition("a6", 2, 302, 50, 50);
    view.defPosition("b6", 52, 302, 50, 50);
    view.defPosition("c6", 102, 302, 50, 50);
    view.defPosition("d6", 152, 302, 50, 50);
    view.defPosition("e6", 202, 302, 50, 50);
    view.defPosition("f6", 252, 302, 50, 50);
    view.defPosition("g6", 302, 302, 50, 50);
    view.defPosition("h6", 352, 302, 50, 50);
    view.defPosition("i6", 402, 302, 50, 50);
    view.defPosition("j6", 452, 302, 50, 50);
    view.defPosition("k6", 502, 302, 50, 50);
    view.defPosition("l6", 552, 302, 50, 50);
    view.defPosition("a5", 2, 352, 50, 50);
    view.defPosition("b5", 52, 352, 50, 50);
    view.defPosition("c5", 102, 352, 50, 50);
    view.defPosition("d5", 152, 352, 50, 50);
    view.defPosition("e5", 202, 352, 50, 50);
    view.defPosition("f5", 252, 352, 50, 50);
    view.defPosition("g5", 302, 352, 50, 50);
    view.defPosition("h5", 352, 352, 50, 50);
    view.defPosition("i5", 402, 352, 50, 50);
    view.defPosition("j5", 452, 352, 50, 50);
    view.defPosition("k5", 502, 352, 50, 50);
    view.defPosition("l5", 552, 352, 50, 50);
    view.defPosition("a4", 2, 402, 50, 50);
    view.defPosition("b4", 52, 402, 50, 50);
    view.defPosition("c4", 102, 402, 50, 50);
    view.defPosition("d4", 152, 402, 50, 50);
    view.defPosition("e4", 202, 402, 50, 50);
    view.defPosition("f4", 252, 402, 50, 50);
    view.defPosition("g4", 302, 402, 50, 50);
    view.defPosition("h4", 352, 402, 50, 50);
    view.defPosition("i4", 402, 402, 50, 50);
    view.defPosition("j4", 452, 402, 50, 50);
    view.defPosition("k4", 502, 402, 50, 50);
    view.defPosition("l4", 552, 402, 50, 50);
    view.defPosition("a3", 2, 452, 50, 50);
    view.defPosition("b3", 52, 452, 50, 50);
    view.defPosition("c3", 102, 452, 50, 50);
    view.defPosition("d3", 152, 452, 50, 50);
    view.defPosition("e3", 202, 452, 50, 50);
    view.defPosition("f3", 252, 452, 50, 50);
    view.defPosition("g3", 302, 452, 50, 50);
    view.defPosition("h3", 352, 452, 50, 50);
    view.defPosition("i3", 402, 452, 50, 50);
    view.defPosition("j3", 452, 452, 50, 50);
    view.defPosition("k3", 502, 452, 50, 50);
    view.defPosition("l3", 552, 452, 50, 50);
    view.defPosition("a2", 2, 502, 50, 50);
    view.defPosition("b2", 52, 502, 50, 50);
    view.defPosition("c2", 102, 502, 50, 50);
    view.defPosition("d2", 152, 502, 50, 50);
    view.defPosition("e2", 202, 502, 50, 50);
    view.defPosition("f2", 252, 502, 50, 50);
    view.defPosition("g2", 302, 502, 50, 50);
    view.defPosition("h2", 352, 502, 50, 50);
    view.defPosition("i2", 402, 502, 50, 50);
    view.defPosition("j2", 452, 502, 50, 50);
    view.defPosition("k2", 502, 502, 50, 50);
    view.defPosition("l2", 552, 502, 50, 50);
    view.defPosition("a1", 2, 552, 50, 50);
    view.defPosition("b1", 52, 552, 50, 50);
    view.defPosition("c1", 102, 552, 50, 50);
    view.defPosition("d1", 152, 552, 50, 50);
    view.defPosition("e1", 202, 552, 50, 50);
    view.defPosition("f1", 252, 552, 50, 50);
    view.defPosition("g1", 302, 552, 50, 50);
    view.defPosition("h1", 352, 552, 50, 50);
    view.defPosition("i1", 402, 552, 50, 50);
    view.defPosition("j1", 452, 552, 50, 50);
    view.defPosition("k1", 502, 552, 50, 50);
    view.defPosition("l1", 552, 552, 50, 50);
}