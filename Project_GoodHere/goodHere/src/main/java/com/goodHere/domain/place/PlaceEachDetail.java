package com.goodHere.domain.place;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class PlaceEachDetail {
	
	// place_mst
	private int place_id;
	private String place_name;
	private String place_address;
	private String benefit_detail;
	private String event_msg;
	// place_img_mst
	private String place_img;
	// place_dtl
	private int place_seq;
	private String room_condition_img;
	private String room_title;
	private String time_room;
	private String time_price;
	private String dead_line;
	private String availability_time;
	private int select_time_flag;
	private String day_room;
	private String day_price;
	private String check_in_time;
	private String check_out_time;
	private int select_day_flag;

}
