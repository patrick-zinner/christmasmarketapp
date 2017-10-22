package com.patrickzinner.christmasmarketsserver.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.patrickzinner.christmasmarketsserver.facade.ChristmasmarketFacade;
import com.patrickzinner.christmasmarketsserver.rest.dto.ChristmasmarketDto;
import com.patrickzinner.christmasmarketsserver.rest.dto.ResultWrapper;

@RestController
@RequestMapping("christmasmarkets")
public class ChristmasmarketController {

	@Autowired
	private ChristmasmarketFacade christmasmarketFacade;

	@RequestMapping(value = "/", method = RequestMethod.GET)
	@ResponseBody
	ResultWrapper getAllChristmasmarkets() {
		ResultWrapper result = new ResultWrapper();
		List<ChristmasmarketDto> markets =  this.christmasmarketFacade.findAll();
		result.setResults(markets);
		return result;
		
	}

}
