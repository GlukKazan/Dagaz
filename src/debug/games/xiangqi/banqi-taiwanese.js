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
    design.checkVersion("animate-drops", "false");
    design.checkVersion("animate-captures", "false");
    design.checkVersion("smart-moves", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-blink", "false");
    design.checkVersion("shared-pieces", "true");
    design.checkVersion("pass-partial", "true");
    design.checkVersion("banqi-setup", "true");
    design.checkVersion("banqi-extension", "true");
    design.checkVersion("banqi-invariant", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("n");

    design.addPlayer("Red", [1, 0, 3, 2]);
    design.addPlayer("Black", [0, 1, 2, 3]);

    design.addPosition("a4", [0, 1, 8, 0]);
    design.addPosition("b4", [-1, 1, 8, 0]);
    design.addPosition("c4", [-1, 1, 8, 0]);
    design.addPosition("d4", [-1, 1, 8, 0]);
    design.addPosition("e4", [-1, 1, 8, 0]);
    design.addPosition("f4", [-1, 1, 8, 0]);
    design.addPosition("g4", [-1, 1, 8, 0]);
    design.addPosition("h4", [-1, 0, 8, 0]);
    design.addPosition("a3", [0, 1, 8, -8]);
    design.addPosition("b3", [-1, 1, 8, -8]);
    design.addPosition("c3", [-1, 1, 8, -8]);
    design.addPosition("d3", [-1, 1, 8, -8]);
    design.addPosition("e3", [-1, 1, 8, -8]);
    design.addPosition("f3", [-1, 1, 8, -8]);
    design.addPosition("g3", [-1, 1, 8, -8]);
    design.addPosition("h3", [-1, 0, 8, -8]);
    design.addPosition("a2", [0, 1, 8, -8]);
    design.addPosition("b2", [-1, 1, 8, -8]);
    design.addPosition("c2", [-1, 1, 8, -8]);
    design.addPosition("d2", [-1, 1, 8, -8]);
    design.addPosition("e2", [-1, 1, 8, -8]);
    design.addPosition("f2", [-1, 1, 8, -8]);
    design.addPosition("g2", [-1, 1, 8, -8]);
    design.addPosition("h2", [-1, 0, 8, -8]);
    design.addPosition("a1", [0, 1, 0, -8]);
    design.addPosition("b1", [-1, 1, 0, -8]);
    design.addPosition("c1", [-1, 1, 0, -8]);
    design.addPosition("d1", [-1, 1, 0, -8]);
    design.addPosition("e1", [-1, 1, 0, -8]);
    design.addPosition("f1", [-1, 1, 0, -8]);
    design.addPosition("g1", [-1, 1, 0, -8]);
    design.addPosition("h1", [-1, 0, 0, -8]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PROMOTE,	7);	// General
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PROMOTE,	8);	// Advisor
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.FUNCTION,	24);	// from
    design.addCommand(2, ZRF.PROMOTE,	9);	// Elephant
    design.addCommand(2, ZRF.FUNCTION,	25);	// to
    design.addCommand(2, ZRF.FUNCTION,	28);	// end

    design.addCommand(3, ZRF.FUNCTION,	24);	// from
    design.addCommand(3, ZRF.PROMOTE,	10);	// Chariot
    design.addCommand(3, ZRF.FUNCTION,	25);	// to
    design.addCommand(3, ZRF.FUNCTION,	28);	// end

    design.addCommand(4, ZRF.FUNCTION,	24);	// from
    design.addCommand(4, ZRF.PROMOTE,	11);	// Horse
    design.addCommand(4, ZRF.FUNCTION,	25);	// to
    design.addCommand(4, ZRF.FUNCTION,	28);	// end

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PROMOTE,	12);	// Cannon
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PROMOTE,	13);	// Soldier
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.PARAM,	0);	// $1
    design.addCommand(7, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addCommand(8, ZRF.FUNCTION,	24);	// from
    design.addCommand(8, ZRF.PARAM,	0);	// $1
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	7);
    design.addCommand(8, ZRF.FORK,	3);
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end
    design.addCommand(8, ZRF.PARAM,	1);	// $2
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.JUMP,	-8);
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.PARAM,	2);	// $3
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.IF,	4);
    design.addCommand(8, ZRF.PARAM,	3);	// $4
    design.addCommand(8, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(8, ZRF.JUMP,	-5);
    design.addCommand(8, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	0);	// UnknownGeneral
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	1);	// UnknownAdvisor
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	2);	// UnknownElephant
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	3);	// UnknownChariot
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	4);	// UnknownHorse
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	5);	// UnknownCannon
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.LITERAL,	6);	// UnknownSoldier
    design.addCommand(8, ZRF.FUNCTION,	10);	// piece?
    design.addCommand(8, ZRF.FUNCTION,	0);	// not
    design.addCommand(8, ZRF.FUNCTION,	20);	// verify
    design.addCommand(8, ZRF.FUNCTION,	25);	// to
    design.addCommand(8, ZRF.FUNCTION,	28);	// end

    design.addPiece("UnknownGeneral", 0, 0);
    design.addMove(0, 0, [], 0);

    design.addPiece("UnknownAdvisor", 1, 0);
    design.addMove(1, 1, [], 0);

    design.addPiece("UnknownElephant", 2, 0);
    design.addMove(2, 2, [], 0);

    design.addPiece("UnknownChariot", 3, 0);
    design.addMove(3, 3, [], 0);

    design.addPiece("UnknownHorse", 4, 0);
    design.addMove(4, 4, [], 0);

    design.addPiece("UnknownCannon", 5, 0);
    design.addMove(5, 5, [], 0);

    design.addPiece("UnknownSoldier", 6, 0);
    design.addMove(6, 6, [], 0);

    design.addPiece("General", 7, 50);
    design.addMove(7, 7, [3], 0);
    design.addMove(7, 7, [1], 0);
    design.addMove(7, 7, [0], 0);
    design.addMove(7, 7, [2], 0);

    design.addPiece("Advisor", 8, 60);
    design.addMove(8, 7, [3], 0);
    design.addMove(8, 7, [1], 0);
    design.addMove(8, 7, [0], 0);
    design.addMove(8, 7, [2], 0);

    design.addPiece("Elephant", 9, 30);
    design.addMove(9, 7, [3], 0);
    design.addMove(9, 7, [1], 0);
    design.addMove(9, 7, [0], 0);
    design.addMove(9, 7, [2], 0);

    design.addPiece("Chariot", 10, 20);
    design.addMove(10, 7, [3], 0);
    design.addMove(10, 7, [1], 0);
    design.addMove(10, 7, [0], 0);
    design.addMove(10, 7, [2], 0);

    design.addPiece("Horse", 11, 10);
    design.addMove(11, 7, [3], 0);
    design.addMove(11, 7, [1], 0);
    design.addMove(11, 7, [0], 0);
    design.addMove(11, 7, [2], 0);

    design.addPiece("Cannon", 12, 100);
    design.addMove(12, 8, [3, 3, 3, 3], 0);
    design.addMove(12, 8, [2, 2, 2, 2], 0);
    design.addMove(12, 8, [0, 0, 0, 0], 0);
    design.addMove(12, 8, [1, 1, 1, 1], 0);

    design.addPiece("Soldier", 13, 40);
    design.addMove(13, 7, [3], 0);
    design.addMove(13, 7, [1], 0);
    design.addMove(13, 7, [0], 0);
    design.addMove(13, 7, [2], 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("RedUnknownGeneral", "Red UnknownGeneral");
    view.defPiece("BlackUnknownGeneral", "Black UnknownGeneral");
    view.defPiece("RedUnknownAdvisor", "Red UnknownAdvisor");
    view.defPiece("BlackUnknownAdvisor", "Black UnknownAdvisor");
    view.defPiece("RedUnknownElephant", "Red UnknownElephant");
    view.defPiece("BlackUnknownElephant", "Black UnknownElephant");
    view.defPiece("RedUnknownChariot", "Red UnknownChariot");
    view.defPiece("BlackUnknownChariot", "Black UnknownChariot");
    view.defPiece("RedUnknownHorse", "Red UnknownHorse");
    view.defPiece("BlackUnknownHorse", "Black UnknownHorse");
    view.defPiece("RedUnknownCannon", "Red UnknownCannon");
    view.defPiece("BlackUnknownCannon", "Black UnknownCannon");
    view.defPiece("RedUnknownSoldier", "Red UnknownSoldier");
    view.defPiece("BlackUnknownSoldier", "Black UnknownSoldier");
    view.defPiece("RedGeneral", "Red General");
    view.defPiece("BlackGeneral", "Black General");
    view.defPiece("RedAdvisor", "Red Advisor");
    view.defPiece("BlackAdvisor", "Black Advisor");
    view.defPiece("RedElephant", "Red Elephant");
    view.defPiece("BlackElephant", "Black Elephant");
    view.defPiece("RedChariot", "Red Chariot");
    view.defPiece("BlackChariot", "Black Chariot");
    view.defPiece("RedHorse", "Red Horse");
    view.defPiece("BlackHorse", "Black Horse");
    view.defPiece("RedCannon", "Red Cannon");
    view.defPiece("BlackCannon", "Black Cannon");
    view.defPiece("RedSoldier", "Red Soldier");
    view.defPiece("BlackSoldier", "Black Soldier");
 
    view.defPosition("a4", 26, 27, 42, 42);
    view.defPosition("b4", 71, 27, 42, 42);
    view.defPosition("c4", 116, 27, 42, 42);
    view.defPosition("d4", 161, 27, 42, 42);
    view.defPosition("e4", 206, 27, 42, 42);
    view.defPosition("f4", 251, 27, 42, 42);
    view.defPosition("g4", 296, 27, 42, 42);
    view.defPosition("h4", 341, 27, 42, 42);
    view.defPosition("a3", 26, 72, 42, 42);
    view.defPosition("b3", 71, 72, 42, 42);
    view.defPosition("c3", 116, 72, 42, 42);
    view.defPosition("d3", 161, 72, 42, 42);
    view.defPosition("e3", 206, 72, 42, 42);
    view.defPosition("f3", 251, 72, 42, 42);
    view.defPosition("g3", 296, 72, 42, 42);
    view.defPosition("h3", 341, 72, 42, 42);
    view.defPosition("a2", 26, 117, 42, 42);
    view.defPosition("b2", 71, 117, 42, 42);
    view.defPosition("c2", 116, 117, 42, 42);
    view.defPosition("d2", 161, 117, 42, 42);
    view.defPosition("e2", 206, 117, 42, 42);
    view.defPosition("f2", 251, 117, 42, 42);
    view.defPosition("g2", 296, 117, 42, 42);
    view.defPosition("h2", 341, 117, 42, 42);
    view.defPosition("a1", 26, 162, 42, 42);
    view.defPosition("b1", 71, 162, 42, 42);
    view.defPosition("c1", 116, 162, 42, 42);
    view.defPosition("d1", 161, 162, 42, 42);
    view.defPosition("e1", 206, 162, 42, 42);
    view.defPosition("f1", 251, 162, 42, 42);
    view.defPosition("g1", 296, 162, 42, 42);
    view.defPosition("h1", 341, 162, 42, 42);
}
