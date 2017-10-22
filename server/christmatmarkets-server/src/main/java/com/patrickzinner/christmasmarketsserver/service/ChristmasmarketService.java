package com.patrickzinner.christmasmarketsserver.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.patrickzinner.christmasmarketsserver.model.Christmasmarket;
import com.patrickzinner.christmasmarketsserver.model.MarketRating;
import com.patrickzinner.christmasmarketsserver.repository.ChristmasmarketRepository;
import com.patrickzinner.christmasmarketsserver.service.model.RatingAverage;

@Component
public class ChristmasmarketService {

	@Autowired
	private ChristmasmarketRepository christmasmarketRepository;

	public List<Christmasmarket> findAll() {
		return this.christmasmarketRepository.findAll();
	}

	public RatingAverage calculateRating(Christmasmarket market) {
		int numberOfRatings = market.getRatings().size();
		Double normalRating = null;
		Double priceRatings = null;
		if(numberOfRatings > 0) {
			normalRating = market.getRatings().stream().mapToInt(MarketRating::getNormalRating).average().getAsDouble();
			priceRatings = market.getRatings().stream().mapToInt(MarketRating::getPriceRating).average().getAsDouble();
		}
		return new RatingAverage(normalRating, priceRatings, numberOfRatings);
	}
	

}
