package com.gluk.dagaz.rules.runtime.library;

import com.gluk.dagaz.api.exceptions.EvaluationException;
import com.gluk.dagaz.api.exceptions.ParsingException;
import com.gluk.dagaz.api.rules.runtime.IEnvironment;
import com.gluk.dagaz.api.rules.runtime.IExpression;
import com.gluk.dagaz.api.rules.runtime.IValue;
import com.gluk.dagaz.rules.runtime.utils.BaseExpression;
import com.gluk.dagaz.rules.runtime.utils.ConstantValue;

public class DecrementExpression extends BaseExpression {

	@Override
	protected IValue eval(IEnvironment env) throws EvaluationException {
		if ((args.size() < 1) || (args.size() > 2)) {
			throw new EvaluationException("Bad arity");
		}
		String name = args.get(0).getValue(env).getString();
		long v = env.getValue(name, false).getLong();
		long delta = 1;
		if (args.size() == 2) {
			delta = args.get(1).getValue(env).getLong();
		}
		if (v - delta > 0) {
			v -= delta;
		} else {
			return new ConstantValue(0L);
		}
		IValue value = new ConstantValue(v);
		env.setValue(name, value);
		return value;
	}
	
	@Override
	public void addArgument(IExpression arg) throws ParsingException {
		if (args.size() == 2) {
			throw new ParsingException("Bad arity");
		}
		super.addArgument(arg);
	}

	@Override
	public boolean isQuoted(int ix) {
		return (ix == 0);
	}
}
