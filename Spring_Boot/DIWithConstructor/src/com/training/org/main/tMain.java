package com.training.org.main;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.training.org.Employee;

public class tMain {
	public static void main(String[] args) {
		ApplicationContext context=new ClassPathXmlApplicationContext("applicationContext.xml");
//		Employee e1=(Employee)context.getBean("empBeanByConstructor");
//		System.out.println(e1);
//		
		Employee e2=(Employee)context.getBean("empBeanBySetter");
		System.out.println(e2);
	}
	
	
	
	
	

}