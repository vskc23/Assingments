package com.training.org;

public class MyMain {

	public static void main(String[] args) {	
		
		  Student student1 = new Student("Chaitanya", "Hyd");
	      student1.addCourseGrade("React", 80);
	      student1.addCourseGrade("Spring", 75);
	      student1.printGrades();
	      System.out.println("Average : " + student1.getAverageGrade());
	}

}
