package com.patrickzinner.christmasmarketsserver.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.patrickzinner.christmasmarketsserver.model.Christmasmarket;

public interface ChristmasmarketRepository  extends JpaRepository<Christmasmarket, Long>{
	
}
