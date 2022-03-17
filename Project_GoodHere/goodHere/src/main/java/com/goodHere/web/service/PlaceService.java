package com.goodHere.web.service;

import java.util.List;

import com.goodHere.web.model.reqDto.MotelInsertReqDto;
import com.goodHere.web.model.resDto.PlaceDtlResDto;
import com.goodHere.web.model.resDto.PlaceListResDto;

public interface PlaceService {
	
	public int motelInsert(MotelInsertReqDto motelInsertReqDto);
	
	public List<PlaceListResDto> getPlaceList();
	
	public PlaceDtlResDto getDtlPlace(int place_id);
	
}
