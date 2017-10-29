package com.patrickzinner.christmasmarketsserver.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
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

	@Column
	@NotNull
	private String userId;

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

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getUserId() {
		return userId;
	}

	@PrePersist
	@PreUpdate
	public void onCreateOrUpdate() {
		this.market.setLastUpdate(new Date());
	}

}
