package com.goodHere.web.service;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Iterator;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.goodHere.domain.place.Place;
import com.goodHere.domain.place.PlaceDetail;
import com.goodHere.domain.place.PlaceRepository;
import com.goodHere.web.model.reqDto.MotelInsertReqDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PlaceServiceImpl implements PlaceService {

	private final PlaceRepository placeRepository;

	@Value("${file.path}")
	private String filePath;

	// 이미지 반복 리스트
	public List<String> filesUpload(String placeName, List<MultipartFile> multipartFiles) {
		List<String> arrFiles = new ArrayList<String>();
		
		for (MultipartFile multipartFile : multipartFiles) {
			String imageFileName = multipartFile.getOriginalFilename();
			String originFileExtension = imageFileName.substring(imageFileName.lastIndexOf("."));
			String imageName = UUID.randomUUID().toString().replaceAll("-", "") + originFileExtension;
			String imageFilePath = filePath + placeName + "/";
			String insertFileName = placeName + "/" + imageName;
			
			File file = new File(imageFilePath, imageName);
			if(!file.exists()) {
				file.mkdirs();
			}
			try {
				multipartFile.transferTo(file);
			} catch (IllegalStateException | IOException e) {
				e.printStackTrace();
			}
			arrFiles.add(insertFileName);
			System.out.println(arrFiles);
		}
		return arrFiles;
	}
	
	public String fileUpload(String placeName, MultipartFile multipartFile) {
		String imageFileName = multipartFile.getOriginalFilename();
		String originFileExtension = imageFileName.substring(imageFileName.lastIndexOf("."));
		String imageName = UUID.randomUUID().toString().replaceAll("-", "") + originFileExtension;
		String imageFilePath = filePath + placeName + "/";
		String insertFileName = placeName + "/" + imageName;
		
		File file = new File(imageFilePath, imageName);
		if(!file.exists()) {
			file.mkdirs();
		}
		try {
			multipartFile.transferTo(file);
		} catch (IllegalStateException | IOException e) {
			e.printStackTrace();
		}
		return insertFileName;
	}

	// StringBuilder
	public String makeString(List<String> item) {
		StringBuilder sb = new StringBuilder();
		for (String str : item) {
			sb.append(str);
			sb.append(",");
		}
		sb.delete(sb.length() - 1, sb.length());
		return sb.toString();
	}

	@Override
	public int motelInsert(MotelInsertReqDto motelInsertReqDto) {
		System.out.println(motelInsertReqDto);
		Place place = motelInsertReqDto.toEntity();
		// benefit_detail
		place.setBenefit_detail(makeString(motelInsertReqDto.getBenefit_detail()));
		// event_msg
		place.setEvent_msg(makeString(motelInsertReqDto.getEvent_msg()));
		// place_img
		place.setPlace_img(filesUpload(motelInsertReqDto.getPlace_name(), motelInsertReqDto.getPlace_img()));
		
		// place_dtl
		List<PlaceDetail> placeDetails = new ArrayList<PlaceDetail>();
		for(int i = 0; i < motelInsertReqDto.getRoom_title().size(); i++) {
			PlaceDetail placeDetail = place.toPlaceDetail();
			placeDetail.setRoom_condition_img(fileUpload(motelInsertReqDto.getPlace_name(), motelInsertReqDto.getRoom_condition_img().get(i)));
			System.out.println(placeDetail.getRoom_condition_img());
			placeDetail.setRoom_title(motelInsertReqDto.getRoom_title().get(i));
			placeDetail.setTime_room(motelInsertReqDto.getTime_room().get(i));
			placeDetail.setTime_price(motelInsertReqDto.getTime_price().get(i));
			placeDetail.setDead_line(motelInsertReqDto.getDead_line().get(i));
			placeDetail.setAvailability_time(motelInsertReqDto.getAvailability_time().get(i));
			placeDetail.setSelect_time_flag(motelInsertReqDto.getSelect_time_flag().get(i));
			placeDetail.setDay_room(motelInsertReqDto.getDay_room().get(i));
			placeDetail.setDay_price(motelInsertReqDto.getDay_price().get(i));
			placeDetail.setCheck_in_time(motelInsertReqDto.getCheck_in_time().get(i));
			placeDetail.setCheck_out_time(motelInsertReqDto.getCheck_out_time().get(i));
			placeDetail.setSelect_day_flag(motelInsertReqDto.getSelect_day_flag().get(i));
			placeDetails.add(placeDetail);
		}
		place.setPlace_dtl(placeDetails);
		System.out.println(placeDetails);
		return placeRepository.motelInsert(place);
	}

}
