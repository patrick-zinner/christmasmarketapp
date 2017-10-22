package com.patrickzinner.christmasmarketsserver.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "extraordinary_opening_hours")
public class ExtraordinaryOpeningHours extends AbstractOpeningHours {

	private static final long serialVersionUID = 1L;
	
	@JoinColumn(name="MARKET_ID")
	@ManyToOne(fetch=FetchType.LAZY)
	private Christmasmarket market;

	@Column
	@Temporal(TemporalType.DATE)
	private Date date;

	public void setDate(Date date) {
		this.date = date;
	}

	public Date getDate() {
		return date;
	}
	
	public void setMarket(Christmasmarket market) {
		this.market = market;
	}
	
	public Christmasmarket getMarket() {
		return market;
	}

}
