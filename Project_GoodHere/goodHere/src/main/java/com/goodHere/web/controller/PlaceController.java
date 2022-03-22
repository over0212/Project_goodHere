package com.goodHere.web.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class PlaceController {
	
	@GetMapping("/my-location")
	public String myLocation() {
		return "my-location";
	}
	
	@GetMapping("/insert-place")
	public String insertDetailLocation() {
		return "motel-insert";
	}
	
	@GetMapping("/motel-detail/{place_id}")
	public String motelDetail(Model model, @PathVariable String place_id) {
		model.addAttribute("place_id", place_id);
		return "motel-dtl";
	}
	
	@GetMapping("/update-place/{place_id}")
	public String updatePlace(Model model, @PathVariable String place_id) {
		model.addAttribute("place_id", place_id);
		return "motel-update";
	}
	
}
