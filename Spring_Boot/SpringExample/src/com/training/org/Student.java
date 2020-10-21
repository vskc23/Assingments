package com.training.org;

public class Student {

	private String studName;
	
	public Student() {
		System.out.println("Default is called");
	}
	
	public Student(String studName) {
		super();
		System.out.println("Para is called");
		this.studName = studName;
	}

	public String getStudName() {
		return studName;
	}

	public void setStudName(String studName) {
		this.studName = studName;
	}
	
	@Override
	public String toString() {
		return "Student [studName=" + studName + "]";
	}
}
