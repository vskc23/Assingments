package com.training.org;

public class Organization {
	
	private String orgName;
	private String location;
	private int noOfEmployee;
	
	public Organization() {
		super();
		System.out.println("Para is called");
	}
	
	public Organization(String orgName, String location, int noOfEmployee) {
		super();
		System.out.println("Para is called");
		this.orgName = orgName;
		this.location = location;
		this.noOfEmployee = noOfEmployee;
	}

	public String getOrgName() {
		return orgName;
	}

	public void setOrgName(String orgName) {
		this.orgName = orgName;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public int getNoOfEmployee() {
		return noOfEmployee;
	}

	public void setNoOfEmployee(int noOfEmployee) {
		this.noOfEmployee = noOfEmployee;
	}

	@Override
	public String toString() {
		return "Organization [orgName=" + orgName + ", location=" + location + ", noOfEmployee=" + noOfEmployee + "]";
	}
	
	
	
	
	
	

}
