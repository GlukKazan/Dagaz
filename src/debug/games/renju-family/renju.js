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
    design.checkVersion("show-blink", "false");
    design.checkVersion("show-hints", "false");

    design.addDirection("w");
    design.addDirection("e");
    design.addDirection("s");
    design.addDirection("n");

    design.addPlayer("Black", [1, 0, 3, 2]);
    design.addPlayer("White", [0, 1, 2, 3]);

    design.addPosition("aa", [0, 1, 15, 0]);
    design.addPosition("ba", [-1, 1, 15, 0]);
    design.addPosition("ca", [-1, 1, 15, 0]);
    design.addPosition("da", [-1, 1, 15, 0]);
    design.addPosition("ea", [-1, 1, 15, 0]);
    design.addPosition("fa", [-1, 1, 15, 0]);
    design.addPosition("ga", [-1, 1, 15, 0]);
    design.addPosition("ha", [-1, 1, 15, 0]);
    design.addPosition("ia", [-1, 1, 15, 0]);
    design.addPosition("ja", [-1, 1, 15, 0]);
    design.addPosition("ka", [-1, 1, 15, 0]);
    design.addPosition("la", [-1, 1, 15, 0]);
    design.addPosition("ma", [-1, 1, 15, 0]);
    design.addPosition("na", [-1, 1, 15, 0]);
    design.addPosition("oa", [-1, 0, 15, 0]);
    design.addPosition("ab", [0, 1, 15, -15]);
    design.addPosition("bb", [-1, 1, 15, -15]);
    design.addPosition("cb", [-1, 1, 15, -15]);
    design.addPosition("db", [-1, 1, 15, -15]);
    design.addPosition("eb", [-1, 1, 15, -15]);
    design.addPosition("fb", [-1, 1, 15, -15]);
    design.addPosition("gb", [-1, 1, 15, -15]);
    design.addPosition("hb", [-1, 1, 15, -15]);
    design.addPosition("ib", [-1, 1, 15, -15]);
    design.addPosition("jb", [-1, 1, 15, -15]);
    design.addPosition("kb", [-1, 1, 15, -15]);
    design.addPosition("lb", [-1, 1, 15, -15]);
    design.addPosition("mb", [-1, 1, 15, -15]);
    design.addPosition("nb", [-1, 1, 15, -15]);
    design.addPosition("ob", [-1, 0, 15, -15]);
    design.addPosition("ac", [0, 1, 15, -15]);
    design.addPosition("bc", [-1, 1, 15, -15]);
    design.addPosition("cc", [-1, 1, 15, -15]);
    design.addPosition("dc", [-1, 1, 15, -15]);
    design.addPosition("ec", [-1, 1, 15, -15]);
    design.addPosition("fc", [-1, 1, 15, -15]);
    design.addPosition("gc", [-1, 1, 15, -15]);
    design.addPosition("hc", [-1, 1, 15, -15]);
    design.addPosition("ic", [-1, 1, 15, -15]);
    design.addPosition("jc", [-1, 1, 15, -15]);
    design.addPosition("kc", [-1, 1, 15, -15]);
    design.addPosition("lc", [-1, 1, 15, -15]);
    design.addPosition("mc", [-1, 1, 15, -15]);
    design.addPosition("nc", [-1, 1, 15, -15]);
    design.addPosition("oc", [-1, 0, 15, -15]);
    design.addPosition("ad", [0, 1, 15, -15]);
    design.addPosition("bd", [-1, 1, 15, -15]);
    design.addPosition("cd", [-1, 1, 15, -15]);
    design.addPosition("dd", [-1, 1, 15, -15]);
    design.addPosition("ed", [-1, 1, 15, -15]);
    design.addPosition("fd", [-1, 1, 15, -15]);
    design.addPosition("gd", [-1, 1, 15, -15]);
    design.addPosition("hd", [-1, 1, 15, -15]);
    design.addPosition("id", [-1, 1, 15, -15]);
    design.addPosition("jd", [-1, 1, 15, -15]);
    design.addPosition("kd", [-1, 1, 15, -15]);
    design.addPosition("ld", [-1, 1, 15, -15]);
    design.addPosition("md", [-1, 1, 15, -15]);
    design.addPosition("nd", [-1, 1, 15, -15]);
    design.addPosition("od", [-1, 0, 15, -15]);
    design.addPosition("ae", [0, 1, 15, -15]);
    design.addPosition("be", [-1, 1, 15, -15]);
    design.addPosition("ce", [-1, 1, 15, -15]);
    design.addPosition("de", [-1, 1, 15, -15]);
    design.addPosition("ee", [-1, 1, 15, -15]);
    design.addPosition("fe", [-1, 1, 15, -15]);
    design.addPosition("ge", [-1, 1, 15, -15]);
    design.addPosition("he", [-1, 1, 15, -15]);
    design.addPosition("ie", [-1, 1, 15, -15]);
    design.addPosition("je", [-1, 1, 15, -15]);
    design.addPosition("ke", [-1, 1, 15, -15]);
    design.addPosition("le", [-1, 1, 15, -15]);
    design.addPosition("me", [-1, 1, 15, -15]);
    design.addPosition("ne", [-1, 1, 15, -15]);
    design.addPosition("oe", [-1, 0, 15, -15]);
    design.addPosition("af", [0, 1, 15, -15]);
    design.addPosition("bf", [-1, 1, 15, -15]);
    design.addPosition("cf", [-1, 1, 15, -15]);
    design.addPosition("df", [-1, 1, 15, -15]);
    design.addPosition("ef", [-1, 1, 15, -15]);
    design.addPosition("ff", [-1, 1, 15, -15]);
    design.addPosition("gf", [-1, 1, 15, -15]);
    design.addPosition("hf", [-1, 1, 15, -15]);
    design.addPosition("if", [-1, 1, 15, -15]);
    design.addPosition("jf", [-1, 1, 15, -15]);
    design.addPosition("kf", [-1, 1, 15, -15]);
    design.addPosition("lf", [-1, 1, 15, -15]);
    design.addPosition("mf", [-1, 1, 15, -15]);
    design.addPosition("nf", [-1, 1, 15, -15]);
    design.addPosition("of", [-1, 0, 15, -15]);
    design.addPosition("ag", [0, 1, 15, -15]);
    design.addPosition("bg", [-1, 1, 15, -15]);
    design.addPosition("cg", [-1, 1, 15, -15]);
    design.addPosition("dg", [-1, 1, 15, -15]);
    design.addPosition("eg", [-1, 1, 15, -15]);
    design.addPosition("fg", [-1, 1, 15, -15]);
    design.addPosition("gg", [-1, 1, 15, -15]);
    design.addPosition("hg", [-1, 1, 15, -15]);
    design.addPosition("ig", [-1, 1, 15, -15]);
    design.addPosition("jg", [-1, 1, 15, -15]);
    design.addPosition("kg", [-1, 1, 15, -15]);
    design.addPosition("lg", [-1, 1, 15, -15]);
    design.addPosition("mg", [-1, 1, 15, -15]);
    design.addPosition("ng", [-1, 1, 15, -15]);
    design.addPosition("og", [-1, 0, 15, -15]);
    design.addPosition("ah", [0, 1, 15, -15]);
    design.addPosition("bh", [-1, 1, 15, -15]);
    design.addPosition("ch", [-1, 1, 15, -15]);
    design.addPosition("dh", [-1, 1, 15, -15]);
    design.addPosition("eh", [-1, 1, 15, -15]);
    design.addPosition("fh", [-1, 1, 15, -15]);
    design.addPosition("gh", [-1, 1, 15, -15]);
    design.addPosition("hh", [-1, 1, 15, -15]);
    design.addPosition("ih", [-1, 1, 15, -15]);
    design.addPosition("jh", [-1, 1, 15, -15]);
    design.addPosition("kh", [-1, 1, 15, -15]);
    design.addPosition("lh", [-1, 1, 15, -15]);
    design.addPosition("mh", [-1, 1, 15, -15]);
    design.addPosition("nh", [-1, 1, 15, -15]);
    design.addPosition("oh", [-1, 0, 15, -15]);
    design.addPosition("ai", [0, 1, 15, -15]);
    design.addPosition("bi", [-1, 1, 15, -15]);
    design.addPosition("ci", [-1, 1, 15, -15]);
    design.addPosition("di", [-1, 1, 15, -15]);
    design.addPosition("ei", [-1, 1, 15, -15]);
    design.addPosition("fi", [-1, 1, 15, -15]);
    design.addPosition("gi", [-1, 1, 15, -15]);
    design.addPosition("hi", [-1, 1, 15, -15]);
    design.addPosition("ii", [-1, 1, 15, -15]);
    design.addPosition("ji", [-1, 1, 15, -15]);
    design.addPosition("ki", [-1, 1, 15, -15]);
    design.addPosition("li", [-1, 1, 15, -15]);
    design.addPosition("mi", [-1, 1, 15, -15]);
    design.addPosition("ni", [-1, 1, 15, -15]);
    design.addPosition("oi", [-1, 0, 15, -15]);
    design.addPosition("aj", [0, 1, 15, -15]);
    design.addPosition("bj", [-1, 1, 15, -15]);
    design.addPosition("cj", [-1, 1, 15, -15]);
    design.addPosition("dj", [-1, 1, 15, -15]);
    design.addPosition("ej", [-1, 1, 15, -15]);
    design.addPosition("fj", [-1, 1, 15, -15]);
    design.addPosition("gj", [-1, 1, 15, -15]);
    design.addPosition("hj", [-1, 1, 15, -15]);
    design.addPosition("ij", [-1, 1, 15, -15]);
    design.addPosition("jj", [-1, 1, 15, -15]);
    design.addPosition("kj", [-1, 1, 15, -15]);
    design.addPosition("lj", [-1, 1, 15, -15]);
    design.addPosition("mj", [-1, 1, 15, -15]);
    design.addPosition("nj", [-1, 1, 15, -15]);
    design.addPosition("oj", [-1, 0, 15, -15]);
    design.addPosition("ak", [0, 1, 15, -15]);
    design.addPosition("bk", [-1, 1, 15, -15]);
    design.addPosition("ck", [-1, 1, 15, -15]);
    design.addPosition("dk", [-1, 1, 15, -15]);
    design.addPosition("ek", [-1, 1, 15, -15]);
    design.addPosition("fk", [-1, 1, 15, -15]);
    design.addPosition("gk", [-1, 1, 15, -15]);
    design.addPosition("hk", [-1, 1, 15, -15]);
    design.addPosition("ik", [-1, 1, 15, -15]);
    design.addPosition("jk", [-1, 1, 15, -15]);
    design.addPosition("kk", [-1, 1, 15, -15]);
    design.addPosition("lk", [-1, 1, 15, -15]);
    design.addPosition("mk", [-1, 1, 15, -15]);
    design.addPosition("nk", [-1, 1, 15, -15]);
    design.addPosition("ok", [-1, 0, 15, -15]);
    design.addPosition("al", [0, 1, 15, -15]);
    design.addPosition("bl", [-1, 1, 15, -15]);
    design.addPosition("cl", [-1, 1, 15, -15]);
    design.addPosition("dl", [-1, 1, 15, -15]);
    design.addPosition("el", [-1, 1, 15, -15]);
    design.addPosition("fl", [-1, 1, 15, -15]);
    design.addPosition("gl", [-1, 1, 15, -15]);
    design.addPosition("hl", [-1, 1, 15, -15]);
    design.addPosition("il", [-1, 1, 15, -15]);
    design.addPosition("jl", [-1, 1, 15, -15]);
    design.addPosition("kl", [-1, 1, 15, -15]);
    design.addPosition("ll", [-1, 1, 15, -15]);
    design.addPosition("ml", [-1, 1, 15, -15]);
    design.addPosition("nl", [-1, 1, 15, -15]);
    design.addPosition("ol", [-1, 0, 15, -15]);
    design.addPosition("am", [0, 1, 15, -15]);
    design.addPosition("bm", [-1, 1, 15, -15]);
    design.addPosition("cm", [-1, 1, 15, -15]);
    design.addPosition("dm", [-1, 1, 15, -15]);
    design.addPosition("em", [-1, 1, 15, -15]);
    design.addPosition("fm", [-1, 1, 15, -15]);
    design.addPosition("gm", [-1, 1, 15, -15]);
    design.addPosition("hm", [-1, 1, 15, -15]);
    design.addPosition("im", [-1, 1, 15, -15]);
    design.addPosition("jm", [-1, 1, 15, -15]);
    design.addPosition("km", [-1, 1, 15, -15]);
    design.addPosition("lm", [-1, 1, 15, -15]);
    design.addPosition("mm", [-1, 1, 15, -15]);
    design.addPosition("nm", [-1, 1, 15, -15]);
    design.addPosition("om", [-1, 0, 15, -15]);
    design.addPosition("an", [0, 1, 15, -15]);
    design.addPosition("bn", [-1, 1, 15, -15]);
    design.addPosition("cn", [-1, 1, 15, -15]);
    design.addPosition("dn", [-1, 1, 15, -15]);
    design.addPosition("en", [-1, 1, 15, -15]);
    design.addPosition("fn", [-1, 1, 15, -15]);
    design.addPosition("gn", [-1, 1, 15, -15]);
    design.addPosition("hn", [-1, 1, 15, -15]);
    design.addPosition("in", [-1, 1, 15, -15]);
    design.addPosition("jn", [-1, 1, 15, -15]);
    design.addPosition("kn", [-1, 1, 15, -15]);
    design.addPosition("ln", [-1, 1, 15, -15]);
    design.addPosition("mn", [-1, 1, 15, -15]);
    design.addPosition("nn", [-1, 1, 15, -15]);
    design.addPosition("on", [-1, 0, 15, -15]);
    design.addPosition("ao", [0, 1, 0, -15]);
    design.addPosition("bo", [-1, 1, 0, -15]);
    design.addPosition("co", [-1, 1, 0, -15]);
    design.addPosition("do", [-1, 1, 0, -15]);
    design.addPosition("eo", [-1, 1, 0, -15]);
    design.addPosition("fo", [-1, 1, 0, -15]);
    design.addPosition("go", [-1, 1, 0, -15]);
    design.addPosition("ho", [-1, 1, 0, -15]);
    design.addPosition("io", [-1, 1, 0, -15]);
    design.addPosition("jo", [-1, 1, 0, -15]);
    design.addPosition("ko", [-1, 1, 0, -15]);
    design.addPosition("lo", [-1, 1, 0, -15]);
    design.addPosition("mo", [-1, 1, 0, -15]);
    design.addPosition("no", [-1, 1, 0, -15]);
    design.addPosition("oo", [-1, 0, 0, -15]);

    design.addZone("first-move", 1, [112]);
    design.addZone("second-move", 2, [96, 111, 126, 97, 127, 98, 113, 128]);
    design.addZone("third-move", 1, [96, 111, 141, 97, 142, 99, 114, 144, 80, 95, 110, 125, 140, 81, 82, 83, 143, 84, 129]);

    design.addCommand(0, ZRF.FUNCTION,	1);	// empty?
    design.addCommand(0, ZRF.FUNCTION,	20);	// verify
    design.addCommand(0, ZRF.FUNCTION,	25);	// to
    design.addCommand(0, ZRF.FUNCTION,	28);	// end


    design.addPiece("Stone", 0);
    design.addDrop(0, 0, [], 0);
}

