package com.patrickzinner.christmasmarketsserver.model;

import javax.persistence.Column;
import javax.persistence.MappedSuperclass;

import org.hibernate.annotations.Type;


@MappedSuperclass
public abstract class AbstractOpeningHours extends AbstractEntity{
	private static final long serialVersionUID = 1L;
	
	
	@Type(type="yes_no")
	@Column
	protected Boolean open;

	@Column(name="start_time")
	protected Integer start;
	
	@Column(name="end_time")
	protected Integer end;
	

	public AbstractOpeningHours() {
		
	}
	

	public AbstractOpeningHours(Boolean open, Integer start, Integer end) {
		super();
		this.open = open;
		this.start = start;
		this.end = end;
	}

	public Boolean getOpen() {
		return open;
	}

	public void setOpen(Boolean open) {
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
