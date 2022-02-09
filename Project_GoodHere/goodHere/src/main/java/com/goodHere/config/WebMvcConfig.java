package com.goodHere.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.resource.PathResourceResolver;

@Configuration
public class WebMvcConfig implements WebMvcConfigurer {
	
	@Value("${file.path}")
	private String filePath;
	
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		WebMvcConfigurer.super.addResourceHandlers(registry);
		registry
		.addResourceHandler("/image/**")
		.addResourceLocations("file:///" + filePath)
		.setCachePeriod(60*60) // 캐시의 유지시간을 설정한다.(60초 * 60 = 1시간)
		.resourceChain(true)
		.addResolver(new PathResourceResolver());
	}
	
	/*
	 *  /image/** --> 이 경로가 ${file.path.profile} 이 경로로 대체가 된다.
	 *  즉, file:///+" + profileFolder 이 경로로 대체된다는 것이다.
	 *  커스터마이징이 가능한 것은 경로와 캐시 유지시간이 있다.
	 */

}
