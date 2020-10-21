package com.training.org;

import java.util.Arrays;

public class Teacher extends Person {
	
	   private int numCourses;   
	   private String[] courses	;
	   private final int MAXC = 5;
	   
	
	   public Teacher(String name, String address) {
		   super(name, address);
		   numCourses = 0;
		   courses = new String[MAXC];	
	}
	   
	 public boolean addCourse(String course) {
	
		      for (int i = 0; i < numCourses; i++) {
		         if (courses[i].equals(course)) 
		         {
		        	 return false;
		         }
		      }
		      courses[numCourses] = course;
		      numCourses++;
		      return true;
		   }
	   
	public int getNumCourses() {
		return numCourses;
	}
	public void setNumCourses(int numCourses) {
		this.numCourses = numCourses;
	}
	public String[] getCourses() {
		return courses;
	}
	public void setCourses(String[] courses) {
		this.courses = courses;
	}
	@Override
	public String toString() {
		return "Teacher [numCourses=" + numCourses + ", courses=" + Arrays.toString(courses) + ", MAXC=" + MAXC + "]";
	}
	   
	 
	   

}

