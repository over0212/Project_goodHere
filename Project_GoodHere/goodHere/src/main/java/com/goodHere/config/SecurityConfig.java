package com.goodHere.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import lombok.RequiredArgsConstructor;

@Configuration // IoC 등록을 한다.
@EnableWebSecurity
@RequiredArgsConstructor
public class SecurityConfig extends WebSecurityConfigurerAdapter{
	
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		
		http.csrf().disable(); // 토큰 생성 X
		http.authorizeRequests() // 사용자의 인증객체
				.antMatchers("/user/info", "/user/password") // 해당 페이지들은 인증이 필요하다.
				.authenticated() // 다른 Request의 요청들은
				.anyRequest() // 모든 권한이 부여되어 요청이 없어도 된다.
				.permitAll()
				.and()
				.logout()
				.logoutUrl("/logout")
				.logoutSuccessUrl("/")
				.invalidateHttpSession(true)
				.deleteCookies("JSESSIONID")
				.and()
				.formLogin()
				.loginPage("/login")
				.loginProcessingUrl("/sign-in")
				.defaultSuccessUrl("/");
//				.and()
//				.oauth2Login()
//				.loginPage("/login")
//				.userInfoEndpoint()
//				.userService()
//				.and()
//				.d
		
	}
	
	@Bean
	PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

}
