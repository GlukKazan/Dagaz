package com.gluk.dagaz.runtime;

import com.gluk.dagaz.api.model.IValue;
import com.gluk.dagaz.api.state.IDeferredCheck;
import com.gluk.dagaz.api.state.IEnvironment;
import com.gluk.dagaz.exceptions.CommonException;
import com.gluk.dagaz.utils.Value;

public class IncCommand extends AbstractCommand { // -- n 
	
	private String name = null;

	@Override
	public void addArgument(Object arg) throws CommonException {
		if ((name != null) || !(arg instanceof String)) {
			throw new CommonException("Invalid argument");
		}
		name = (String)arg;
	}

	@Override
	public boolean execute(IDeferredCheck state, IEnvironment env) throws CommonException {
		super.execute(state, env);
		if (name == null) {
			throw new CommonException("Invalid arguments");
		}
		IValue v = env.get(name);
		env.set(name, Value.create(v.getNumber() + 1));
		processor.getStack().push(v);
		return true;
	} 
}