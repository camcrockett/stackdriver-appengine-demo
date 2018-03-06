package com.camcrockett.demo;

public class Status {
	private String name;
	private boolean enabled;

	public Status(String name, boolean enabled) {
		this.name = name;
		this.enabled = enabled;
	}

	public String getName() {
		return name;
	}

	public boolean isEnabled() {
		return enabled;
	}
}
