package com.goodHere.web.controller;

import javax.validation.Valid;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.goodHere.config.auth.PrincipalDetails;
import com.goodHere.web.model.dto.SignReqDto;
import com.goodHere.web.service.AuthService;
import com.goodHere.web.service.PhoneMaskingService;
import com.goodHere.web.service.SignService;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@RestController
public class SignRestController {
	
	private final SignService signService;
	private final AuthService authService;
	private final PhoneMaskingService phoneMaskingService;
	
	@GetMapping("/choose/nickname")
	public String chooseNickName() {
		return signService.chooseNickName();
	}
	
	@PostMapping("/user/sign-up")
	public Object signUpForm(@Valid @RequestBody SignReqDto signReqDto, BindingResult bindingResult) {
		return authService.signUp(signReqDto, bindingResult);
	}
	
	@PatchMapping("/change/nickname")
	public int changeNickname(@AuthenticationPrincipal PrincipalDetails principalDetails, @RequestBody String username) {
		username = username.replaceAll("\\\"", "");
		principalDetails.getUser().setUsername(username);
		return signService.updateNickName(principalDetails.getUser().getEmail(), username);
	}
	
	@PatchMapping("/change/booker")
	public int changeBookerName(@AuthenticationPrincipal PrincipalDetails principalDetails, @RequestBody String booker) {
		booker = booker.replaceAll("\\\"", "");
		principalDetails.getUser().setBooker(booker);
		return signService.updateBookerName(principalDetails.getUser().getEmail(), booker);
	}
	
	@PatchMapping("/change/phone")
	public int changePhoneNumber(@AuthenticationPrincipal PrincipalDetails principalDetails, @RequestBody String phone) {
		phone = phone.replaceAll("\\\"", "");
		principalDetails.getUser().setPhone(phoneMaskingService.phoneMasking(phone));
		return signService.updatePhoneNumber(principalDetails.getUser().getEmail(), phone);
	}

}
