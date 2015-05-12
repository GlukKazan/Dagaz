package com.gluk.dagaz.api.state;

import com.gluk.dagaz.api.exceptions.CommonException;
import com.gluk.dagaz.api.exceptions.EmptyPositionException;

public interface IPosition extends IValueSet {
	boolean isEmpty();
	IPiece getPiece() throws EmptyPositionException;
	IPiece createPiece(String player, String type) throws CommonException;
	void deletePiece() throws EmptyPositionException;
}
