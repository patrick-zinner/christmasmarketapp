package com.patrickzinner.christmasmarketsserver.model;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.PrePersist;
import javax.persistence.PreUpdate;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

@Entity
@Table(name = "christmasmarket")
public class Christmasmarket extends AbstractEntity {

	private static final long serialVersionUID = 1L;

	@Column
	private String name;

	@Column(name = "start_date")
	@Temporal(TemporalType.DATE)
	private Date start;

	@Column(name = "end_date")
	@Temporal(TemporalType.DATE)
	private Date end;

	@Column
	private String postalCode;
	@Column
	private String city;

	@Column
	private String address;

	@Embedded
	private LatLng position;

	@Column
	@Temporal(TemporalType.TIMESTAMP)
	private Date lastUpdate;

	@OneToMany(mappedBy = "market")
	private List<NormalOpeningHours> openingHours = new ArrayList<>();

	@OneToMany(mappedBy = "market")
	private List<ExtraordinaryOpeningHours> extraordinaryOpeningHours = new ArrayList<>();

	@OneToMany(mappedBy = "market")
	private List<MarketRating> ratings = new ArrayList<>();

	public void setName(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public Date getStart() {
		return start;
	}

	public void setStart(Date start) {
		this.start = start;
	}

	public Date getEnd() {
		return end;
	}

	public void setEnd(Date end) {
		this.end = end;
	}

	public String getPostalCode() {
		return postalCode;
	}

	public void setPostalCode(String postalCode) {
		this.postalCode = postalCode;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public LatLng getPosition() {
		return position;
	}

	public void setPosition(LatLng position) {
		this.position = position;
	}

	public List<NormalOpeningHours> getOpeningHours() {
		return openingHours;
	}

	public void setOpeningHours(List<NormalOpeningHours> openingHours) {
		this.openingHours = openingHours;
	}

	public List<ExtraordinaryOpeningHours> getExtraordinaryOpeningHours() {
		return extraordinaryOpeningHours;
	}

	public void setExtraordinaryOpeningHours(List<ExtraordinaryOpeningHours> extraordinaryOpeningHours) {
		this.extraordinaryOpeningHours = extraordinaryOpeningHours;
	}

	public void setRatings(List<MarketRating> ratings) {
		this.ratings = ratings;
	}

	public List<MarketRating> getRatings() {
		return ratings;
	}

	public void setLastUpdate(Date lastUpdate) {
		this.lastUpdate = lastUpdate;
	}
	
	public Date getLastUpdate() {
		return lastUpdate;
	}
	
	@PrePersist
	@PreUpdate
	public void onCreateOrUpdate() {
		this.lastUpdate = new Date();
	}

}
