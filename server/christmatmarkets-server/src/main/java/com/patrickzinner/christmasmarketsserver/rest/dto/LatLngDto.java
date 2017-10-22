package com.patrickzinner.christmasmarketsserver.rest.dto;

import java.io.Serializable;
import java.math.BigDecimal;

public class LatLngDto implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public LatLngDto(BigDecimal latitude, BigDecimal longitude) {
		super();
		this.latitude = latitude;
		this.longitude = longitude;
	}
	
	public LatLngDto() {
		
	}

	private BigDecimal latitude;
	private BigDecimal longitude;

	public BigDecimal getLatitude() {
		return latitude;
	}

	public void setLatitude(BigDecimal latitude) {
		this.latitude = latitude;
	}

	public BigDecimal getLongitude() {
		return longitude;
	}

	public void setLongitude(BigDecimal longitude) {
		this.longitude = longitude;
	}

}
