Dagaz.Model.WIDTH  = 15;
Dagaz.Model.HEIGHT = 9;

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
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-blink", "true");
    design.checkVersion("pass-partial", "true");
    design.checkVersion("pass-turn", "forced");
    design.checkVersion("shared-pieces", "true");
    design.checkVersion("magyar-invariant", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("ne");
    design.addDirection("se");
    design.addDirection("nw");
    design.addDirection("sw");

    design.addPlayer("Red", [1, 0, 5, 4, 3, 2]);
    design.addPlayer("White", [0, 1, 2, 3, 4, 5]);
    design.addPlayer("N", [0, 1, 2, 3, 4, 5]);
    design.addTurn(1);
    design.addTurn(2);

    design.addPosition("A9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("B9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("C9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("D9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("E9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("F9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("G9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("H9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("I9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("J9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("K9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("L9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("M9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("N9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("O9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("A8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("B8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("C8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("D8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("E8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("F8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("G8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("H8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("I8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("J8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("K8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("L8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("M8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("N8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("O8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("A7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("B7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("C7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("D7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("E7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("F7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("G7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("H7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("I7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("J7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("K7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("L7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("M7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("N7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("O7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("A6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("B6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("C6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("D6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("E6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("F6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("G6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("H6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("I6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("J6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("K6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("L6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("M6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("N6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("O6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("A5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("B5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("C5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("D5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("E5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("F5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("G5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("H5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("I5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("J5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("K5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("L5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("M5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("N5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("O5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("A4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("B4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("C4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("D4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("E4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("F4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("G4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("H4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("I4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("J4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("K4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("L4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("M4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("N4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("O4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("A3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("B3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("C3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("D3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("E3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("F3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("G3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("H3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("I3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("J3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("K3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("L3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("M3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("N3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("O3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("A2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("B2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("C2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("D2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("E2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("F2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("G2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("H2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("I2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("J2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("K2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("L2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("M2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("N2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("O2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("A1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("B1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("C1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("D1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("E1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("F1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("G1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("H1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("I1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("J1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("K1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("L1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("M1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("N1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("O1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("a9", [0, 1, 0, 16, 0, 0]);
    design.addPosition("b9", [-1, 1, 0, 16, 0, 15]);
    design.addPosition("c9", [-1, 1, 0, 16, 0, 15]);
    design.addPosition("d9", [-1, 1, 0, 16, 0, 15]);
    design.addPosition("e9", [-1, 1, 0, 16, 0, 15]);
    design.addPosition("f9", [-1, 1, 0, 16, 0, 15]);
    design.addPosition("g9", [-1, 1, 0, 16, 0, 15]);
    design.addPosition("h9", [-1, 1, 0, 16, 0, 15]);
    design.addPosition("i9", [-1, 1, 0, 16, 0, 15]);
    design.addPosition("j9", [-1, 1, 0, 16, 0, 15]);
    design.addPosition("k9", [-1, 0, 0, 0, 0, 15]);
    design.addPosition("l9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("m9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("n9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("o9", [0, 0, 0, 0, 0, 0]);
    design.addPosition("a8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("b8", [0, 1, -15, 16, -16, 15]);
    design.addPosition("c8", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("d8", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("e8", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("f8", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("g8", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("h8", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("i8", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("j8", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("k8", [-1, 0, -15, 16, -16, 15]);
    design.addPosition("l8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("m8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("n8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("o8", [0, 0, 0, 0, 0, 0]);
    design.addPosition("a7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("b7", [0, 1, -15, 16, 0, 0]);
    design.addPosition("c7", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("d7", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("e7", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("f7", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("g7", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("h7", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("i7", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("j7", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("k7", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("l7", [-1, 0, 0, 0, -16, 15]);
    design.addPosition("m7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("n7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("o7", [0, 0, 0, 0, 0, 0]);
    design.addPosition("a6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("b6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("c6", [0, 1, -15, 16, -16, 15]);
    design.addPosition("d6", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("e6", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("f6", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("g6", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("h6", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("i6", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("j6", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("k6", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("l6", [-1, 0, -15, 16, -16, 15]);
    design.addPosition("m6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("n6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("o6", [0, 0, 0, 0, 0, 0]);
    design.addPosition("a5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("b5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("c5", [0, 1, -15, 16, 0, 0]);
    design.addPosition("d5", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("e5", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("f5", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("g5", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("h5", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("i5", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("j5", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("k5", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("l5", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("m5", [-1, 0, 0, 0, -16, 15]);
    design.addPosition("n5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("o5", [0, 0, 0, 0, 0, 0]);
    design.addPosition("a4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("b4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("c4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("d4", [0, 1, -15, 16, -16, 15]);
    design.addPosition("e4", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("f4", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("g4", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("h4", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("i4", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("j4", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("k4", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("l4", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("m4", [-1, 0, -15, 16, -16, 15]);
    design.addPosition("n4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("o4", [0, 0, 0, 0, 0, 0]);
    design.addPosition("a3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("b3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("c3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("d3", [0, 1, -15, 16, 0, 0]);
    design.addPosition("e3", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("f3", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("g3", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("h3", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("i3", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("j3", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("k3", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("l3", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("m3", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("n3", [-1, 0, 0, 0, -16, 15]);
    design.addPosition("o3", [0, 0, 0, 0, 0, 0]);
    design.addPosition("a2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("b2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("c2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("d2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("e2", [0, 1, -15, 16, -16, 15]);
    design.addPosition("f2", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("g2", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("h2", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("i2", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("j2", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("k2", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("l2", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("m2", [-1, 1, -15, 16, -16, 15]);
    design.addPosition("n2", [-1, 0, -15, 16, -16, 15]);
    design.addPosition("o2", [0, 0, 0, 0, 0, 0]);
    design.addPosition("a1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("b1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("c1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("d1", [0, 0, 0, 0, 0, 0]);
    design.addPosition("e1", [0, 1, -15, 0, 0, 0]);
    design.addPosition("f1", [-1, 1, -15, 0, -16, 0]);
    design.addPosition("g1", [-1, 1, -15, 0, -16, 0]);
    design.addPosition("h1", [-1, 1, -15, 0, -16, 0]);
    design.addPosition("i1", [-1, 1, -15, 0, -16, 0]);
    design.addPosition("j1", [-1, 1, -15, 0, -16, 0]);
    design.addPosition("k1", [-1, 1, -15, 0, -16, 0]);
    design.addPosition("l1", [-1, 1, -15, 0, -16, 0]);
    design.addPosition("m1", [-1, 1, -15, 0, -16, 0]);
    design.addPosition("n1", [-1, 1, -15, 0, -16, 0]);
    design.addPosition("o1", [-1, 0, 0, 0, -16, 0]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	26);	// capture
    design.addCommand(1, ZRF.PARAM,	1);	// $2
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.MODE,	1);	// jump-type
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addPiece("Tile", 0);

    design.addPiece("Stone", 1);
    design.addMove(1, 0, [1], 0);
    design.addMove(1, 0, [0], 0);
    design.addMove(1, 0, [2], 0);
    design.addMove(1, 0, [5], 0);
    design.addMove(1, 0, [4], 0);
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 1, [1, 1], 1);
    design.addMove(1, 1, [0, 0], 1);
    design.addMove(1, 1, [2, 2], 1);
    design.addMove(1, 1, [5, 5], 1);
    design.addMove(1, 1, [4, 4], 1);
    design.addMove(1, 1, [3, 3], 1);

    design.setup("N", "Tile", 99);
    design.setup("N", "Tile", 50);
    design.setup("N", "Tile", 51);
    design.setup("N", "Tile", 52);
    design.setup("N", "Tile", 53);
    design.setup("N", "Tile", 98);
    design.setup("N", "Tile", 35);
    design.setup("N", "Tile", 36);
    design.setup("N", "Tile", 37);
    design.setup("N", "Tile", 97);
    design.setup("N", "Tile", 65);
    design.setup("N", "Tile", 81);
    design.setup("N", "Tile", 69);
    design.setup("N", "Tile", 66);
    design.setup("N", "Tile", 67);
    design.setup("N", "Tile", 68);
    design.setup("N", "Tile", 84);
    design.setup("N", "Tile", 82);
    design.setup("N", "Tile", 83);
    design.setup("Red", "Stone", 232);
    design.setup("Red", "Stone", 233);
    design.setup("Red", "Stone", 234);
    design.setup("Red", "Stone", 216);
    design.setup("Red", "Stone", 217);
    design.setup("Red", "Stone", 218);
    design.setup("Red", "Stone", 219);
    design.setup("Red", "Stone", 203);
    design.setup("Red", "Stone", 204);
    design.setup("White", "Stone", 170);
    design.setup("White", "Stone", 171);
    design.setup("White", "Stone", 172);
    design.setup("White", "Stone", 185);
    design.setup("White", "Stone", 186);
    design.setup("White", "Stone", 187);
    design.setup("White", "Stone", 188);
    design.setup("White", "Stone", 200);
    design.setup("White", "Stone", 201);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("NTile", "N Tile");
    view.defPiece("RedStone", "Red Stone");
    view.defPiece("WhiteStone", "White Stone");
 
    view.defPosition("A9", 0, 0, 99, 115);
    view.defPosition("B9", 104, 0, 99, 115);
    view.defPosition("C9", 208, 0, 99, 115);
    view.defPosition("D9", 312, 0, 99, 115);
    view.defPosition("E9", 416, 0, 99, 115);
    view.defPosition("F9", 520, 0, 99, 115);
    view.defPosition("G9", 624, 0, 99, 115);
    view.defPosition("H9", 728, 0, 99, 115);
    view.defPosition("I9", 832, 0, 99, 115);
    view.defPosition("J9", 936, 0, 99, 115);
    view.defPosition("K9", 1040, 0, 99, 115);
    view.defPosition("L9", 1144, 0, 99, 115);
    view.defPosition("M9", 1248, 0, 99, 115);
    view.defPosition("N9", 1352, 0, 99, 115);
    view.defPosition("O9", 1456, 0, 99, 115);
    view.defPosition("A8", -52, 90, 99, 115);
    view.defPosition("B8", 52, 90, 99, 115);
    view.defPosition("C8", 156, 90, 99, 115);
    view.defPosition("D8", 260, 90, 99, 115);
    view.defPosition("E8", 364, 90, 99, 115);
    view.defPosition("F8", 468, 90, 99, 115);
    view.defPosition("G8", 572, 90, 99, 115);
    view.defPosition("H8", 676, 90, 99, 115);
    view.defPosition("I8", 780, 90, 99, 115);
    view.defPosition("J8", 884, 90, 99, 115);
    view.defPosition("K8", 988, 90, 99, 115);
    view.defPosition("L8", 1092, 90, 99, 115);
    view.defPosition("M8", 1196, 90, 99, 115);
    view.defPosition("N8", 1300, 90, 99, 115);
    view.defPosition("O8", 1404, 90, 99, 115);
    view.defPosition("A7", -104, 180, 99, 115);
    view.defPosition("B7", 0, 180, 99, 115);
    view.defPosition("C7", 104, 180, 99, 115);
    view.defPosition("D7", 208, 180, 99, 115);
    view.defPosition("E7", 312, 180, 99, 115);
    view.defPosition("F7", 416, 180, 99, 115);
    view.defPosition("G7", 520, 180, 99, 115);
    view.defPosition("H7", 624, 180, 99, 115);
    view.defPosition("I7", 728, 180, 99, 115);
    view.defPosition("J7", 832, 180, 99, 115);
    view.defPosition("K7", 936, 180, 99, 115);
    view.defPosition("L7", 1040, 180, 99, 115);
    view.defPosition("M7", 1144, 180, 99, 115);
    view.defPosition("N7", 1248, 180, 99, 115);
    view.defPosition("O7", 1352, 180, 99, 115);
    view.defPosition("A6", -156, 270, 99, 115);
    view.defPosition("B6", -52, 270, 99, 115);
    view.defPosition("C6", 52, 270, 99, 115);
    view.defPosition("D6", 156, 270, 99, 115);
    view.defPosition("E6", 260, 270, 99, 115);
    view.defPosition("F6", 364, 270, 99, 115);
    view.defPosition("G6", 468, 270, 99, 115);
    view.defPosition("H6", 572, 270, 99, 115);
    view.defPosition("I6", 676, 270, 99, 115);
    view.defPosition("J6", 780, 270, 99, 115);
    view.defPosition("K6", 884, 270, 99, 115);
    view.defPosition("L6", 988, 270, 99, 115);
    view.defPosition("M6", 1092, 270, 99, 115);
    view.defPosition("N6", 1196, 270, 99, 115);
    view.defPosition("O6", 1300, 270, 99, 115);
    view.defPosition("A5", -208, 360, 99, 115);
    view.defPosition("B5", -104, 360, 99, 115);
    view.defPosition("C5", 0, 360, 99, 115);
    view.defPosition("D5", 104, 360, 99, 115);
    view.defPosition("E5", 208, 360, 99, 115);
    view.defPosition("F5", 312, 360, 99, 115);
    view.defPosition("G5", 416, 360, 99, 115);
    view.defPosition("H5", 520, 360, 99, 115);
    view.defPosition("I5", 624, 360, 99, 115);
    view.defPosition("J5", 728, 360, 99, 115);
    view.defPosition("K5", 832, 360, 99, 115);
    view.defPosition("L5", 936, 360, 99, 115);
    view.defPosition("M5", 1040, 360, 99, 115);
    view.defPosition("N5", 1144, 360, 99, 115);
    view.defPosition("O5", 1248, 360, 99, 115);
    view.defPosition("A4", -260, 450, 99, 115);
    view.defPosition("B4", -156, 450, 99, 115);
    view.defPosition("C4", -52, 450, 99, 115);
    view.defPosition("D4", 52, 450, 99, 115);
    view.defPosition("E4", 156, 450, 99, 115);
    view.defPosition("F4", 260, 450, 99, 115);
    view.defPosition("G4", 364, 450, 99, 115);
    view.defPosition("H4", 468, 450, 99, 115);
    view.defPosition("I4", 572, 450, 99, 115);
    view.defPosition("J4", 676, 450, 99, 115);
    view.defPosition("K4", 780, 450, 99, 115);
    view.defPosition("L4", 884, 450, 99, 115);
    view.defPosition("M4", 988, 450, 99, 115);
    view.defPosition("N4", 1092, 450, 99, 115);
    view.defPosition("O4", 1196, 450, 99, 115);
    view.defPosition("A3", -312, 540, 99, 115);
    view.defPosition("B3", -208, 540, 99, 115);
    view.defPosition("C3", -104, 540, 99, 115);
    view.defPosition("D3", 0, 540, 99, 115);
    view.defPosition("E3", 104, 540, 99, 115);
    view.defPosition("F3", 208, 540, 99, 115);
    view.defPosition("G3", 312, 540, 99, 115);
    view.defPosition("H3", 416, 540, 99, 115);
    view.defPosition("I3", 520, 540, 99, 115);
    view.defPosition("J3", 624, 540, 99, 115);
    view.defPosition("K3", 728, 540, 99, 115);
    view.defPosition("L3", 832, 540, 99, 115);
    view.defPosition("M3", 936, 540, 99, 115);
    view.defPosition("N3", 1040, 540, 99, 115);
    view.defPosition("O3", 1144, 540, 99, 115);
    view.defPosition("A2", -364, 630, 99, 115);
    view.defPosition("B2", -260, 630, 99, 115);
    view.defPosition("C2", -156, 630, 99, 115);
    view.defPosition("D2", -52, 630, 99, 115);
    view.defPosition("E2", 52, 630, 99, 115);
    view.defPosition("F2", 156, 630, 99, 115);
    view.defPosition("G2", 260, 630, 99, 115);
    view.defPosition("H2", 364, 630, 99, 115);
    view.defPosition("I2", 468, 630, 99, 115);
    view.defPosition("J2", 572, 630, 99, 115);
    view.defPosition("K2", 676, 630, 99, 115);
    view.defPosition("L2", 780, 630, 99, 115);
    view.defPosition("M2", 884, 630, 99, 115);
    view.defPosition("N2", 988, 630, 99, 115);
    view.defPosition("O2", 1092, 630, 99, 115);
    view.defPosition("A1", -416, 720, 99, 115);
    view.defPosition("B1", -312, 720, 99, 115);
    view.defPosition("C1", -208, 720, 99, 115);
    view.defPosition("D1", -104, 720, 99, 115);
    view.defPosition("E1", 0, 720, 99, 115);
    view.defPosition("F1", 104, 720, 99, 115);
    view.defPosition("G1", 208, 720, 99, 115);
    view.defPosition("H1", 312, 720, 99, 115);
    view.defPosition("I1", 416, 720, 99, 115);
    view.defPosition("J1", 520, 720, 99, 115);
    view.defPosition("K1", 624, 720, 99, 115);
    view.defPosition("L1", 728, 720, 99, 115);
    view.defPosition("M1", 832, 720, 99, 115);
    view.defPosition("N1", 936, 720, 99, 115);
    view.defPosition("O1", 1040, 720, 99, 115);
    view.defPosition("a9", 20, 20, 59, 75);
    view.defPosition("b9", 124, 20, 59, 75);
    view.defPosition("c9", 228, 20, 59, 75);
    view.defPosition("d9", 332, 20, 59, 75);
    view.defPosition("e9", 436, 20, 59, 75);
    view.defPosition("f9", 540, 20, 59, 75);
    view.defPosition("g9", 644, 20, 59, 75);
    view.defPosition("h9", 748, 20, 59, 75);
    view.defPosition("i9", 852, 20, 59, 75);
    view.defPosition("j9", 956, 20, 59, 75);
    view.defPosition("k9", 1060, 20, 59, 75);
    view.defPosition("l9", 1164, 20, 59, 75);
    view.defPosition("m9", 1268, 20, 59, 75);
    view.defPosition("n9", 1372, 20, 59, 75);
    view.defPosition("o9", 1476, 20, 59, 75);
    view.defPosition("a8", -32, 110, 59, 75);
    view.defPosition("b8", 72, 110, 59, 75);
    view.defPosition("c8", 176, 110, 59, 75);
    view.defPosition("d8", 280, 110, 59, 75);
    view.defPosition("e8", 384, 110, 59, 75);
    view.defPosition("f8", 488, 110, 59, 75);
    view.defPosition("g8", 592, 110, 59, 75);
    view.defPosition("h8", 696, 110, 59, 75);
    view.defPosition("i8", 800, 110, 59, 75);
    view.defPosition("j8", 904, 110, 59, 75);
    view.defPosition("k8", 1008, 110, 59, 75);
    view.defPosition("l8", 1112, 110, 59, 75);
    view.defPosition("m8", 1216, 110, 59, 75);
    view.defPosition("n8", 1320, 110, 59, 75);
    view.defPosition("o8", 1424, 110, 59, 75);
    view.defPosition("a7", -84, 200, 59, 75);
    view.defPosition("b7", 20, 200, 59, 75);
    view.defPosition("c7", 124, 200, 59, 75);
    view.defPosition("d7", 228, 200, 59, 75);
    view.defPosition("e7", 332, 200, 59, 75);
    view.defPosition("f7", 436, 200, 59, 75);
    view.defPosition("g7", 540, 200, 59, 75);
    view.defPosition("h7", 644, 200, 59, 75);
    view.defPosition("i7", 748, 200, 59, 75);
    view.defPosition("j7", 852, 200, 59, 75);
    view.defPosition("k7", 956, 200, 59, 75);
    view.defPosition("l7", 1060, 200, 59, 75);
    view.defPosition("m7", 1164, 200, 59, 75);
    view.defPosition("n7", 1268, 200, 59, 75);
    view.defPosition("o7", 1372, 200, 59, 75);
    view.defPosition("a6", -136, 290, 59, 75);
    view.defPosition("b6", -32, 290, 59, 75);
    view.defPosition("c6", 72, 290, 59, 75);
    view.defPosition("d6", 176, 290, 59, 75);
    view.defPosition("e6", 280, 290, 59, 75);
    view.defPosition("f6", 384, 290, 59, 75);
    view.defPosition("g6", 488, 290, 59, 75);
    view.defPosition("h6", 592, 290, 59, 75);
    view.defPosition("i6", 696, 290, 59, 75);
    view.defPosition("j6", 800, 290, 59, 75);
    view.defPosition("k6", 904, 290, 59, 75);
    view.defPosition("l6", 1008, 290, 59, 75);
    view.defPosition("m6", 1112, 290, 59, 75);
    view.defPosition("n6", 1216, 290, 59, 75);
    view.defPosition("o6", 1320, 290, 59, 75);
    view.defPosition("a5", -188, 380, 59, 75);
    view.defPosition("b5", -84, 380, 59, 75);
    view.defPosition("c5", 20, 380, 59, 75);
    view.defPosition("d5", 124, 380, 59, 75);
    view.defPosition("e5", 228, 380, 59, 75);
    view.defPosition("f5", 332, 380, 59, 75);
    view.defPosition("g5", 436, 380, 59, 75);
    view.defPosition("h5", 540, 380, 59, 75);
    view.defPosition("i5", 644, 380, 59, 75);
    view.defPosition("j5", 748, 380, 59, 75);
    view.defPosition("k5", 852, 380, 59, 75);
    view.defPosition("l5", 956, 380, 59, 75);
    view.defPosition("m5", 1060, 380, 59, 75);
    view.defPosition("n5", 1164, 380, 59, 75);
    view.defPosition("o5", 1268, 380, 59, 75);
    view.defPosition("a4", -240, 470, 59, 75);
    view.defPosition("b4", -136, 470, 59, 75);
    view.defPosition("c4", -32, 470, 59, 75);
    view.defPosition("d4", 72, 470, 59, 75);
    view.defPosition("e4", 176, 470, 59, 75);
    view.defPosition("f4", 280, 470, 59, 75);
    view.defPosition("g4", 384, 470, 59, 75);
    view.defPosition("h4", 488, 470, 59, 75);
    view.defPosition("i4", 592, 470, 59, 75);
    view.defPosition("j4", 696, 470, 59, 75);
    view.defPosition("k4", 800, 470, 59, 75);
    view.defPosition("l4", 904, 470, 59, 75);
    view.defPosition("m4", 1008, 470, 59, 75);
    view.defPosition("n4", 1112, 470, 59, 75);
    view.defPosition("o4", 1216, 470, 59, 75);
    view.defPosition("a3", -292, 560, 59, 75);
    view.defPosition("b3", -188, 560, 59, 75);
    view.defPosition("c3", -84, 560, 59, 75);
    view.defPosition("d3", 20, 560, 59, 75);
    view.defPosition("e3", 124, 560, 59, 75);
    view.defPosition("f3", 228, 560, 59, 75);
    view.defPosition("g3", 332, 560, 59, 75);
    view.defPosition("h3", 436, 560, 59, 75);
    view.defPosition("i3", 540, 560, 59, 75);
    view.defPosition("j3", 644, 560, 59, 75);
    view.defPosition("k3", 748, 560, 59, 75);
    view.defPosition("l3", 852, 560, 59, 75);
    view.defPosition("m3", 956, 560, 59, 75);
    view.defPosition("n3", 1060, 560, 59, 75);
    view.defPosition("o3", 1164, 560, 59, 75);
    view.defPosition("a2", -344, 650, 59, 75);
    view.defPosition("b2", -240, 650, 59, 75);
    view.defPosition("c2", -136, 650, 59, 75);
    view.defPosition("d2", -32, 650, 59, 75);
    view.defPosition("e2", 72, 650, 59, 75);
    view.defPosition("f2", 176, 650, 59, 75);
    view.defPosition("g2", 280, 650, 59, 75);
    view.defPosition("h2", 384, 650, 59, 75);
    view.defPosition("i2", 488, 650, 59, 75);
    view.defPosition("j2", 592, 650, 59, 75);
    view.defPosition("k2", 696, 650, 59, 75);
    view.defPosition("l2", 800, 650, 59, 75);
    view.defPosition("m2", 904, 650, 59, 75);
    view.defPosition("n2", 1008, 650, 59, 75);
    view.defPosition("o2", 1112, 650, 59, 75);
    view.defPosition("a1", -396, 740, 59, 75);
    view.defPosition("b1", -292, 740, 59, 75);
    view.defPosition("c1", -188, 740, 59, 75);
    view.defPosition("d1", -84, 740, 59, 75);
    view.defPosition("e1", 20, 740, 59, 75);
    view.defPosition("f1", 124, 740, 59, 75);
    view.defPosition("g1", 228, 740, 59, 75);
    view.defPosition("h1", 332, 740, 59, 75);
    view.defPosition("i1", 436, 740, 59, 75);
    view.defPosition("j1", 540, 740, 59, 75);
    view.defPosition("k1", 644, 740, 59, 75);
    view.defPosition("l1", 748, 740, 59, 75);
    view.defPosition("m1", 852, 740, 59, 75);
    view.defPosition("n1", 956, 740, 59, 75);
    view.defPosition("o1", 1060, 740, 59, 75);
}
