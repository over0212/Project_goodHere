package com.goodHere.config.auth;

import java.util.Collection;
import java.util.Map;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.goodHere.domain.user.User;

import lombok.Data;

@Data
public class PrincipalDetails implements UserDetails {
	
	private static final long serialVersionUID = 1L;
	
	private User user;
	private Map<String, Object> attributes;
	
	// 일반 로그인 생성자
	public PrincipalDetails(User user) {
		this.user = user;
	}
	// Oauth2 로그인 생성자
	public PrincipalDetails(User user, Map<String, Object> attributes) {
		this.user = user;
		this.attributes = attributes;
	}
	
	// 계정의 비밀번호를 리턴
	@Override
	public String getPassword() {
		return user.getPassword();
	}
	
	// 계정의 고유한 값을 리턴(DB의 Primary Key 값 == 중복이 없는 이메일 값)
	@Override
	public String getUsername() {
		return user.getEmail();
	}
	
	// 계정의 만료 여부 리턴(true -> 만료가 되지 않는다)
	@Override
	public boolean isAccountNonExpired() {
		return true;
	}
	
	// 계정의 잠김 여부 리턴(true -> 잠기지 않는다)
	@Override
	public boolean isAccountNonLocked() {
		return true;
	}
	
	// 비밀번호 만료 여부 리턴(true -> 만료되지 않는다)
	@Override
	public boolean isCredentialsNonExpired() {
		return true;
	}
	
	// 계정의 활성화 여부 리턴(true -> 활성화가 된다)
	@Override
	public boolean isEnabled() {
		return true;
	}
	
	// 계정의 권한 목록을 리턴
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		return null;
	}

}
