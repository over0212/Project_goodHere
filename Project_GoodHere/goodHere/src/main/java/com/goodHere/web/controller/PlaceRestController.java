package com.goodHere.web.controller;

import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.apache.commons.collections.map.HashedMap;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.goodHere.web.model.reqDto.MotelInsertReqDto;
import com.goodHere.web.model.reqDto.MotelUpdateInfoReqDto;
import com.goodHere.web.model.resDto.PlaceDtlResDto;
import com.goodHere.web.model.resDto.PlaceListResDto;
import com.goodHere.web.service.PlaceService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class PlaceRestController {
	
	private final PlaceService placeService;
	
	@PostMapping("/motel-insert")
	public String MotelInsert(@Valid MotelInsertReqDto motelInsertReqDto, BindingResult result) {
		int flag = placeService.motelInsert(motelInsertReqDto);
		if(flag == 1) {
			StringBuffer stringBuffer = new StringBuffer();
			stringBuffer.append("<script>");
			stringBuffer.append("location.href = '/index'");
			stringBuffer.append("</script>");
			return stringBuffer.toString();
		}
		return Integer.toString(flag);
	}
	
	// my-location의 list data 전부 호출
	@GetMapping("/motel-list")
	public Object motelList() {
		Map<String, List<PlaceListResDto>> map = new HashedMap();
		map.put("motelList", placeService.getPlaceList());
		System.out.println(map);
		return map;
	}
	
	@GetMapping("/motel-dtl/{place_id}")
	public Object motelDtl(@PathVariable int place_id) {
		Map<String, PlaceDtlResDto> map = new HashedMap();
		map.put("motelDtl", placeService.getDtlPlace(place_id));
		return map;
	}
	
	@PutMapping("/motel/info/{place_id}")
	public int updateMotelInfo(@RequestBody MotelUpdateInfoReqDto infoReqDto, @PathVariable int place_id) {
		System.out.println(infoReqDto);
		System.out.println("place_id : " + place_id);
		int flag = placeService.motelUpdateInfo(infoReqDto, place_id);
		System.out.println("flag : " + flag);
		return flag;
	}
	
}
