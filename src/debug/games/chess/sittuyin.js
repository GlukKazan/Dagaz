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
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");
    design.checkVersion("show-drops", "true");
    design.checkVersion("show-captures", "false");
    design.checkVersion("sittuyin-promotion", "true");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("ne");
    design.addDirection("n");
    design.addDirection("se");
    design.addDirection("sw");
    design.addDirection("nw");

    design.addPlayer("White", [1, 0, 4, 6, 2, 7, 3, 5]);
    design.addPlayer("Black", [0, 1, 4, 5, 2, 3, 7, 6]);
    design.addTurn(1);
    design.addTurn(1);
    design.addTurn(1);
    design.addTurn(1);
    design.addTurn(1);
    design.addTurn(1);
    design.addTurn(1);
    design.addTurn(1);
    design.repeatMark();
    design.addTurn(1);
    design.addTurn(2);

    design.addPosition("a8", [0, 1, 8, 0, 0, 9, 0, 0]);
    design.addPosition("b8", [-1, 1, 8, 0, 0, 9, 7, 0]);
    design.addPosition("c8", [-1, 1, 8, 0, 0, 9, 7, 0]);
    design.addPosition("d8", [-1, 1, 8, 0, 0, 9, 7, 0]);
    design.addPosition("e8", [-1, 1, 8, 0, 0, 9, 7, 0]);
    design.addPosition("f8", [-1, 1, 8, 0, 0, 9, 7, 0]);
    design.addPosition("g8", [-1, 1, 8, 0, 0, 9, 7, 0]);
    design.addPosition("h8", [-1, 0, 8, 0, 0, 0, 7, 0]);
    design.addPosition("a7", [0, 1, 8, -7, -8, 9, 0, 0]);
    design.addPosition("b7", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("c7", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("d7", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("e7", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("f7", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("g7", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("h7", [-1, 0, 8, 0, -8, 0, 7, -9]);
    design.addPosition("a6", [0, 1, 8, -7, -8, 9, 0, 0]);
    design.addPosition("b6", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("c6", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("d6", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("e6", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("f6", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("g6", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("h6", [-1, 0, 8, 0, -8, 0, 7, -9]);
    design.addPosition("a5", [0, 1, 8, -7, -8, 9, 0, 0]);
    design.addPosition("b5", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("c5", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("d5", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("e5", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("f5", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("g5", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("h5", [-1, 0, 8, 0, -8, 0, 7, -9]);
    design.addPosition("a4", [0, 1, 8, -7, -8, 9, 0, 0]);
    design.addPosition("b4", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("c4", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("d4", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("e4", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("f4", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("g4", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("h4", [-1, 0, 8, 0, -8, 0, 7, -9]);
    design.addPosition("a3", [0, 1, 8, -7, -8, 9, 0, 0]);
    design.addPosition("b3", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("c3", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("d3", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("e3", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("f3", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("g3", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("h3", [-1, 0, 8, 0, -8, 0, 7, -9]);
    design.addPosition("a2", [0, 1, 8, -7, -8, 9, 0, 0]);
    design.addPosition("b2", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("c2", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("d2", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("e2", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("f2", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("g2", [-1, 1, 8, -7, -8, 9, 7, -9]);
    design.addPosition("h2", [-1, 0, 8, 0, -8, 0, 7, -9]);
    design.addPosition("a1", [0, 1, 0, -7, -8, 0, 0, 0]);
    design.addPosition("b1", [-1, 1, 0, -7, -8, 0, 0, -9]);
    design.addPosition("c1", [-1, 1, 0, -7, -8, 0, 0, -9]);
    design.addPosition("d1", [-1, 1, 0, -7, -8, 0, 0, -9]);
    design.addPosition("e1", [-1, 1, 0, -7, -8, 0, 0, -9]);
    design.addPosition("f1", [-1, 1, 0, -7, -8, 0, 0, -9]);
    design.addPosition("g1", [-1, 1, 0, -7, -8, 0, 0, -9]);
    design.addPosition("h1", [-1, 0, 0, 0, -8, 0, 0, -9]);

    design.addZone("promotion", 1, [0, 9, 18, 27, 28, 21, 14, 7]);
    design.addZone("promotion", 2, [56, 49, 42, 35, 36, 45, 54, 63]);
    design.addZone("first-rank", 1, [56, 57, 58, 59, 60, 61, 62, 63]);
    design.addZone("first-rank", 2, [0, 1, 2, 3, 4, 5, 6, 7]);
    design.addZone("second-rank", 1, [48, 49, 50, 51, 52, 53, 54, 55, 44, 45, 46, 47]);
    design.addZone("second-rank", 2, [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);

    design.addCommand(0, ZRF.IN_ZONE,	2);	// second-rank
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end

    design.addCommand(1, ZRF.FUNCTION,	24);	// from
    design.addCommand(1, ZRF.PARAM,	0);	// $1
    design.addCommand(1, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(1, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(1, ZRF.FUNCTION,	0);	// not
    design.addCommand(1, ZRF.FUNCTION,	20);	// verify
    design.addCommand(1, ZRF.FUNCTION,	25);	// to
    design.addCommand(1, ZRF.FUNCTION,	28);	// end

    design.addCommand(2, ZRF.IN_ZONE,	1);	// first-rank
    design.addCommand(2, ZRF.FUNCTION,	20);	// verify
    design.addCommand(2, ZRF.FUNCTION,	1);	// empty?
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

    design.addCommand(5, ZRF.FUNCTION,	24);	// from
    design.addCommand(5, ZRF.PARAM,	0);	// $1
    design.addCommand(5, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(5, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(5, ZRF.FUNCTION,	20);	// verify
    design.addCommand(5, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(5, ZRF.FUNCTION,	0);	// not
    design.addCommand(5, ZRF.IF,	4);
    design.addCommand(5, ZRF.PROMOTE,	1);	// Sit-ke
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.JUMP,	2);
    design.addCommand(5, ZRF.FUNCTION,	25);	// to
    design.addCommand(5, ZRF.FUNCTION,	28);	// end

    design.addCommand(6, ZRF.FUNCTION,	24);	// from
    design.addCommand(6, ZRF.PARAM,	0);	// $1
    design.addCommand(6, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(6, ZRF.FUNCTION,	2);	// enemy?
    design.addCommand(6, ZRF.FUNCTION,	20);	// verify
    design.addCommand(6, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(6, ZRF.FUNCTION,	0);	// not
    design.addCommand(6, ZRF.IF,	4);
    design.addCommand(6, ZRF.PROMOTE,	1);	// Sit-ke
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.JUMP,	2);
    design.addCommand(6, ZRF.FUNCTION,	25);	// to
    design.addCommand(6, ZRF.FUNCTION,	28);	// end

    design.addCommand(7, ZRF.FUNCTION,	24);	// from
    design.addCommand(7, ZRF.IN_ZONE,	0);	// promotion
    design.addCommand(7, ZRF.FUNCTION,	20);	// verify
    design.addCommand(7, ZRF.PROMOTE,	1);	// Sit-ke
    design.addCommand(7, ZRF.FUNCTION,	25);	// to
    design.addCommand(7, ZRF.FUNCTION,	28);	// end

    design.addPriority(0);			// priority-type
    design.addPriority(1);			// drop-type
    design.addPriority(2);			// normal-type

    design.addPiece("Min-gyi", 0, 1000);
    design.addDrop(0, 0, [], 0);
    design.addMove(0, 1, [4], 2);
    design.addMove(0, 1, [2], 2);
    design.addMove(0, 1, [0], 2);
    design.addMove(0, 1, [1], 2);
    design.addMove(0, 1, [7], 2);
    design.addMove(0, 1, [6], 2);
    design.addMove(0, 1, [3], 2);
    design.addMove(0, 1, [5], 2);

    design.addPiece("Sit-ke", 1, 4);
    design.addDrop(1, 0, [], 1);
    design.addMove(1, 1, [7], 2);
    design.addMove(1, 1, [6], 2);
    design.addMove(1, 1, [3], 2);
    design.addMove(1, 1, [5], 2);

    design.addPiece("Yahhta", 2, 20);
    design.addDrop(2, 2, [], 1);
    design.addMove(2, 3, [4, 4], 2);
    design.addMove(2, 3, [2, 2], 2);
    design.addMove(2, 3, [0, 0], 2);
    design.addMove(2, 3, [1, 1], 2);

    design.addPiece("Sin", 3, 5);
    design.addDrop(3, 0, [], 1);
    design.addMove(3, 1, [7], 2);
    design.addMove(3, 1, [6], 2);
    design.addMove(3, 1, [3], 2);
    design.addMove(3, 1, [5], 2);
    design.addMove(3, 1, [4], 2);

    design.addPiece("Myin", 4, 8);
    design.addDrop(4, 0, [], 1);
    design.addMove(4, 4, [4, 7], 2);
    design.addMove(4, 4, [4, 3], 2);
    design.addMove(4, 4, [2, 6], 2);
    design.addMove(4, 4, [2, 5], 2);
    design.addMove(4, 4, [0, 7], 2);
    design.addMove(4, 4, [0, 6], 2);
    design.addMove(4, 4, [1, 3], 2);
    design.addMove(4, 4, [1, 5], 2);

    design.addPiece("Ne", 5, 2);
    design.addMove(5, 5, [4], 2);
    design.addMove(5, 6, [7], 2);
    design.addMove(5, 6, [3], 2);
    design.addMove(5, 7, [], 2);

    design.setup("White", "Ne", 40);
    design.setup("White", "Ne", 41);
    design.setup("White", "Ne", 42);
    design.setup("White", "Ne", 43);
    design.setup("White", "Ne", 36);
    design.setup("White", "Ne", 37);
    design.setup("White", "Ne", 38);
    design.setup("White", "Ne", 39);
    design.reserve("White", "Min-gyi", 1);
    design.reserve("White", "Sit-ke", 1);
    design.reserve("White", "Yahhta", 2);
    design.reserve("White", "Myin", 2);
    design.reserve("White", "Sin", 2);

    design.setup("Black", "Ne", 24);
    design.setup("Black", "Ne", 25);
    design.setup("Black", "Ne", 26);
    design.setup("Black", "Ne", 27);
    design.setup("Black", "Ne", 20);
    design.setup("Black", "Ne", 21);
    design.setup("Black", "Ne", 22);
    design.setup("Black", "Ne", 23);

    design.setupSelector(7);

    design.setup("Black", "Min-gyi", 10, 1);
    design.setup("Black", "Sit-ke", 19, 1);
    design.setup("Black", "Yahhta", 4, 1);
    design.setup("Black", "Yahhta", 6, 1);
    design.setup("Black", "Myin", 11, 1);
    design.setup("Black", "Myin", 13, 1);
    design.setup("Black", "Sin", 18, 1);
    design.setup("Black", "Sin", 12, 1);

    design.setup("Black", "Min-gyi", 10, 2);
    design.setup("Black", "Sit-ke", 19, 2);
    design.setup("Black", "Yahhta", 5, 2);
    design.setup("Black", "Yahhta", 6, 2);
    design.setup("Black", "Myin", 17, 2);
    design.setup("Black", "Myin", 11, 2);
    design.setup("Black", "Sin", 18, 2);
    design.setup("Black", "Sin", 12, 2);

    design.setup("Black", "Min-gyi", 10, 3);
    design.setup("Black", "Sit-ke", 19, 3);
    design.setup("Black", "Yahhta", 4, 3);
    design.setup("Black", "Yahhta", 6, 3);
    design.setup("Black", "Myin", 11, 3);
    design.setup("Black", "Myin", 12, 3);
    design.setup("Black", "Sin", 18, 3);
    design.setup("Black", "Sin", 13, 3);

    design.setup("Black", "Min-gyi", 9, 4);
    design.setup("Black", "Sit-ke", 19, 4);
    design.setup("Black", "Yahhta", 2, 4);
    design.setup("Black", "Yahhta", 5, 4);
    design.setup("Black", "Myin", 18, 4);
    design.setup("Black", "Myin", 11, 4);
    design.setup("Black", "Sin", 17, 4);
    design.setup("Black", "Sin", 12, 4);

    design.setup("Black", "Min-gyi", 9, 5);
    design.setup("Black", "Sit-ke", 19, 5);
    design.setup("Black", "Yahhta", 3, 5);
    design.setup("Black", "Yahhta", 5, 5);
    design.setup("Black", "Myin", 10, 5);
    design.setup("Black", "Myin", 18, 5);
    design.setup("Black", "Sin", 17, 5);
    design.setup("Black", "Sin", 12, 5);

    design.setup("Black", "Min-gyi", 2, 6);
    design.setup("Black", "Sit-ke", 18, 6);
    design.setup("Black", "Yahhta", 4, 6);
    design.setup("Black", "Yahhta", 5, 6);
    design.setup("Black", "Myin", 11, 6);
    design.setup("Black", "Myin", 19, 6);
    design.setup("Black", "Sin", 10, 6);
    design.setup("Black", "Sin", 14, 6);

    design.setup("Black", "Min-gyi", 9, 7);
    design.setup("Black", "Sit-ke", 19, 7);
    design.setup("Black", "Yahhta", 3, 7);
    design.setup("Black", "Yahhta", 5, 7);
    design.setup("Black", "Myin", 10, 7);
    design.setup("Black", "Myin", 12, 7);
    design.setup("Black", "Sin", 17, 7);
    design.setup("Black", "Sin", 18, 7);

    design.reserve("Black", "Min-gyi", 0);
    design.reserve("Black", "Sit-ke", 0);
    design.reserve("Black", "Yahhta", 0);
    design.reserve("Black", "Myin", 0);
    design.reserve("Black", "Sin", 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("WhiteMin-gyi", "White Min-gyi");
    view.defPiece("BlackMin-gyi", "Black Min-gyi");
    view.defPiece("WhiteSit-ke", "White Sit-ke");
    view.defPiece("BlackSit-ke", "Black Sit-ke");
    view.defPiece("WhiteYahhta", "White Yahhta");
    view.defPiece("BlackYahhta", "Black Yahhta");
    view.defPiece("WhiteSin", "White Sin");
    view.defPiece("BlackSin", "Black Sin");
    view.defPiece("WhiteMyin", "White Myin");
    view.defPiece("BlackMyin", "Black Myin");
    view.defPiece("WhiteNe", "White Ne");
    view.defPiece("BlackNe", "Black Ne");
    view.defPiece("Ko", "Ko");
 
    view.defPosition("a8", 2, 2, 50, 50);
    view.defPosition("b8", 52, 2, 50, 50);
    view.defPosition("c8", 102, 2, 50, 50);
    view.defPosition("d8", 152, 2, 50, 50);
    view.defPosition("e8", 202, 2, 50, 50);
    view.defPosition("f8", 252, 2, 50, 50);
    view.defPosition("g8", 302, 2, 50, 50);
    view.defPosition("h8", 352, 2, 50, 50);
    view.defPosition("a7", 2, 52, 50, 50);
    view.defPosition("b7", 52, 52, 50, 50);
    view.defPosition("c7", 102, 52, 50, 50);
    view.defPosition("d7", 152, 52, 50, 50);
    view.defPosition("e7", 202, 52, 50, 50);
    view.defPosition("f7", 252, 52, 50, 50);
    view.defPosition("g7", 302, 52, 50, 50);
    view.defPosition("h7", 352, 52, 50, 50);
    view.defPosition("a6", 2, 102, 50, 50);
    view.defPosition("b6", 52, 102, 50, 50);
    view.defPosition("c6", 102, 102, 50, 50);
    view.defPosition("d6", 152, 102, 50, 50);
    view.defPosition("e6", 202, 102, 50, 50);
    view.defPosition("f6", 252, 102, 50, 50);
    view.defPosition("g6", 302, 102, 50, 50);
    view.defPosition("h6", 352, 102, 50, 50);
    view.defPosition("a5", 2, 152, 50, 50);
    view.defPosition("b5", 52, 152, 50, 50);
    view.defPosition("c5", 102, 152, 50, 50);
    view.defPosition("d5", 152, 152, 50, 50);
    view.defPosition("e5", 202, 152, 50, 50);
    view.defPosition("f5", 252, 152, 50, 50);
    view.defPosition("g5", 302, 152, 50, 50);
    view.defPosition("h5", 352, 152, 50, 50);
    view.defPosition("a4", 2, 202, 50, 50);
    view.defPosition("b4", 52, 202, 50, 50);
    view.defPosition("c4", 102, 202, 50, 50);
    view.defPosition("d4", 152, 202, 50, 50);
    view.defPosition("e4", 202, 202, 50, 50);
    view.defPosition("f4", 252, 202, 50, 50);
    view.defPosition("g4", 302, 202, 50, 50);
    view.defPosition("h4", 352, 202, 50, 50);
    view.defPosition("a3", 2, 252, 50, 50);
    view.defPosition("b3", 52, 252, 50, 50);
    view.defPosition("c3", 102, 252, 50, 50);
    view.defPosition("d3", 152, 252, 50, 50);
    view.defPosition("e3", 202, 252, 50, 50);
    view.defPosition("f3", 252, 252, 50, 50);
    view.defPosition("g3", 302, 252, 50, 50);
    view.defPosition("h3", 352, 252, 50, 50);
    view.defPosition("a2", 2, 302, 50, 50);
    view.defPosition("b2", 52, 302, 50, 50);
    view.defPosition("c2", 102, 302, 50, 50);
    view.defPosition("d2", 152, 302, 50, 50);
    view.defPosition("e2", 202, 302, 50, 50);
    view.defPosition("f2", 252, 302, 50, 50);
    view.defPosition("g2", 302, 302, 50, 50);
    view.defPosition("h2", 352, 302, 50, 50);
    view.defPosition("a1", 2, 352, 50, 50);
    view.defPosition("b1", 52, 352, 50, 50);
    view.defPosition("c1", 102, 352, 50, 50);
    view.defPosition("d1", 152, 352, 50, 50);
    view.defPosition("e1", 202, 352, 50, 50);
    view.defPosition("f1", 252, 352, 50, 50);
    view.defPosition("g1", 302, 352, 50, 50);
    view.defPosition("h1", 352, 352, 50, 50);
}
