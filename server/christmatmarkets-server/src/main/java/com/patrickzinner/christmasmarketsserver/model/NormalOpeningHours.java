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

@Entity
@Table(name = "normal_opening_hours")
public class NormalOpeningHours extends AbstractOpeningHours {

	private static final long serialVersionUID = 1L;

	@JoinColumn(name="MARKET_ID")
	@ManyToOne(fetch=FetchType.LAZY)
	private Christmasmarket market;

	@Column
	private Integer dayOfWeek;

	public void setDayOfWeek(Integer dayOfWeek) {
		this.dayOfWeek = dayOfWeek;
	}

	public Integer getDayOfWeek() {
		return dayOfWeek;
	}

	public void setMarket(Christmasmarket market) {
		this.market = market;
	}

	public Christmasmarket getMarket() {
		return market;
	}
	
	@PrePersist
	@PreUpdate
	public void onCreateOrUpdate() {
		this.market.setLastUpdate(new Date());
	}

}
