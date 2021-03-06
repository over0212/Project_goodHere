package com.goodHere.web.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import com.goodHere.domain.user.User;
import com.goodHere.domain.user.UserRepository;
import com.goodHere.web.model.reqDto.SignReqDto;
import com.goodHere.web.model.resDto.SignResDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {

	private final UserRepository userRepository;

	@Override
	public SignResDto<?> signUp(SignReqDto signReqDto, BindingResult bindingResult) {
		if (bindingResult.hasErrors()) {
			Map<String, String> errorMap = new HashMap<String, String>();

			for (FieldError error : bindingResult.getFieldErrors()) {
				errorMap.put(error.getField(), error.getDefaultMessage());
			}

			SignResDto<Map<String, String>> signResDto = new SignResDto<Map<String, String>>();
			signResDto.setCode(400);
			signResDto.setData(errorMap);

			return signResDto;

		} else {
			int emailCheckFlag = userRepository.userEmailCheck(signReqDto.getEmail());
			int nicknameCheckFlag = userRepository.userNickNameCheck(signReqDto.getUsername());
			SignResDto<String> signResDto = new SignResDto<String>();

			if (emailCheckFlag == 0) {
				if (nicknameCheckFlag == 0) {
					User userEntity = signReqDto.toEntity();
					userRepository.signUp(userEntity);
					signResDto.setCode(200);
					signResDto.setData("회원가입 성공!");
				} else {
					signResDto.setCode(401);
					signResDto.setData("이미 존재하는 닉네임입니다.");
				}
			} else {
				signResDto.setCode(401);
				signResDto.setData("이미 존재하는 아이디 입니다.");
			}
			return signResDto;
		}
	}
}
