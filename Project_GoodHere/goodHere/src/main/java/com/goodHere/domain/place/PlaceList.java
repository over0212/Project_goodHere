package com.goodHere.domain.place;

import com.goodHere.web.model.resDto.PlaceListResDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PlaceList {
	
	private int place_id;
	private String place_name;
	private String place_address;
	private String benefit_detail;
	private String event_msg;
	private String place_img;
	private String time_room;
	private String time_price;
	private String availability_time;
	private String day_room;
	private String day_price;
	private String check_in_time;
	
	public PlaceListResDto toPlaceResDto() {
		return PlaceListResDto.builder()
				.place_id(place_id)
				.place_name(place_name)
				.place_address(place_address)
				.place_img(place_img)
				.time_room(time_room)
				.time_price(time_price)
				.availability_time(availability_time)
				.day_room(day_room)
				.day_price(day_price)
				.check_in_time(check_in_time)
				.build();
	}
	
}
