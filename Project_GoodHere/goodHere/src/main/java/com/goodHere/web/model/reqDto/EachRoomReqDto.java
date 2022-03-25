package com.goodHere.web.model.reqDto;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EachRoomReqDto {

	private List<Boolean> roomDeleteFlag;
	private List<Integer> place_seq;
	private List<MultipartFile> update_img;
	private List<String> room_condition_img;
	private List<String> room_title;
	private List<String> time_room;
	private List<String> time_price;
	private List<String> dead_line;
	private List<String> availability_time;
	private List<String> select_time_flag; // parseInt 필요
	private List<String> day_room;
	private List<String> day_price;
	private List<String> check_in_time;
	private List<String> check_out_time;
	private List<String> select_day_flag; // parseInt 필요
	
}
