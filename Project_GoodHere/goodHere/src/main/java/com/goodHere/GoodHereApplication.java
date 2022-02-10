package com.goodHere;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class GoodHereApplication extends SpringBootServletInitializer{

	public static void main(String[] args) {
		SpringApplication.run(GoodHereApplication.class, args);
	}

	// AWS에 배포하기 위해 필요한 설정
	// (tomcat lib 추가 후 extends SpringBootServletInitializer 해주고 해당 applicationClass 를 추가해준다.)
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(GoodHereApplication.class);
	}
	
}
