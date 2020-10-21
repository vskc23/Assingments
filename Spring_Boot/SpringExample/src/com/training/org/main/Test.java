package com.training.org.main;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.training.org.Organization;  

public class Test {  
	public static void main(String[] args) {  
//		Resource resource=new ClassPathResource("applicationContext.xml");  
//		BeanFactory factory=new XmlBeanFactory(resource);  
		
		ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

		Organization organization=(Organization)context.getBean("orgbean");  
		System.out.println(organization);  
	}  
} 