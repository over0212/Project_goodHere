package com.goodHere.domain.place;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface PlaceRepository {
	
	public int motelInsert(Place place);
	
	public Place getPlaceDtl(String place_id);
	
	public Place getPlaceLocationList(String place_id);
	
	public List<PlaceList> getPlaceList();

}
