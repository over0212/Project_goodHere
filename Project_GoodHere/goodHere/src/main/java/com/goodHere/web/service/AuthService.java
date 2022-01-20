package com.goodHere.web.service;

import org.springframework.validation.BindingResult;

import com.goodHere.web.model.dto.SignReqDto;
import com.goodHere.web.model.dto.SignResDto;

public interface AuthService {
		
	public SignResDto<?> signUp(SignReqDto signReqDto, BindingResult bindingResult);

}
