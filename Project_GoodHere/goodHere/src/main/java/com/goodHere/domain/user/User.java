package com.goodHere.domain.user;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class User {
	
	private int id;
	private String email;
	private String username; // 회원의 닉네임
	private String password;
	private String name;
	private String phone;
	private String booker;	// 예약자 이름
	private String profile_image;
	private String provider;
	private String role;
	
	private Date create_date;
	private Date update_date;

}
