package com.goodHere.web.model.reqDto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MotelUpdateRoomReqDto {
	
	private List<ReqEachRoom> reqEachRooms;
	
}
