package com.patrickzinner.christmasmarketsserver.rest.dto;

import java.io.Serializable;

public abstract class AbstractOpeningHoursDto implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	protected boolean open;
	protected Integer start;
	protected Integer end;
	
	public AbstractOpeningHoursDto() {
		
	}
	
	public AbstractOpeningHoursDto(boolean open, Integer start, Integer end) {
		super();
		this.open = open;
		this.start = start;
		this.end = end;
	}
	public boolean isOpen() {
		return open;
	}
	public void setOpen(boolean open) {
		this.open = open;
	}
	public Integer getStart() {
		return start;
	}
	public void setStart(Integer start) {
		this.start = start;
	}
	public Integer getEnd() {
		return end;
	}
	public void setEnd(Integer end) {
		this.end = end;
	}
	
	
}


