package com.goodHere.domain.place;

import java.util.Date;
import java.util.List;

import com.goodHere.web.model.resDto.PlaceDtlResDto;
import com.goodHere.web.model.resDto.PlaceListResDto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Place {
	
	// place_mst
	private int place_id;
	private String place_name;
	private String place_address;
	private String benefit_detail;
	private String event_msg;
	// place_img_mst
	private List<String> place_img;
	// place_dtl
	private List<PlaceDetail> place_dtl;
	private Date update_date;
	private Date create_date;
	
	public PlaceDetail toPlaceDetail() {
		return PlaceDetail.builder().build();
	}
	
	public PlaceListResDto toPlaceListEntity() {
		return PlaceListResDto.builder()
				.place_id(place_id)
				.place_name(place_name)
				.place_address(place_address)
				.build();
	}

}
