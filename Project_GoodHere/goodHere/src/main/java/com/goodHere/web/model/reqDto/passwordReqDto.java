package com.goodHere.web.model.reqDto;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.goodHere.domain.user.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class passwordReqDto {
	
	private String originPassword;
	private String newPassword;
	
	public User toEntity(String email) {
		return User.builder()
				.email(email)
				.password(new BCryptPasswordEncoder().encode(newPassword))
				.build();
	}

}
