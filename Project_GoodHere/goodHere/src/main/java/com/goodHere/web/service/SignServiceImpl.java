package com.goodHere.web.service;

import org.springframework.stereotype.Service;

import com.goodHere.domain.nickname.NickNameRepository;
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

	@Override
	public String updateNickName(String email) {
		int checkFlag = userRepository.changeNickname(email);
		System.out.println(checkFlag);
		if(checkFlag == 0) {
			return chooseNickName();
		}
		return Integer.toString(checkFlag);
	}
}
