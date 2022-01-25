package com.goodHere.web.model.reqDto;

import javax.validation.constraints.NotBlank;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.goodHere.domain.user.User;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class SignReqDto {
	
	@NotBlank
	private String email;
	@NotBlank
	private String password;
	@NotBlank
	private String username;
	@NotBlank
	private String phone;
	
	public User toEntity() {
		return User.builder()
				.email(email)
				.password(new BCryptPasswordEncoder().encode(password))
				.username(username)
				.phone(phone)
				.role("ROLE_USER")
				.build();
	}
}
