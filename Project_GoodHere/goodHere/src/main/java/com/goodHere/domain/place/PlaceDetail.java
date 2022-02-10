package com.goodHere.domain.place;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PlaceDetail {
	
	private List<String> room_condition_img;
	private List<String> room_title;
	private List<String> time_room;
	private List<String> time_price;
	private List<String> dead_line;
	private List<String> availability_time;
	private List<Integer> select_time_flag;
	private List<String> day_room;
	private List<String> day_price;
	private List<String> check_in_time;
	private List<String> check_out_time;
	private List<Integer> select_day_flag;

}
