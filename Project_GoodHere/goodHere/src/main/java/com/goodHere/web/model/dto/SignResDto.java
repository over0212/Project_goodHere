package com.goodHere.web.model.dto;

import lombok.Data;

@Data
public class SignResDto<T> {
	
	private int code;
	private T data;

}
