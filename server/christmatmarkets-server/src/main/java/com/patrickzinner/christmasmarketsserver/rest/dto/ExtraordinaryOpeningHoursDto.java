package com.patrickzinner.christmasmarketsserver.rest.dto;

import java.util.Date;

public class ExtraordinaryOpeningHoursDto extends AbstractOpeningHoursDto {
	private static final long serialVersionUID = 1L;
	
	private Date date;
	
	public void setDate(Date date) {
		this.date = date;
	}
	public Date getDate() {
		return date;
	}
}
