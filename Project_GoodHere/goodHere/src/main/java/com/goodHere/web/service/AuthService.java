package com.goodHere.web.service;

import org.springframework.validation.BindingResult;

import com.goodHere.web.model.reqDto.SignReqDto;
import com.goodHere.web.model.resDto.SignResDto;

public interface AuthService {
		
	public SignResDto<?> signUp(SignReqDto signReqDto, BindingResult bindingResult);

}
