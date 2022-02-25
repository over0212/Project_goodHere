package com.goodHere.web.controller;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class PlaceController {
	
	@GetMapping("/motel-dtl/{place_id}")
	public String motelDetail(@PathVariable String place_id, @Valid String place_name) {
		return "motel-dtl";
	}
	

}
