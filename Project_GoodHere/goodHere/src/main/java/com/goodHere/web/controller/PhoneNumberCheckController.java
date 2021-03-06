package com.goodHere.web.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.goodHere.web.service.CoolSMSService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class PhoneNumberCheckController {
	
	private final CoolSMSService coolSMSService;
	
	@GetMapping("/check/sendSMS")
	public String sendSMS(String phone) {
		String authenticationCode = null;
		authenticationCode = coolSMSService.sendAuthenticationCode(phone);
		return authenticationCode;
	}

	
}
