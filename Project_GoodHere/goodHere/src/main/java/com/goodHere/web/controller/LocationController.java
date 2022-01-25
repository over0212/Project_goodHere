package com.goodHere.web.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import com.goodHere.config.auth.PrincipalDetails;

@Controller
//@RequiredArgsConstructor
public class LocationController {
	
	@GetMapping("/my-location")
	public String myLocation(@AuthenticationPrincipal PrincipalDetails principalDetails) {
		return "my-location";
	}
	

}
