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
public class PlaceListResDto {
	
	private int place_id;
	private String place_name;
	private String place_address;
	private List<String> benefit_detail;
	private List<String> event_msg;
	private String place_img;
	private String time_room;
	private String time_price;
	private String availability_time;
	private String day_room;
	private String day_price;
	private String check_in_time;
	
}
