package com.goodHere.web.model.reqDto;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RoomDataDto {

	private Boolean roomDeleteFlag;
	private Integer place_seq;
	private MultipartFile update_img;
	private String room_condition_img;
	private String room_title;
	private String time_room;
	private String time_price;
	private String dead_line;
	private String availability_time;
	private String select_time_flag; // parseInt 필요
	private String day_room;
	private String day_price;
	private String check_in_time;
	private String check_out_time;
	private String select_day_flag; // parseInt 필요
	
}
