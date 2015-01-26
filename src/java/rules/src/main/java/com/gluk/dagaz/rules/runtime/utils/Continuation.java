package com.gluk.dagaz.rules.runtime.utils;

import java.util.ArrayList;
import java.util.List;

import com.gluk.dagaz.api.rules.runtime.IContinuation;
import com.gluk.dagaz.api.rules.runtime.IEnvironment;
import com.gluk.dagaz.api.rules.runtime.IExpression;

public class Continuation implements IContinuation {
	
	private IEnvironment env;
	private List<CallFrame> trace = new ArrayList<CallFrame>();
	private int offset = 0;
	
	public Continuation(IEnvironment env, List<CallFrame> trace) {
		this.env = env.getCopy();
		for (int i=0; i < trace.size(); i++) {
			CallFrame f = trace.get(i).getCopy();
			this.trace.add(i, f);
		}
	}
	
	@Override
	public IEnvironment getEnvironment() {
		return env;
	}

	@Override
	public void setOffset(int offset) {
		this.offset = offset;
	}

	@Override
	public int useTrace(IExpression e) {
		int r = 0;
		if (offset < trace.size()) {
			CallFrame f = trace.get(offset);
			r = f.useValues(e);
			offset++;
		}
		return r;
	}

	@Override
	public int getLevel() {
		return trace.size();
	}
}
