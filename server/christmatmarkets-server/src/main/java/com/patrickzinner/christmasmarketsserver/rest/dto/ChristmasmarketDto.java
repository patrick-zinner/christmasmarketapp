package com.patrickzinner.christmasmarketsserver.rest.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonProperty;

public class ChristmasmarketDto implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long id;
	private String name;
	
	private Date start;
	
	private Date end;
	private String postalCode;
	private String city;
	private String address;
	private Double rating;
	private Double ratingPrice;
	private Integer numberOfRatings;
	@JsonProperty("position")
	private LatLngDto position;
	private List<NormalOpeningHoursDto> openingHours = new ArrayList<>();
	private List<ExtraordinaryOpeningHoursDto> extraordinaryOpeningHours = new ArrayList<>();
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Date getStart() {
		return start;
	}
	public void setStart(Date start) {
		this.start = start;
	}
	public Date getEnd() {
		return end;
	}

	public void setEnd(Date end) {
		this.end = end;
	}
	public String getPostalCode() {
		return postalCode;
	}
	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Double getRating() {
		return rating;
	}
	public void setRating(Double rating) {
		this.rating = rating;
	}
	public Double getRatingPrice() {
		return ratingPrice;
	}
	public void setRatingPrice(Double ratingPrice) {
		this.ratingPrice = ratingPrice;
	}
	public Integer getNumberOfRatings() {
		return numberOfRatings;
	}
	public void setNumberOfRatings(Integer numberOfRatings) {
		this.numberOfRatings = numberOfRatings;
	}
	public LatLngDto getPosition() {
		return position;
	}
	public void setPosition(LatLngDto position) {
		this.position = position;
	}
	public List<NormalOpeningHoursDto> getOpeningHours() {
		return openingHours;
	}
	public void setOpeningHours(List<NormalOpeningHoursDto> openingHours) {
		this.openingHours = openingHours;
	}
	public List<ExtraordinaryOpeningHoursDto> getExtraordinaryOpeningHours() {
		return extraordinaryOpeningHours;
	}
	public void setExtraordinaryOpeningHours(List<ExtraordinaryOpeningHoursDto> extraordinaryOpeningHours) {
		this.extraordinaryOpeningHours = extraordinaryOpeningHours;
	}
	
	
	
}



