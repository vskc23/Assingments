//package com.training.org;
//
//import java.lang.reflect.Method;
//
//import org.springframework.aop.MethodBeforeAdvice;
//
//public class BeforeAdvice implements MethodBeforeAdvice{
//
//	@Override
//	public void before(Method arg0, Object[] arg1, Object arg2) throws Throwable {
//		System.out.println("Additional concern before logic");
//	}
//}

package com.training.org;

import java.lang.reflect.Method;
import java.util.logging.FileHandler;
import java.util.logging.Logger;

import org.springframework.aop.MethodBeforeAdvice;

public class BeforeAdvice implements MethodBeforeAdvice{

	@Override
	public void before(Method arg0, Object[] arg1, Object arg2) throws Throwable {
		System.out.println("Additional concern before logic");
//		System.out.println("Method infor"+arg0.getName());
//		for(Object arg:arg1) {
//			System.out.println(arg);
//		}
//		System.out.println("Target "+arg2);
//		System.out.println("Target class"+arg2.getClass().getName());
		boolean append = true;
        FileHandler handler = new FileHandler("default.log", append);
 
        Logger logger = Logger.getLogger("com.javacodegeeks.snippets.core");
        logger.addHandler(handler);
        logger.info("Before advice logging");
		
	}
}