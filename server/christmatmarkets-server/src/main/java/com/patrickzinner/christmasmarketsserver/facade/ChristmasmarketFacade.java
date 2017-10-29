package com.patrickzinner.christmasmarketsserver.facade;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;
import javax.transaction.Transactional.TxType;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.patrickzinner.christmasmarketsserver.model.Christmasmarket;
import com.patrickzinner.christmasmarketsserver.model.ExtraordinaryOpeningHours;
import com.patrickzinner.christmasmarketsserver.model.MarketRating;
import com.patrickzinner.christmasmarketsserver.model.NormalOpeningHours;
import com.patrickzinner.christmasmarketsserver.rest.dto.ChristmasmarketDto;
import com.patrickzinner.christmasmarketsserver.rest.dto.ExtraordinaryOpeningHoursDto;
import com.patrickzinner.christmasmarketsserver.rest.dto.LatLngDto;
import com.patrickzinner.christmasmarketsserver.rest.dto.NormalOpeningHoursDto;
import com.patrickzinner.christmasmarketsserver.rest.dto.RatingDto;
import com.patrickzinner.christmasmarketsserver.rest.dto.SingleRatingDto;
import com.patrickzinner.christmasmarketsserver.service.ChristmasmarketService;
import com.patrickzinner.christmasmarketsserver.service.model.RatingAverage;

@Component
@Transactional(value = TxType.REQUIRED)
public class ChristmasmarketFacade {

	@Autowired
	private ChristmasmarketService christmasmarketService;
	

	public List<ChristmasmarketDto> findAll() {
		List<Christmasmarket> entities = this.christmasmarketService.findAll();
		return entities.stream().map(this::mapEntityToDto).collect(Collectors.toList());
	}
	
	public List<ChristmasmarketDto> findUpdatedMarkets(Date lastTimeUpdate) {
		List<Christmasmarket> entities = this.christmasmarketService.findUpdatedMarkets(lastTimeUpdate);
		return entities.stream().map(this::mapEntityToDto).collect(Collectors.toList());
	}

	private ChristmasmarketDto mapEntityToDto(Christmasmarket entity) {
		ChristmasmarketDto result = new ChristmasmarketDto();

		// metadata
		result.setAddress(entity.getAddress());
		result.setCity(entity.getCity());
		result.setEnd(entity.getEnd());
		result.setId(entity.getId());
		result.setName(entity.getName());
		result.setPostalCode(entity.getPostalCode());
		result.setStart(entity.getStart());
		result.setPosition(new LatLngDto());
		result.getPosition().setLatitude(entity.getPosition().getLatitude());
		result.getPosition().setLongitude(entity.getPosition().getLongitude());

		// ratings
		RatingAverage ratings = christmasmarketService.calculateRating(entity);
		result.setRating(ratings.getNormalRating());
		result.setRatingPrice(ratings.getPriceRating());
		result.setNumberOfRatings(ratings.getNumberOfRatings());

		// openinghours
		result.setExtraordinaryOpeningHours(
				entity.getExtraordinaryOpeningHours().stream().map(this::mapEntityToDto).collect(Collectors.toList()));
		result.setOpeningHours(
				entity.getOpeningHours().stream().map(this::mapEntityToDto).collect(Collectors.toList()));

		return result;
	}

	public ChristmasmarketDto rateChristmasMarket(RatingDto rating) {
		MarketRating entity = this.christmasmarketService.rateMarket(rating.getMarketId(), rating.getUserId(),
				rating.getRating(), rating.getRatingPrice());
		return mapEntityToDto(entity.getMarket());
	}

	public SingleRatingDto findRating(long marketId, String userId) {
		Christmasmarket market = this.christmasmarketService.findChristmasMarket(marketId);
		MarketRating rating = this.christmasmarketService.findRating(userId, market);
		
		SingleRatingDto result = null;
		
		if(rating != null) {
			result = new SingleRatingDto();
			result.setRating(rating.getNormalRating());
			result.setRatingPrice(rating.getPriceRating());
		}
		
		return result;
	}

	private ExtraordinaryOpeningHoursDto mapEntityToDto(ExtraordinaryOpeningHours entity) {
		ExtraordinaryOpeningHoursDto result = new ExtraordinaryOpeningHoursDto();

		result.setDate(result.getDate());
		result.setEnd(entity.getEnd());
		result.setStart(entity.getStart());
		result.setOpen(entity.getOpen());

		return result;
	}

	private NormalOpeningHoursDto mapEntityToDto(NormalOpeningHours entity) {
		NormalOpeningHoursDto result = new NormalOpeningHoursDto();

		result.setDayOfWeek(entity.getDayOfWeek());
		result.setEnd(entity.getEnd());
		result.setStart(entity.getStart());
		result.setOpen(entity.getOpen());

		return result;
	}
	
}
