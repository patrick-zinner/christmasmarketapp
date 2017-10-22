package com.patrickzinner.christmasmarketsserver.rest.dto;

public class NormalOpeningHoursDto extends AbstractOpeningHoursDto {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private int dayOfWeek;
	
	public NormalOpeningHoursDto() {
		super();
	}
	
	public NormalOpeningHoursDto(int dayOfWeek, boolean open, Integer start, Integer end) {
		super(open, start, end);
		this.dayOfWeek = dayOfWeek;
	}

	public void setDayOfWeek(int dayOfWeek) {
		this.dayOfWeek = dayOfWeek;
	}
	
	public int getDayOfWeek() {
		return dayOfWeek;
	}
}
