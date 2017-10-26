package com.patrickzinner.christmasmarketsserver.rest.dto;

import java.io.Serializable;

public class RatingDto implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private long marketId;
	
	private String userId;
	
	private Integer rating;
	
	private Integer ratingPrice;

	public long getMarketId() {
		return marketId;
	}

	public void setMarketId(long marketId) {
		this.marketId = marketId;
	}

	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public Integer getRating() {
		return rating;
	}

	public void setRating(Integer rating) {
		this.rating = rating;
	}

	public Integer getRatingPrice() {
		return ratingPrice;
	}

	public void setRatingPrice(Integer ratingPrice) {
		this.ratingPrice = ratingPrice;
	}
	
	
	

}
