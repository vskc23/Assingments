package com.training.org;

public class Project {
	
	private String projectName;
	private String technology;
	private String managerName;
	private int teamMembers;
	
	public Project() {
		System.out.println("Default is called");
		projectName="";
		technology="";
		managerName="";
		teamMembers=0;
		
		
	}
	
	public Project(String projectName, String technology, String managerName, int teamMembers) {
		super();
		System.out.println("Para is called");
		this.projectName = projectName;
		this.technology = technology;
		this.managerName = managerName;
		this.teamMembers = teamMembers;
	}
	
	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public String getTechnology() {
		return technology;
	}

	public void setTechnology(String technology) {
		this.technology = technology;
	}

	public String getManagerName() {
		return managerName;
	}

	public void setManagerName(String managerName) {
		this.managerName = managerName;
	}

	public int getTeamMembers() {
		return teamMembers;
	}

	public void setTeamMembers(int teamMembers) {
		this.teamMembers = teamMembers;
	}

	@Override
	public String toString() {
		return "Project [projectName=" + projectName + ", technology=" + technology + ", managerName=" + managerName
				+ ", teamMembers=" + teamMembers + "]";
	}
	
	

	

}
