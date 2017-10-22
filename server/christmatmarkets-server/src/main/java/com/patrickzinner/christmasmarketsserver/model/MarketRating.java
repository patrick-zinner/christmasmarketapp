package com.patrickzinner.christmasmarketsserver.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "market_rating")
public class MarketRating extends AbstractEntity {

	private static final long serialVersionUID = 1L;

	@JoinColumn(name = "MARKET_ID")
	@ManyToOne(fetch = FetchType.LAZY)
	private Christmasmarket market;

	@Column
	@NotNull
	private Integer normalRating;

	@Column
	@NotNull
	private Integer priceRating;

	public Integer getNormalRating() {
		return normalRating;
	}

	public void setNormalRating(Integer normalRating) {
		this.normalRating = normalRating;
	}

	public Integer getPriceRating() {
		return priceRating;
	}

	public void setPriceRating(Integer priceRating) {
		this.priceRating = priceRating;
	}
	
	public void setMarket(Christmasmarket market) {
		this.market = market;
	}
	
	public Christmasmarket getMarket() {
		return market;
	}

}
