package com.gluk.dagaz.api.rules.parser;

import com.gluk.dagaz.api.exceptions.ParsingException;

public interface IParser {
	void openBracket() throws ParsingException;
	void closeBracket() throws ParsingException;
	void addAtom(String s) throws ParsingException;
	void addLiteral(String s, boolean isNumeric) throws ParsingException;
	void closeAll() throws ParsingException;
}
