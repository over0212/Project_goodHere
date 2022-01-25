package com.goodHere.domain.user;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserRepository {
	
	// 회원정보를 확인
	public User getUser(String email);
	
	// 휴대폰 번호를 조회
	public int userPhoneNumberCheck(String phone);
	
	// 유저의 이메일을 조회
	public int userEmailCheck(String email);
	
	// 유저의 닉네임(username)을 조회
	public int userNickNameCheck(String username);

	// 회원가입
	public int signUp(User user);
	
	// 닉네임 변경
	public int changeNickname(User user);
	
	// 예약자 이름 조회
	public int userBookerNameCheck(String booker);
	
	// 예약자 이름 변경
	public int changeBookerName(User user);
	
	// 휴대폰 번호 변경
	public int changePhoneNumber(User user);
	
	// 회원탈퇴
	public int deleteUser(String email);
}
