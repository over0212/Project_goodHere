package com.goodHere.web.service;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
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
	public List<String> fileUpload(String placeName, List<MultipartFile> multipartFiles) {
		List<String> arrFiles = new ArrayList<String>();
		
		for (MultipartFile multipartFile : multipartFiles) {
			String imageFileName = multipartFile.getOriginalFilename();
			String originFileExtension = imageFileName.substring(imageFileName.lastIndexOf("."));
			String imageName = UUID.randomUUID().toString().replaceAll("-", "") + originFileExtension;
			String imageFilePath = filePath + placeName + "/";
			
			File file = new File(imageFilePath, imageName);
			if(!file.exists()) {
				file.mkdirs();
			}
			try {
				multipartFile.transferTo(file);
			} catch (IllegalStateException | IOException e) {
				e.printStackTrace();
			}
			arrFiles.add(multipartFile.toString());
		}
		return arrFiles;
	}
	
//	public String makeString(String[] item) {
//		List<String> items = Arrays.asList(item);
//		StringBuilder sb = new StringBuilder();
//		for (String str : items) {
//			sb.append(str);
//			sb.append(",");
//		}
//		sb.delete(sb.length() - 1, sb.length());
//		return sb.toString();
//	}

	@Override
	public int motelInsert(MotelInsertReqDto motelInsertReqDto) {
		Place place = motelInsertReqDto.toEntity();
		
		// benefit_detail
		StringBuilder sbBenefit = new StringBuilder();
		for (String str : motelInsertReqDto.getBenefit_detail()) {
			sbBenefit.append(str);
			sbBenefit.append(",");
		}
		sbBenefit.delete(sbBenefit.length() - 1, sbBenefit.length());
		place.setBenefit_detail(sbBenefit.toString());
		
		// event_msg
		StringBuilder sbEvent = new StringBuilder();
		for (String str : motelInsertReqDto.getEvent_msg()) {
			sbEvent.append(str);
			sbEvent.append(",");
		}
		sbEvent.delete(sbEvent.length() - 1, sbEvent.length());
		place.setEvent_msg(sbEvent.toString());
		
		// place_img
		List<String> fileName = fileUpload(motelInsertReqDto.getPlace_name(), motelInsertReqDto.getPlace_img());
		for (String str : fileName) {
			List<String> tempName = new ArrayList<String>();
			
		}
		return 1;
	}

}
