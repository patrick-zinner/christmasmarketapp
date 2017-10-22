package com.patrickzinner.christmasmarketsserver.model;

import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
public class LatLng{
	
	@Column(precision=8, scale=6)
	private BigDecimal latitude;
	@Column(precision=8, scale=6)
	private BigDecimal longitude;
	
	public void setLatitude(BigDecimal latitude) {
		this.latitude = latitude;
	}
	
	public BigDecimal getLatitude() {
		return latitude;
	}
	
	public BigDecimal getLongitude() {
		return longitude;
	}
	
	public void setLongitude(BigDecimal longitude) {
		this.longitude = longitude;
	}
	
}
