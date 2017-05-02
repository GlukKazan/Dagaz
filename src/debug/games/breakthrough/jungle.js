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
    design.checkVersion("z2j", "1");
    design.checkVersion("highlight-goals", "false");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("n");

    design.addPlayer("Red", [1, 0, 3, 2]);
    design.addPlayer("Black", [0, 1, 2, 3]);

    design.addPosition("a9", [0, 1, 7, 0]);
    design.addPosition("b9", [-1, 1, 7, 0]);
    design.addPosition("c9", [-1, 1, 7, 0]);
    design.addPosition("d9", [-1, 1, 7, 0]);
    design.addPosition("e9", [-1, 1, 7, 0]);
    design.addPosition("f9", [-1, 1, 7, 0]);
    design.addPosition("g9", [-1, 0, 7, 0]);
    design.addPosition("a8", [0, 1, 7, -7]);
    design.addPosition("b8", [-1, 1, 7, -7]);
    design.addPosition("c8", [-1, 1, 7, -7]);
    design.addPosition("d8", [-1, 1, 7, -7]);
    design.addPosition("e8", [-1, 1, 7, -7]);
    design.addPosition("f8", [-1, 1, 7, -7]);
    design.addPosition("g8", [-1, 0, 7, -7]);
    design.addPosition("a7", [0, 1, 7, -7]);
    design.addPosition("b7", [-1, 1, 7, -7]);
    design.addPosition("c7", [-1, 1, 7, -7]);
    design.addPosition("d7", [-1, 1, 7, -7]);
    design.addPosition("e7", [-1, 1, 7, -7]);
    design.addPosition("f7", [-1, 1, 7, -7]);
    design.addPosition("g7", [-1, 0, 7, -7]);
    design.addPosition("a6", [0, 1, 7, -7]);
    design.addPosition("b6", [-1, 1, 7, -7]);
    design.addPosition("c6", [-1, 1, 7, -7]);
    design.addPosition("d6", [-1, 1, 7, -7]);
    design.addPosition("e6", [-1, 1, 7, -7]);
    design.addPosition("f6", [-1, 1, 7, -7]);
    design.addPosition("g6", [-1, 0, 7, -7]);
    design.addPosition("a5", [0, 1, 7, -7]);
    design.addPosition("b5", [-1, 1, 7, -7]);
    design.addPosition("c5", [-1, 1, 7, -7]);
    design.addPosition("d5", [-1, 1, 7, -7]);
    design.addPosition("e5", [-1, 1, 7, -7]);
    design.addPosition("f5", [-1, 1, 7, -7]);
    design.addPosition("g5", [-1, 0, 7, -7]);
    design.addPosition("a4", [0, 1, 7, -7]);
    design.addPosition("b4", [-1, 1, 7, -7]);
    design.addPosition("c4", [-1, 1, 7, -7]);
    design.addPosition("d4", [-1, 1, 7, -7]);
    design.addPosition("e4", [-1, 1, 7, -7]);
    design.addPosition("f4", [-1, 1, 7, -7]);
    design.addPosition("g4", [-1, 0, 7, -7]);
    design.addPosition("a3", [0, 1, 7, -7]);
    design.addPosition("b3", [-1, 1, 7, -7]);
    design.addPosition("c3", [-1, 1, 7, -7]);
    design.addPosition("d3", [-1, 1, 7, -7]);
    design.addPosition("e3", [-1, 1, 7, -7]);
    design.addPosition("f3", [-1, 1, 7, -7]);
    design.addPosition("g3", [-1, 0, 7, -7]);
    design.addPosition("a2", [0, 1, 7, -7]);
    design.addPosition("b2", [-1, 1, 7, -7]);
    design.addPosition("c2", [-1, 1, 7, -7]);
    design.addPosition("d2", [-1, 1, 7, -7]);
    design.addPosition("e2", [-1, 1, 7, -7]);
    design.addPosition("f2", [-1, 1, 7, -7]);
    design.addPosition("g2", [-1, 0, 7, -7]);
    design.addPosition("a1", [0, 1, 0, -7]);
    design.addPosition("b1", [-1, 1, 0, -7]);
    design.addPosition("c1", [-1, 1, 0, -7]);
    design.addPosition("d1", [-1, 1, 0, -7]);
    design.addPosition("e1", [-1, 1, 0, -7]);
    design.addPosition("f1", [-1, 1, 0, -7]);
    design.addPosition("g1", [-1, 0, 0, -7]);

    design.addZone("trap", 1, [2, 10, 4]);
    design.addZone("trap", 2, [58, 52, 60]);

    design.addCommand(0, ZRF.FUNCTION,	24);	// from
    design.addCommand(0, ZRF.PARAM,	0);	// $1
    design.addCommand(0, ZRF.FUNCTION,	22);	// navigate
    design.addCommand(0, ZRF.FUNCTION,	3);	// friend?
    design.addCommand(0, ZRF.FUNCTION,	0);	// not
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end


    design.addPiece("Elephant", 0);
    design.addMove(0, 0, [3], 0);
    design.addMove(0, 0, [2], 0);
    design.addMove(0, 0, [0], 0);
    design.addMove(0, 0, [1], 0);

    design.addPiece("Lion", 1);
    design.addMove(1, 0, [3], 0);
    design.addMove(1, 0, [2], 0);
    design.addMove(1, 0, [0], 0);
    design.addMove(1, 0, [1], 0);

    design.addPiece("Tiger", 2);
    design.addMove(2, 0, [3], 0);
    design.addMove(2, 0, [2], 0);
    design.addMove(2, 0, [0], 0);
    design.addMove(2, 0, [1], 0);

    design.addPiece("Panther", 3);
    design.addMove(3, 0, [3], 0);
    design.addMove(3, 0, [2], 0);
    design.addMove(3, 0, [0], 0);
    design.addMove(3, 0, [1], 0);

    design.addPiece("Fox", 4);
    design.addMove(4, 0, [3], 0);
    design.addMove(4, 0, [2], 0);
    design.addMove(4, 0, [0], 0);
    design.addMove(4, 0, [1], 0);

    design.addPiece("Dog", 5);
    design.addMove(5, 0, [3], 0);
    design.addMove(5, 0, [2], 0);
    design.addMove(5, 0, [0], 0);
    design.addMove(5, 0, [1], 0);

    design.addPiece("Cat", 6);
    design.addMove(6, 0, [3], 0);
    design.addMove(6, 0, [2], 0);
    design.addMove(6, 0, [0], 0);
    design.addMove(6, 0, [1], 0);

    design.addPiece("Rat", 7);
    design.addMove(7, 0, [3], 0);
    design.addMove(7, 0, [2], 0);
    design.addMove(7, 0, [0], 0);
    design.addMove(7, 0, [1], 0);

    design.setup("Red", "Elephant", 42);
    design.setup("Red", "Tiger", 56);
    design.setup("Red", "Cat", 50);
    design.setup("Red", "Dog", 44);
    design.setup("Red", "Panther", 46);
    design.setup("Red", "Fox", 54);
    design.setup("Red", "Rat", 48);
    design.setup("Red", "Lion", 62);
    design.setup("Black", "Elephant", 20);
    design.setup("Black", "Tiger", 6);
    design.setup("Black", "Cat", 12);
    design.setup("Black", "Dog", 18);
    design.setup("Black", "Panther", 16);
    design.setup("Black", "Fox", 8);
    design.setup("Black", "Rat", 14);
    design.setup("Black", "Lion", 0);

    design.goal(0, "Red", "Elephant", [3]);
    design.goal(1, "Red", "Lion", [3]);
    design.goal(2, "Red", "Tiger", [3]);
    design.goal(3, "Red", "Panther", [3]);
    design.goal(4, "Red", "Fox", [3]);
    design.goal(5, "Red", "Dog", [3]);
    design.goal(6, "Red", "Cat", [3]);
    design.goal(7, "Red", "Rat", [3]);
    design.goal(8, "Black", "Elephant", [59]);
    design.goal(9, "Black", "Lion", [59]);
    design.goal(10, "Black", "Tiger", [59]);
    design.goal(11, "Black", "Panther", [59]);
    design.goal(12, "Black", "Fox", [59]);
    design.goal(13, "Black", "Dog", [59]);
    design.goal(14, "Black", "Cat", [59]);
    design.goal(15, "Black", "Rat", [59]);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("RedElephant", "Red Elephant");
    view.defPiece("BlackElephant", "Black Elephant");
    view.defPiece("RedLion", "Red Lion");
    view.defPiece("BlackLion", "Black Lion");
    view.defPiece("RedTiger", "Red Tiger");
    view.defPiece("BlackTiger", "Black Tiger");
    view.defPiece("RedPanther", "Red Panther");
    view.defPiece("BlackPanther", "Black Panther");
    view.defPiece("RedFox", "Red Fox");
    view.defPiece("BlackFox", "Black Fox");
    view.defPiece("RedDog", "Red Dog");
    view.defPiece("BlackDog", "Black Dog");
    view.defPiece("RedCat", "Red Cat");
    view.defPiece("BlackCat", "Black Cat");
    view.defPiece("RedRat", "Red Rat");
    view.defPiece("BlackRat", "Black Rat");
 
    view.defPosition("a9", 4, 3, 66, 66);
    view.defPosition("b9", 70, 3, 66, 66);
    view.defPosition("c9", 136, 3, 66, 66);
    view.defPosition("d9", 202, 3, 66, 66);
    view.defPosition("e9", 268, 3, 66, 66);
    view.defPosition("f9", 334, 3, 66, 66);
    view.defPosition("g9", 400, 3, 66, 66);
    view.defPosition("a8", 4, 69, 66, 66);
    view.defPosition("b8", 70, 69, 66, 66);
    view.defPosition("c8", 136, 69, 66, 66);
    view.defPosition("d8", 202, 69, 66, 66);
    view.defPosition("e8", 268, 69, 66, 66);
    view.defPosition("f8", 334, 69, 66, 66);
    view.defPosition("g8", 400, 69, 66, 66);
    view.defPosition("a7", 4, 135, 66, 66);
    view.defPosition("b7", 70, 135, 66, 66);
    view.defPosition("c7", 136, 135, 66, 66);
    view.defPosition("d7", 202, 135, 66, 66);
    view.defPosition("e7", 268, 135, 66, 66);
    view.defPosition("f7", 334, 135, 66, 66);
    view.defPosition("g7", 400, 135, 66, 66);
    view.defPosition("a6", 4, 201, 66, 66);
    view.defPosition("b6", 70, 201, 66, 66);
    view.defPosition("c6", 136, 201, 66, 66);
    view.defPosition("d6", 202, 201, 66, 66);
    view.defPosition("e6", 268, 201, 66, 66);
    view.defPosition("f6", 334, 201, 66, 66);
    view.defPosition("g6", 400, 201, 66, 66);
    view.defPosition("a5", 4, 267, 66, 66);
    view.defPosition("b5", 70, 267, 66, 66);
    view.defPosition("c5", 136, 267, 66, 66);
    view.defPosition("d5", 202, 267, 66, 66);
    view.defPosition("e5", 268, 267, 66, 66);
    view.defPosition("f5", 334, 267, 66, 66);
    view.defPosition("g5", 400, 267, 66, 66);
    view.defPosition("a4", 4, 333, 66, 66);
    view.defPosition("b4", 70, 333, 66, 66);
    view.defPosition("c4", 136, 333, 66, 66);
    view.defPosition("d4", 202, 333, 66, 66);
    view.defPosition("e4", 268, 333, 66, 66);
    view.defPosition("f4", 334, 333, 66, 66);
    view.defPosition("g4", 400, 333, 66, 66);
    view.defPosition("a3", 4, 399, 66, 66);
    view.defPosition("b3", 70, 399, 66, 66);
    view.defPosition("c3", 136, 399, 66, 66);
    view.defPosition("d3", 202, 399, 66, 66);
    view.defPosition("e3", 268, 399, 66, 66);
    view.defPosition("f3", 334, 399, 66, 66);
    view.defPosition("g3", 400, 399, 66, 66);
    view.defPosition("a2", 4, 465, 66, 66);
    view.defPosition("b2", 70, 465, 66, 66);
    view.defPosition("c2", 136, 465, 66, 66);
    view.defPosition("d2", 202, 465, 66, 66);
    view.defPosition("e2", 268, 465, 66, 66);
    view.defPosition("f2", 334, 465, 66, 66);
    view.defPosition("g2", 400, 465, 66, 66);
    view.defPosition("a1", 4, 531, 66, 66);
    view.defPosition("b1", 70, 531, 66, 66);
    view.defPosition("c1", 136, 531, 66, 66);
    view.defPosition("d1", 202, 531, 66, 66);
    view.defPosition("e1", 268, 531, 66, 66);
    view.defPosition("f1", 334, 531, 66, 66);
    view.defPosition("g1", 400, 531, 66, 66);
}