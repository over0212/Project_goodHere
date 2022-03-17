package com.goodHere.web.model.resDto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PlaceDtlResDto {
	
	// mst
	private String place_name;
	private String place_address;
	private List<String> benefit_detail;
	private List<String> event_msg;
	// img_mst
	private List<String> place_img;
	// dtl
	private List<EachRoom> eachRoomDetail;

}
