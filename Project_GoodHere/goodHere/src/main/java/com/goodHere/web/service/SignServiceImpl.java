package com.goodHere.web.service;

import org.springframework.stereotype.Service;

import com.goodHere.domain.nickname.NickNameRepository;
import com.goodHere.domain.user.User;
import com.goodHere.domain.user.UserRepository;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class SignServiceImpl implements SignService{
	
	private final NickNameRepository nickNameRepository;
	private final UserRepository userRepository;
	
	@Override
	public String chooseNickName() {
		return nickNameRepository.chooseNickName().toString();
	}
	
	// 닉네임
	@Override
	public int updateNickName(String email, String username) {
		User user = User.builder()
				.email(email)
				.username(username)
				.build();
		int checkFlag = userRepository.userNickNameCheck(username);
		int resultFlag = userRepository.changeNickname(user);
		if(checkFlag == 0) {
			return resultFlag;
		}
		return 2;
	}
	
	// 예약자
	@Override
	public int updateBookerName(String email, String booker) {
		User user = User.builder()
				.email(email)
				.booker(booker)
				.build();
		int checkFlag = userRepository.userBookerNameCheck(booker);
		int resultFlag = userRepository.changeBookerName(user);
		if(checkFlag == 0) {
			return resultFlag;
		}
		return 2;
	}
	
	// 폰번호
	@Override
	public int updatePhoneNumber(String email, String phone) {
		User user = User.builder()
				.email(email)
				.phone(phone)
				.build();
		return userRepository.changePhoneNumber(user);
	}
}
