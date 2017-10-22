package com.patrickzinner.christmasmarketsserver.rest.dto;

import java.io.Serializable;
import java.util.List;

public class ResultWrapper implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private List<ChristmasmarketDto> results;
	
	public void setResults(List<ChristmasmarketDto> results) {
		this.results = results;
	}
	
	public List<ChristmasmarketDto> getResults() {
		return results;
	}
}
