package com.goodHere.web.model.reqDto;

import java.util.List;

import com.goodHere.domain.place.Place;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MotelUpdateInfoReqDto {
	
	private String place_name;
	private String place_address;
	private List<String> benefit_detail;
	private List<String> event_msg;
	
	public Place placeUpdateToEntity() {
		return Place.builder()
				.place_name(place_name)
				.place_address(place_address)
				.build();
	}
}
