package com.goodHere.web.model.resDto;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.goodHere.domain.place.Place;
import com.goodHere.domain.place.PlaceDetail;

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
	private int place_id;
	private String place_name;
	private String place_address;
	private List<String> benefit_detail;
	private List<String> event_msg;
	// img_mst
	private List<String> place_img;
	// dtl
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
