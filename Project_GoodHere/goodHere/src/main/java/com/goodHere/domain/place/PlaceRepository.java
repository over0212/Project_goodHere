package com.goodHere.domain.place;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface PlaceRepository {
	
	public int motelInsert(Place place);
	
	public List<PlaceList> getPlaceList();
	
	public List<PlaceEachDetail> getPlaceDtl(int place_id);
	
	public int motelUpdateInfo(Place place);
	
}
