package com.patrickzinner.christmasmarketsserver.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.patrickzinner.christmasmarketsserver.model.Christmasmarket;

public interface ChristmasmarketRepository  extends JpaRepository<Christmasmarket, Long>{
	
	public List<Christmasmarket> findByLastUpdateAfter(Date date);
	
}
