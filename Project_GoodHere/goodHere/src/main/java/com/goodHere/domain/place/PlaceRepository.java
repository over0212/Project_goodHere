package com.goodHere.domain.place;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface PlaceRepository {
	
	public int motelInsert(Place place);

}
