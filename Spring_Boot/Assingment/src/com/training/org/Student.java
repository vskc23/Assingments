package com.training.org;

import java.util.Arrays;

public class Student extends Person {
	
	   private int numCourses;   
	   private String[] courses; 
	   private int[] grades;
	   private final int MAXC = 10;
	
	public Student(String name, String address) {
		super(name, address);
		numCourses = 0;
	      courses = new String[MAXC];
	      grades = new int[MAXC];
	}

	@Override
	public String toString() {
		return "Student [numCourses=" + numCourses + ", courses=" + Arrays.toString(courses) + ", grades="
				+ Arrays.toString(grades) + ", MAXC=" + MAXC + "]";
	} 
	
	 public void addCourseGrade(String course, int grade) {
	      courses[numCourses] = course;
	      grades[numCourses] = grade;
	      ++numCourses;
	   }
	 
	   public void printGrades() {
		      System.out.print(this);
		      for (int i = 0; i < numCourses; ++i) {
		         System.out.print(" " + courses[i] + ":" + grades[i]);
		      }
		      System.out.println();
		   }

	   
	   public double getAverageGrade() {
		      int sum = 0;
		      for (int i = 0; i < numCourses; i++ ) {
		         sum += grades[i];
		      }
		      return (double)sum/numCourses;
		   }

}


