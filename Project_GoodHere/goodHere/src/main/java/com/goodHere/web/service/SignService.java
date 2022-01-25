package com.goodHere.web.service;

public interface SignService {
	
	public String chooseNickName();
	
	public int updateNickName(String email, String username);
	
	public int updateBookerName(String email, String booker);
	
	public int updatePhoneNumber(String email, String phone);

}
