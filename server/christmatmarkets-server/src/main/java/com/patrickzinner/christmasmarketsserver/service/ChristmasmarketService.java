package com.patrickzinner.christmasmarketsserver.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.patrickzinner.christmasmarketsserver.model.Christmasmarket;
import com.patrickzinner.christmasmarketsserver.model.MarketRating;
import com.patrickzinner.christmasmarketsserver.repository.ChristmasmarketRepository;
import com.patrickzinner.christmasmarketsserver.repository.MarketRatingRepository;
import com.patrickzinner.christmasmarketsserver.service.model.RatingAverage;

@Component
public class ChristmasmarketService {

	@Autowired
	private ChristmasmarketRepository christmasmarketRepository;
	
	@Autowired
	private MarketRatingRepository marketRatingRepo;

	public List<Christmasmarket> findAll() {
		return this.christmasmarketRepository.findAll();
	}
	
	public List<Christmasmarket> findUpdatedMarkets(Date minLastUpdated){
		return this.christmasmarketRepository.findByLastUpdateAfter(minLastUpdated);
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
	
	public MarketRating rateMarket(long marketId, String userId, int rating, int ratingPrice) {
		Christmasmarket market = this.christmasmarketRepository.findOne(marketId);
		MarketRating oldRating = findRating(userId, market);
		
		if(oldRating != null) {
			oldRating.setNormalRating(rating);
			oldRating.setPriceRating(ratingPrice);
			return oldRating;
		}else {
			MarketRating newRating = new MarketRating();
			newRating.setNormalRating(rating);
			newRating.setPriceRating(ratingPrice);
			newRating.setMarket(market);
			newRating.setUserId(userId);
			market.getRatings().add(newRating);
			return this.marketRatingRepo.save(newRating);
		}
	}
	
	public Christmasmarket findChristmasMarket(long marketId) {
		return this.christmasmarketRepository.findOne(marketId);
	}

	public MarketRating findRating(String userId, Christmasmarket market) {
		MarketRating oldRating = this.marketRatingRepo.findByMarketAndUserId(market, userId);
		return oldRating;
	}
	

}
