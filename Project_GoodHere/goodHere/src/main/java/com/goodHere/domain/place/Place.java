package com.goodHere.domain.place;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Place {
	
	private int id;
	private String booker;	// 예약자 이름
	
	private Date start_date;	// 입실 날짜
	private Date end_date;	// 퇴실 날짜
	
	private String place_name;	// 장소 이름
	private String address;			// 장소 위치
	private String place_image;	// 장소의 이미지
	
	private int time_price;		// 대실 금액
	private int place_price;	// 숙박 금액
	
	private String check_in_time;	// 입실 시간
	private String check_out_time;	// 퇴실 시간
	
	private Date create_date;
	private Date update_date;

}
