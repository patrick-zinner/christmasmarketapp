package com.patrickzinner.christmasmarketsserver.service.model;

public class RatingAverage {
	private Double normalRating;

	private Double priceRating;

	private Integer numberOfRatings;

	public RatingAverage(Double normalRating, Double priceRating, Integer numberOfRatings) {
		super();
		this.normalRating = normalRating;
		this.priceRating = priceRating;
		this.numberOfRatings = numberOfRatings;
	}

	public Double getNormalRating() {
		return normalRating;
	}

	public Double getPriceRating() {
		return priceRating;
	}

	public Integer getNumberOfRatings() {
		return numberOfRatings;
	}

}