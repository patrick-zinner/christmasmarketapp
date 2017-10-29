package com.patrickzinner.christmasmarketsserver.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.format.annotation.DateTimeFormat.ISO;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.patrickzinner.christmasmarketsserver.facade.ChristmasmarketFacade;
import com.patrickzinner.christmasmarketsserver.rest.dto.ChristmasmarketDto;
import com.patrickzinner.christmasmarketsserver.rest.dto.RatingDto;
import com.patrickzinner.christmasmarketsserver.rest.dto.ResultWrapper;
import com.patrickzinner.christmasmarketsserver.rest.dto.SingleRatingDto;

@RestController
@RequestMapping("christmasmarkets")
public class ChristmasmarketController {

	@Autowired
	private ChristmasmarketFacade christmasmarketFacade;

	@ResponseBody
	@RequestMapping(value = "", method = RequestMethod.GET)
	public ResultWrapper getAllChristmasmarkets() {
		ResultWrapper result = new ResultWrapper();
		List<ChristmasmarketDto> markets = this.christmasmarketFacade.findAll();
		result.setResults(markets);
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "/{lastupdate}", method = RequestMethod.GET)
	public ResultWrapper getAllChristmasmarkets(@PathVariable("lastupdate") @DateTimeFormat(iso=ISO.DATE_TIME) Date lastUpdate) {
		ResultWrapper result = new ResultWrapper();
		List<ChristmasmarketDto> markets = this.christmasmarketFacade.findAll();
		result.setResults(markets);
		return result;
	}

	@ResponseBody
	@RequestMapping(value = "/rate", method = RequestMethod.POST)
	public ChristmasmarketDto rateMarket(@RequestBody RatingDto rating) {
		return this.christmasmarketFacade.rateChristmasMarket(rating);
	}

	@ResponseBody
	@RequestMapping(value = "/rating/{marketId}/user/{userId}", method = RequestMethod.GET)
	public SingleRatingDto getPersonalRating(@PathVariable("marketId") Long marketId,
			@PathVariable("userId") String userId) {
		return this.christmasmarketFacade.findRating(marketId, userId);
	}

}
