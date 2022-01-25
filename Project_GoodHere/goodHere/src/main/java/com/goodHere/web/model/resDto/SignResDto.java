package com.goodHere.web.model.resDto;

import lombok.Data;

@Data
public class SignResDto<T> {
	
	private int code;
	private T data;

}
