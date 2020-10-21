package com.training.org;

import java.lang.reflect.Method;
import java.util.logging.FileHandler;
import java.util.logging.Logger;

import org.springframework.aop.AfterReturningAdvice;

public class AfterAdvice implements AfterReturningAdvice{

	@Override
	public void afterReturning(Object returnValue, Method method, Object[] args, Object target) throws Throwable {
		System.out.println("After returning additional concern");
		 boolean append = true;
	        FileHandler handler = new FileHandler("default.log", append);
	 
	        Logger logger = Logger.getLogger("com.javacodegeeks.snippets.core");
	        logger.addHandler(handler);
	        logger.info("After advice logging");
		
	}

}
