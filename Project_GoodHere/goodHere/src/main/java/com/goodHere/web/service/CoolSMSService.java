package com.goodHere.web.service;

import java.util.HashMap;
import java.util.Random;

import org.springframework.stereotype.Service;

import com.goodHere.domain.user.UserRepository;

import lombok.RequiredArgsConstructor;
import net.nurigo.java_sdk.api.Message;
import net.nurigo.java_sdk.exceptions.CoolsmsException;

@RequiredArgsConstructor
@Service
public class CoolSMSService {

	private final String API_KEY = "NCS2W4TTYRCVBYM7";
	private final String API_SECRET = "8F7FRPZ5QPWDQQOZZMWRNJIDWFXGVN54";
	private final UserRepository userRepository;

	// 문자로 보낼 코드를 랜덤 함수를 이용해 코드를 생성
	public String createAuthenticationCode() {
		String authenticationCode = "";
		Random randomNumber = new Random();
		int codeLength = 4;

		for (int i = 0; i < codeLength; i++) {
			String randomCode = Integer.toString(randomNumber.nextInt(10));
			authenticationCode += randomCode;
		}
		return authenticationCode;
	}

	// 생성된 코드를 이용해 문자로 보낼 내용의 설정
	public String sendAuthenticationCode(String phone) {
		String authenticationCode = "1";
		int checkNumber = userRepository.userPhoneNumberCheck(phone);
		if(checkNumber == 0) {
			Message coolSMS = new Message(API_KEY, API_SECRET);
			authenticationCode = createAuthenticationCode();
			HashMap<String, String> smsMessage = new HashMap<String, String>();
			smsMessage.put("to", phone); // 누구에게?
			smsMessage.put("from", "01034012679"); // 어떤 번호로 보낼건지?
			smsMessage.put("type", "SMS"); // 어떤 타입으로 문자를 보낼지?
			smsMessage.put("text", "[여기어때] 인증번호 [" + authenticationCode + "] 를 입력해주세요."); // 문자의 내용
			smsMessage.put("app_version", "goodhere app 1.1.12");
			System.out.println(smsMessage);
			
			try {
				coolSMS.send(smsMessage);
			} catch (CoolsmsException e) {
				e.printStackTrace();
			}
			return authenticationCode;
		}
		return authenticationCode;
	}

}
