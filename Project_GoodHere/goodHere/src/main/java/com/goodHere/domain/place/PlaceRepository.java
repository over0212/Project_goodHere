package com.goodHere.domain.place;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface PlaceRepository {
	
	public int motelInsert(Place place);
	
	public List<PlaceList> getPlaceList();
	
	public List<PlaceEachDetail> getPlaceDtl(int place_id);
	
	// 숙소의 데이터 수정
	public int motelUpdateInfo(Place place);
	
	// 숙소 전경(전체 사진 또는 큰사진)
	public int deleteByPlaceImg(int place_id);
	
	public int insertByPlaceImg(Place place);
	
	public int deletePlaceData(int place_id);
	
	// room data
	public int updateRoomData(Place place);
	
	public int insertRoomData(Place place);
	
	public int deleteRoomData(Place place);
	
	public String getRoomImgForDelete(int place_seq);
	
}