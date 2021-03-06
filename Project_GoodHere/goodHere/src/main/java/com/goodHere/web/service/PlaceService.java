package com.goodHere.web.service;

import java.util.List;

import com.goodHere.web.model.reqDto.EachRoomReqDto;
import com.goodHere.web.model.reqDto.MotelInsertReqDto;
import com.goodHere.web.model.reqDto.MotelUpdateImgReqDto;
import com.goodHere.web.model.reqDto.MotelUpdateInfoReqDto;
import com.goodHere.web.model.resDto.PlaceDtlResDto;
import com.goodHere.web.model.resDto.PlaceListResDto;

public interface PlaceService {
	
	public int motelInsert(MotelInsertReqDto motelInsertReqDto);
	
	public List<PlaceListResDto> getPlaceList();
	
	public PlaceDtlResDto getDtlPlace(int place_id);
	
	public int motelUpdateInfo(MotelUpdateInfoReqDto infoReqDto, int place_id);
	
	public int motelUpdateImg(MotelUpdateImgReqDto imgReqDto, int place_id);
	
	public int motelRoomUpdate(EachRoomReqDto eachRoomReqDto, int place_id);
	
}
