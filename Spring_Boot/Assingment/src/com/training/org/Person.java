package com.training.org;

public class Person {
	
	private String name;
	private String address;
	
	
	public Person() {
		System.out.println("Default is called");
	}
	
	public Person(String name, String address) {
		super();
		System.out.println("Default is called");
		this.name = name;
		this.address = address;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	@Override
	public String toString() {
		return "Person [name=" + name + ", address=" + address + "]";
	}
	
	
	
	

}