Dagaz.View.configure = function(view) {
    view.defBoard("Board");
    view.defPiece("BlackStone", "Black Stone");
    view.defPiece("WhiteStone", "White Stone");
 
    view.defPosition("aa", 6, 6, 30, 30);
    view.defPosition("ba", 36, 6, 30, 30);
    view.defPosition("ca", 66, 6, 30, 30);
    view.defPosition("da", 96, 6, 30, 30);
    view.defPosition("ea", 126, 6, 30, 30);
    view.defPosition("fa", 156, 6, 30, 30);
    view.defPosition("ga", 186, 6, 30, 30);
    view.defPosition("ha", 216, 6, 30, 30);
    view.defPosition("ia", 246, 6, 30, 30);
    view.defPosition("ja", 276, 6, 30, 30);
    view.defPosition("ka", 306, 6, 30, 30);
    view.defPosition("la", 336, 6, 30, 30);
    view.defPosition("ma", 366, 6, 30, 30);
    view.defPosition("na", 396, 6, 30, 30);
    view.defPosition("oa", 426, 6, 30, 30);
    view.defPosition("ab", 6, 36, 30, 30);
    view.defPosition("bb", 36, 36, 30, 30);
    view.defPosition("cb", 66, 36, 30, 30);
    view.defPosition("db", 96, 36, 30, 30);
    view.defPosition("eb", 126, 36, 30, 30);
    view.defPosition("fb", 156, 36, 30, 30);
    view.defPosition("gb", 186, 36, 30, 30);
    view.defPosition("hb", 216, 36, 30, 30);
    view.defPosition("ib", 246, 36, 30, 30);
    view.defPosition("jb", 276, 36, 30, 30);
    view.defPosition("kb", 306, 36, 30, 30);
    view.defPosition("lb", 336, 36, 30, 30);
    view.defPosition("mb", 366, 36, 30, 30);
    view.defPosition("nb", 396, 36, 30, 30);
    view.defPosition("ob", 426, 36, 30, 30);
    view.defPosition("ac", 6, 66, 30, 30);
    view.defPosition("bc", 36, 66, 30, 30);
    view.defPosition("cc", 66, 66, 30, 30);
    view.defPosition("dc", 96, 66, 30, 30);
    view.defPosition("ec", 126, 66, 30, 30);
    view.defPosition("fc", 156, 66, 30, 30);
    view.defPosition("gc", 186, 66, 30, 30);
    view.defPosition("hc", 216, 66, 30, 30);
    view.defPosition("ic", 246, 66, 30, 30);
    view.defPosition("jc", 276, 66, 30, 30);
    view.defPosition("kc", 306, 66, 30, 30);
    view.defPosition("lc", 336, 66, 30, 30);
    view.defPosition("mc", 366, 66, 30, 30);
    view.defPosition("nc", 396, 66, 30, 30);
    view.defPosition("oc", 426, 66, 30, 30);
    view.defPosition("ad", 6, 96, 30, 30);
    view.defPosition("bd", 36, 96, 30, 30);
    view.defPosition("cd", 66, 96, 30, 30);
    view.defPosition("dd", 96, 96, 30, 30);
    view.defPosition("ed", 126, 96, 30, 30);
    view.defPosition("fd", 156, 96, 30, 30);
    view.defPosition("gd", 186, 96, 30, 30);
    view.defPosition("hd", 216, 96, 30, 30);
    view.defPosition("id", 246, 96, 30, 30);
    view.defPosition("jd", 276, 96, 30, 30);
    view.defPosition("kd", 306, 96, 30, 30);
    view.defPosition("ld", 336, 96, 30, 30);
    view.defPosition("md", 366, 96, 30, 30);
    view.defPosition("nd", 396, 96, 30, 30);
    view.defPosition("od", 426, 96, 30, 30);
    view.defPosition("ae", 6, 126, 30, 30);
    view.defPosition("be", 36, 126, 30, 30);
    view.defPosition("ce", 66, 126, 30, 30);
    view.defPosition("de", 96, 126, 30, 30);
    view.defPosition("ee", 126, 126, 30, 30);
    view.defPosition("fe", 156, 126, 30, 30);
    view.defPosition("ge", 186, 126, 30, 30);
    view.defPosition("he", 216, 126, 30, 30);
    view.defPosition("ie", 246, 126, 30, 30);
    view.defPosition("je", 276, 126, 30, 30);
    view.defPosition("ke", 306, 126, 30, 30);
    view.defPosition("le", 336, 126, 30, 30);
    view.defPosition("me", 366, 126, 30, 30);
    view.defPosition("ne", 396, 126, 30, 30);
    view.defPosition("oe", 426, 126, 30, 30);
    view.defPosition("af", 6, 156, 30, 30);
    view.defPosition("bf", 36, 156, 30, 30);
    view.defPosition("cf", 66, 156, 30, 30);
    view.defPosition("df", 96, 156, 30, 30);
    view.defPosition("ef", 126, 156, 30, 30);
    view.defPosition("ff", 156, 156, 30, 30);
    view.defPosition("gf", 186, 156, 30, 30);
    view.defPosition("hf", 216, 156, 30, 30);
    view.defPosition("if", 246, 156, 30, 30);
    view.defPosition("jf", 276, 156, 30, 30);
    view.defPosition("kf", 306, 156, 30, 30);
    view.defPosition("lf", 336, 156, 30, 30);
    view.defPosition("mf", 366, 156, 30, 30);
    view.defPosition("nf", 396, 156, 30, 30);
    view.defPosition("of", 426, 156, 30, 30);
    view.defPosition("ag", 6, 186, 30, 30);
    view.defPosition("bg", 36, 186, 30, 30);
    view.defPosition("cg", 66, 186, 30, 30);
    view.defPosition("dg", 96, 186, 30, 30);
    view.defPosition("eg", 126, 186, 30, 30);
    view.defPosition("fg", 156, 186, 30, 30);
    view.defPosition("gg", 186, 186, 30, 30);
    view.defPosition("hg", 216, 186, 30, 30);
    view.defPosition("ig", 246, 186, 30, 30);
    view.defPosition("jg", 276, 186, 30, 30);
    view.defPosition("kg", 306, 186, 30, 30);
    view.defPosition("lg", 336, 186, 30, 30);
    view.defPosition("mg", 366, 186, 30, 30);
    view.defPosition("ng", 396, 186, 30, 30);
    view.defPosition("og", 426, 186, 30, 30);
    view.defPosition("ah", 6, 216, 30, 30);
    view.defPosition("bh", 36, 216, 30, 30);
    view.defPosition("ch", 66, 216, 30, 30);
    view.defPosition("dh", 96, 216, 30, 30);
    view.defPosition("eh", 126, 216, 30, 30);
    view.defPosition("fh", 156, 216, 30, 30);
    view.defPosition("gh", 186, 216, 30, 30);
    view.defPosition("hh", 216, 216, 30, 30);
    view.defPosition("ih", 246, 216, 30, 30);
    view.defPosition("jh", 276, 216, 30, 30);
    view.defPosition("kh", 306, 216, 30, 30);
    view.defPosition("lh", 336, 216, 30, 30);
    view.defPosition("mh", 366, 216, 30, 30);
    view.defPosition("nh", 396, 216, 30, 30);
    view.defPosition("oh", 426, 216, 30, 30);
    view.defPosition("ai", 6, 246, 30, 30);
    view.defPosition("bi", 36, 246, 30, 30);
    view.defPosition("ci", 66, 246, 30, 30);
    view.defPosition("di", 96, 246, 30, 30);
    view.defPosition("ei", 126, 246, 30, 30);
    view.defPosition("fi", 156, 246, 30, 30);
    view.defPosition("gi", 186, 246, 30, 30);
    view.defPosition("hi", 216, 246, 30, 30);
    view.defPosition("ii", 246, 246, 30, 30);
    view.defPosition("ji", 276, 246, 30, 30);
    view.defPosition("ki", 306, 246, 30, 30);
    view.defPosition("li", 336, 246, 30, 30);
    view.defPosition("mi", 366, 246, 30, 30);
    view.defPosition("ni", 396, 246, 30, 30);
    view.defPosition("oi", 426, 246, 30, 30);
    view.defPosition("aj", 6, 276, 30, 30);
    view.defPosition("bj", 36, 276, 30, 30);
    view.defPosition("cj", 66, 276, 30, 30);
    view.defPosition("dj", 96, 276, 30, 30);
    view.defPosition("ej", 126, 276, 30, 30);
    view.defPosition("fj", 156, 276, 30, 30);
    view.defPosition("gj", 186, 276, 30, 30);
    view.defPosition("hj", 216, 276, 30, 30);
    view.defPosition("ij", 246, 276, 30, 30);
    view.defPosition("jj", 276, 276, 30, 30);
    view.defPosition("kj", 306, 276, 30, 30);
    view.defPosition("lj", 336, 276, 30, 30);
    view.defPosition("mj", 366, 276, 30, 30);
    view.defPosition("nj", 396, 276, 30, 30);
    view.defPosition("oj", 426, 276, 30, 30);
    view.defPosition("ak", 6, 306, 30, 30);
    view.defPosition("bk", 36, 306, 30, 30);
    view.defPosition("ck", 66, 306, 30, 30);
    view.defPosition("dk", 96, 306, 30, 30);
    view.defPosition("ek", 126, 306, 30, 30);
    view.defPosition("fk", 156, 306, 30, 30);
    view.defPosition("gk", 186, 306, 30, 30);
    view.defPosition("hk", 216, 306, 30, 30);
    view.defPosition("ik", 246, 306, 30, 30);
    view.defPosition("jk", 276, 306, 30, 30);
    view.defPosition("kk", 306, 306, 30, 30);
    view.defPosition("lk", 336, 306, 30, 30);
    view.defPosition("mk", 366, 306, 30, 30);
    view.defPosition("nk", 396, 306, 30, 30);
    view.defPosition("ok", 426, 306, 30, 30);
    view.defPosition("al", 6, 336, 30, 30);
    view.defPosition("bl", 36, 336, 30, 30);
    view.defPosition("cl", 66, 336, 30, 30);
    view.defPosition("dl", 96, 336, 30, 30);
    view.defPosition("el", 126, 336, 30, 30);
    view.defPosition("fl", 156, 336, 30, 30);
    view.defPosition("gl", 186, 336, 30, 30);
    view.defPosition("hl", 216, 336, 30, 30);
    view.defPosition("il", 246, 336, 30, 30);
    view.defPosition("jl", 276, 336, 30, 30);
    view.defPosition("kl", 306, 336, 30, 30);
    view.defPosition("ll", 336, 336, 30, 30);
    view.defPosition("ml", 366, 336, 30, 30);
    view.defPosition("nl", 396, 336, 30, 30);
    view.defPosition("ol", 426, 336, 30, 30);
    view.defPosition("am", 6, 366, 30, 30);
    view.defPosition("bm", 36, 366, 30, 30);
    view.defPosition("cm", 66, 366, 30, 30);
    view.defPosition("dm", 96, 366, 30, 30);
    view.defPosition("em", 126, 366, 30, 30);
    view.defPosition("fm", 156, 366, 30, 30);
    view.defPosition("gm", 186, 366, 30, 30);
    view.defPosition("hm", 216, 366, 30, 30);
    view.defPosition("im", 246, 366, 30, 30);
    view.defPosition("jm", 276, 366, 30, 30);
    view.defPosition("km", 306, 366, 30, 30);
    view.defPosition("lm", 336, 366, 30, 30);
    view.defPosition("mm", 366, 366, 30, 30);
    view.defPosition("nm", 396, 366, 30, 30);
    view.defPosition("om", 426, 366, 30, 30);
    view.defPosition("an", 6, 396, 30, 30);
    view.defPosition("bn", 36, 396, 30, 30);
    view.defPosition("cn", 66, 396, 30, 30);
    view.defPosition("dn", 96, 396, 30, 30);
    view.defPosition("en", 126, 396, 30, 30);
    view.defPosition("fn", 156, 396, 30, 30);
    view.defPosition("gn", 186, 396, 30, 30);
    view.defPosition("hn", 216, 396, 30, 30);
    view.defPosition("in", 246, 396, 30, 30);
    view.defPosition("jn", 276, 396, 30, 30);
    view.defPosition("kn", 306, 396, 30, 30);
    view.defPosition("ln", 336, 396, 30, 30);
    view.defPosition("mn", 366, 396, 30, 30);
    view.defPosition("nn", 396, 396, 30, 30);
    view.defPosition("on", 426, 396, 30, 30);
    view.defPosition("ao", 6, 426, 30, 30);
    view.defPosition("bo", 36, 426, 30, 30);
    view.defPosition("co", 66, 426, 30, 30);
    view.defPosition("do", 96, 426, 30, 30);
    view.defPosition("eo", 126, 426, 30, 30);
    view.defPosition("fo", 156, 426, 30, 30);
    view.defPosition("go", 186, 426, 30, 30);
    view.defPosition("ho", 216, 426, 30, 30);
    view.defPosition("io", 246, 426, 30, 30);
    view.defPosition("jo", 276, 426, 30, 30);
    view.defPosition("ko", 306, 426, 30, 30);
    view.defPosition("lo", 336, 426, 30, 30);
    view.defPosition("mo", 366, 426, 30, 30);
    view.defPosition("no", 396, 426, 30, 30);
    view.defPosition("oo", 426, 426, 30, 30);
}