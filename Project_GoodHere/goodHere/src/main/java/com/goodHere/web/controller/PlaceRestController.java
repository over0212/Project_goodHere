package com.goodHere.web.controller;

import javax.validation.Valid;

import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.goodHere.web.model.reqDto.MotelInsertReqDto;
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
			stringBuffer.append("location.href = '/motel-dtl';");
			stringBuffer.append("</script>");
			return stringBuffer.toString();
		} else {
			return "/motel-insert";
		}
	}
	
}
