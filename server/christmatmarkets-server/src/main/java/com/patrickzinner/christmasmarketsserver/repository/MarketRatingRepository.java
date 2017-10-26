package com.patrickzinner.christmasmarketsserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.patrickzinner.christmasmarketsserver.model.Christmasmarket;
import com.patrickzinner.christmasmarketsserver.model.MarketRating;

public interface MarketRatingRepository extends JpaRepository<MarketRating, Long>{
	
	public MarketRating findByMarketAndUserId(Christmasmarket market, String userId);
}
