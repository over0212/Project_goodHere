package com.goodHere.web.service;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.springframework.stereotype.Service;

@Service
public class PhoneMaskingService {

	// 휴대폰 마스킹
	public String phoneMasking(String phone) {
		String test = "(\\d{2,3})(\\d{3,4})(\\d{4})$";

		Matcher matcher = Pattern.compile(test).matcher(phone);
		if (matcher.find()) {
			String rePlaceTarget = matcher.group(2);
			int length = rePlaceTarget.length();
			String middleNumber = new String();
			for(int i = 0; i < length; i++) {
				middleNumber += "*";
			}
			String changePhone = phone.replace(rePlaceTarget, String.valueOf(middleNumber));
			System.out.println(changePhone);
			return changePhone;
		}
		return phone;
	}
}
