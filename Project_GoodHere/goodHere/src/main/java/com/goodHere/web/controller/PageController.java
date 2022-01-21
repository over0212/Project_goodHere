package com.goodHere.web.controller;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;

import com.goodHere.config.auth.PrincipalDetails;
import com.goodHere.web.service.PhoneMaskingService;
import com.goodHere.web.service.SignService;
import com.goodHere.web.service.UserServiceImpl;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class PageController {
	
	private final PhoneMaskingService phoneMaskingService;

	@GetMapping({ "/", "/index" })
	public String index(@AuthenticationPrincipal PrincipalDetails principalDetails) {
		return "index";
	}

	@GetMapping("/login")
	public String loginPage() {
		return "sign-in";
	}

	@GetMapping("/user/join")
	public String phoneCheck() {
		return "phone-check";
	}
	
	// 인증버튼이 클릭 되었을 때 
	@GetMapping("/user/sign-up")
	public String signUpForm(Model model, @PathVariable @RequestParam String phone) {
		model.addAttribute("phone", phone);
		return "sign-up";
	}
	
	@GetMapping("/user/info")
	public String userInfo(@AuthenticationPrincipal PrincipalDetails principalDetails) {
		principalDetails.getUser().setPhone(phoneMaskingService.phoneMasking(principalDetails.getUser().getPhone()));
		return "user-info";
	}
	
	@GetMapping("/user/password")
	public String userPassword(@AuthenticationPrincipal PrincipalDetails principalDetails) {
		return "change-pwd";
	}

}
