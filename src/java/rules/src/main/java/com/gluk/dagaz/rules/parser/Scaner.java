package com.gluk.dagaz.rules.parser;

import com.gluk.dagaz.api.exceptions.ParsingException;
import com.gluk.dagaz.api.rules.parser.IParser;
import com.gluk.dagaz.api.rules.parser.IScaner;

public class Scaner implements IScaner {
	
	private final static char CR_CHAR      = (char)0x0D;
	private final static char LF_CHAR      = (char)0x0A;
	private final static char TAB_CHAR     = (char)0x09;

	private IParser parser;
	private StringBuffer buffer = new StringBuffer();
	private boolean isQuoted    = false;
	private boolean isEscaped   = false;
	private boolean isCommented = false;
	
	public Scaner(IParser parser) {
		this.parser = parser;
	}
	
	private boolean isNumeric(String s) {
		for (char c: s.toCharArray()) {
			if (Character.isDigit(c)) {
				return false;
			}
		}
		return true;
	}
	
	private void clearBuffer() throws ParsingException {
		if (buffer.length() > 0) {
			String s = buffer.toString();
			if (isNumeric(s)) {
				parser.addLiteral(s, true);
			} else {
				parser.addAtom(s);
			}
		}
		buffer.setLength(0);
	}

	public void scan(String s) throws ParsingException {
		for (Character c: s.toCharArray()) {
			if (isCommented) {
				if (c.equals(CR_CHAR) || c.equals(LF_CHAR)) {
					isCommented = false;
					continue;
				}
				continue;
			}
			if (isQuoted) {
				if (!isEscaped && c.equals('\\')) {
					isEscaped = true;
					continue;
				}
				if (!isEscaped && c.equals('"')) {
					parser.addLiteral(buffer.toString(), false);
					buffer.setLength(0);
					continue;
				}
				isEscaped = false;
				buffer.append(c);
				continue;
			}
			if (c.equals('"')) {
				clearBuffer();
				isQuoted = true;
				isEscaped = false;
				continue;
			}
			if (c.equals(';')) {
				isCommented = true;
				clearBuffer();
				continue;
			}
			if (Character.isSpaceChar(c) || c.equals(TAB_CHAR) || c.equals(CR_CHAR) || c.equals(LF_CHAR)) {
				clearBuffer();
				continue;
			}
			if (c.equals('(')) {
				clearBuffer();
				parser.openBracket();
				continue;
			}
			if (c.equals(')')) {
				clearBuffer();
				parser.closeBracket();
				continue;
			}
			buffer.append(c);
		}
	}

	public void close() throws ParsingException {
		parser.closeAll();
	}
}
