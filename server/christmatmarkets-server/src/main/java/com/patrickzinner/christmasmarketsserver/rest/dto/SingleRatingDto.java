package com.patrickzinner.christmasmarketsserver.rest.dto;

import java.io.Serializable;

public class SingleRatingDto implements Serializable {

	private static final long serialVersionUID = 1L;

	private Integer rating;

	private Integer ratingPrice;

	public void setRating(Integer rating) {
		this.rating = rating;
	}

	public Integer getRating() {
		return rating;
	}

	public void setRatingPrice(Integer ratingPrice) {
		this.ratingPrice = ratingPrice;
	}

	public Integer getRatingPrice() {
		return ratingPrice;
	}

}
