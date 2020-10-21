package com.training;

import java.util.ArrayList;

public class Building {
	
	private String buildingName;
	private String buildingAddress;
	
	private ArrayList<Rooms> rooms;

	public Building() {
		System.out.println("Default constructor of Building is called");
		this.buildingName="";
		this.buildingAddress="";
		this.rooms=new ArrayList<Rooms>();
	}
	public Building(String buildingName, String buildingAddress, ArrayList<Rooms> rooms) {
		super();
		this.buildingName = buildingName;
		this.buildingAddress = buildingAddress;
		this.rooms = rooms;
	}
	
	public String getBuildingName() {
		return buildingName;
	}
	public void setBuildingName(String buildingName) {
		this.buildingName = buildingName;
	}
	public String getBuildingAddress() {
		return buildingAddress;
	}
	public void setBuildingAddress(String buildingAddress) {
		this.buildingAddress = buildingAddress;
	}
	public ArrayList<Rooms> getRooms() {
		return rooms;
	}
	public void setRooms(ArrayList<Rooms> rooms) {
		this.rooms = rooms;
	}
	@Override
	public String toString() {
		return "Building [buildingName=" + buildingName + ", buildingAddress=" + buildingAddress + ", rooms=" + rooms
				+ "]";
	}
	

}
