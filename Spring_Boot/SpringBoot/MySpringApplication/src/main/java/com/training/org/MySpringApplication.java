package com.training.org;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController

public class MySpringApplication {
	public static void main(String args[])
	{

			
	List<Employee> employeesList = new ArrayList<Employee>();
	employeesList.add(new Employee(1, "ram", "krishna", 8000));
	employeesList.add(new Employee(2, "sbc", "def", 8000));
		
	Scanner sc = new Scanner(System.in);
	int choice;
	while(true) {
		System.out.println("Please select the option you want to choose :");
		System.out.println("1. Add\n2. Update\n3. Delete\n4. Display the array");
		choice = sc.nextInt();
		if(choice == 1) {
			System.out.println("Enter the input");
			int id = sc.nextInt();
			String firstName = sc.next();
			String lastName = sc.next();
			int salary = sc.nextInt();
			employeesList.add(new Employee (id,firstName,lastName,salary));	
		}
		
		else if(choice == 2)
		{
			System.out.println("enter the INPUT field which you want to change");
			int ch2 = sc.nextInt();
			//ch2 = ch2-1;
			employeesList.remove(ch2);
			System.out.println("Enter the new input");
			int id = sc.nextInt();
			String firstName = sc.next();
			String lastName = sc.next();
			int salary = sc.nextInt();
			employeesList.add(new Employee (id,firstName,lastName,salary));		
		}
			
		
		else if(choice == 3) {
			System.out.println("enter the empId which you want to delete");
			int ch3 = sc.nextInt();
			employeesList.remove(ch3);
		}
		
		else if(choice == 4)
		{
			employeesList.forEach(System.out::println);
		}
		else {
			System.out.println("You have selected an invalid input");
			break;
		}
	}			
  }
}


		
	

