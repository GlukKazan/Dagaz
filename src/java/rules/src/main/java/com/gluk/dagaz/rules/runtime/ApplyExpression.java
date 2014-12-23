package com.gluk.dagaz.rules.runtime;

import java.util.HashMap;
import java.util.Map;

import com.gluk.dagaz.api.exceptions.CriticalException;
import com.gluk.dagaz.api.exceptions.EvaluationException;
import com.gluk.dagaz.api.rules.runtime.IEnvironment;
import com.gluk.dagaz.api.rules.runtime.IExpression;
import com.gluk.dagaz.api.rules.runtime.IFunction;
import com.gluk.dagaz.api.rules.runtime.IFunctionList;
import com.gluk.dagaz.api.rules.runtime.IValue;

public class ApplyExpression extends BaseExpression {

	private String name = null;
	private Map<String, IFunction> funcs = new HashMap<String, IFunction>();
	
	@Override
	public IValue getValue(IEnvironment env) throws EvaluationException {
		if (args.size() == 0) {
			throw new EvaluationException("Empty Apply expression");
		}
		IExpression ex = args.get(0);
		if ((name == null) || !ex.isConstant()) {
			StringBuffer sb = new StringBuffer();
			sb.append(ex.getValue(env).getString());
			sb.append('@');
			sb.append(Integer.toString(args.size() - 1));
			name = sb.toString();
		}
		IFunction f = funcs.get(name);
		if (f == null) {
			IFunctionList fl = app.getFunctionList();
			try {
				f = fl.getFunction(name);
			} catch (CriticalException e) {
				throw new EvaluationException(e.toString(), e);
			}
			funcs.put(name, f);
		}
		env.openFrame();
		for (int i = 1; i < args.size(); i++) {
			IValue v = args.get(i).getValue(env);
			String n = f.getParameters().get(i - 1);
			env.letValue(n, v);
		}
		IValue r = f.getExpression().getValue(env);
		env.closeFrame();
		return r;
	}
}
