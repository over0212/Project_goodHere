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
	
	private PlaceService placeService;
	
	@PostMapping("/motel-insert")
	public int MotelInsert(@Valid MotelInsertReqDto motelInsertReqDto, BindingResult result) {
		System.out.println(motelInsertReqDto);
		placeService.motelInsert(motelInsertReqDto);
		return 1;
	}
}
