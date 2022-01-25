package com.goodHere.web.service;

import com.goodHere.config.auth.PrincipalDetails;
import com.goodHere.web.model.reqDto.passwordReqDto;
import com.goodHere.web.model.resDto.PasswordResDto;

public interface SignService {
	
	public String chooseNickName();
	
	public int updateNickName(String email, String username);
	
	public int updateBookerName(String email, String booker);
	
	public int updatePhoneNumber(String email, String phone);
	
	public PasswordResDto updatePassword(PrincipalDetails principalDetails, passwordReqDto passwordReqDto);

}
