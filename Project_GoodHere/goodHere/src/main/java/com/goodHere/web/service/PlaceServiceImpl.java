package com.goodHere.web.service;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Collection;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Set;
import java.util.StringTokenizer;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.goodHere.domain.place.Place;
import com.goodHere.domain.place.PlaceDetail;
import com.goodHere.domain.place.PlaceEachDetail;
import com.goodHere.domain.place.PlaceList;
import com.goodHere.domain.place.PlaceRepository;
import com.goodHere.web.model.reqDto.MotelInsertReqDto;
import com.goodHere.web.model.reqDto.MotelUpdateInfoReqDto;
import com.goodHere.web.model.resDto.EachRoom;
import com.goodHere.web.model.resDto.PlaceDtlResDto;
import com.goodHere.web.model.resDto.PlaceListResDto;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PlaceServiceImpl implements PlaceService {

	private final PlaceRepository placeRepository;

	@Value("${file.path}")
	private String filePath;

	// 이미지 반복 리스트
	public List<String> filesUpload(List<MultipartFile> multipartFiles) {
		List<String> arrFiles = new ArrayList<String>();

		for (MultipartFile multipartFile : multipartFiles) {
			String imageFileName = multipartFile.getOriginalFilename();
			String originFileExtension = imageFileName.substring(imageFileName.lastIndexOf("."));
			String imageName = UUID.randomUUID().toString().replaceAll("-", "") + originFileExtension;
			String imageFilePath = filePath  + "/";
			String insertFileName =  imageName;

			File file = new File(imageFilePath, imageName);
			if (!file.exists()) {
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

	public String fileUpload(MultipartFile multipartFile) {
		String imageFileName = multipartFile.getOriginalFilename();
		String originFileExtension = imageFileName.substring(imageFileName.lastIndexOf("."));
		String imageName = UUID.randomUUID().toString().replaceAll("-", "") + originFileExtension;
		String imageFilePath = filePath +  "/";
		String insertFileName = imageName;

		File file = new File(imageFilePath, imageName);
		if (!file.exists()) {
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

	// motel data insert
	@Override
	public int motelInsert(MotelInsertReqDto motelInsertReqDto) {
		Place place = motelInsertReqDto.toEntity();
		// benefit_detail
		place.setBenefit_detail(makeString(motelInsertReqDto.getBenefit_detail()));
		// event_msg
		place.setEvent_msg(makeString(motelInsertReqDto.getEvent_msg()));
		// place_img
		place.setPlace_img(filesUpload(motelInsertReqDto.getPlace_img()));

		// place_dtl
		List<PlaceDetail> placeDetails = new ArrayList<PlaceDetail>();
		for (int i = 0; i < motelInsertReqDto.getRoom_title().size(); i++) {
			PlaceDetail placeDetail = place.toPlaceDetail();
			placeDetail.setRoom_condition_img(
					fileUpload(motelInsertReqDto.getRoom_condition_img().get(i)));
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
		return placeRepository.motelInsert(place);
	}

	public List<String> placeSubString(String data) {
		StringTokenizer st = new StringTokenizer(data, ",");
		List<String> infoMsg = new ArrayList<String>();
		while (st.hasMoreTokens()) {
			infoMsg.add(st.nextToken());
		}
		return infoMsg;
	}
	

	// my location list 호출
	@Override
	public List<PlaceListResDto> getPlaceList() {
		List<PlaceList> placeLists = placeRepository.getPlaceList();
		List<PlaceListResDto> placeListResDtos = new ArrayList<PlaceListResDto>();
		for (PlaceList placeList : placeLists) {
			PlaceListResDto placeListResDto = placeList.toPlaceResDto();
			placeListResDto.setPlace_img(placeList.getPlace_img());
			placeListResDto.setBenefit_detail(placeSubString(placeList.getBenefit_detail()));
			placeListResDto.setEvent_msg(placeSubString(placeList.getEvent_msg()));

			placeListResDtos.add(placeListResDto);
		}
		return placeListResDtos;
	}
	
	// motel-detail 정보 들고오기
	@Override
	public PlaceDtlResDto getDtlPlace(int place_id) {
		List<PlaceEachDetail> eachDetailList = placeRepository.getPlaceDtl(place_id);
		PlaceDtlResDto placeDtlResDto = new PlaceDtlResDto();
		
		// set을 통해 데이터를 하나씩 가져온다.
		Set<Integer> seq_id = new HashSet<Integer>();
		Set<String> name = new HashSet<String>();
		Set<String> address = new HashSet<String>();
		Set<String> benefit = new HashSet<String>();
		Set<String> msg = new HashSet<String>();
		
		Set<String> detailImg = new HashSet<String>();
		Set<EachRoom> roomDtl = new HashSet<EachRoom>();
		
		/**
		 * List로 들고온 PlaceEachDetail을 set으로 선언해 놓은 데이터를 하나씩 넣어주고
		 * EachRoom 의 데이터는 테이블에 자동으로 생성되는 아이디 값을 가져온다.
		 */
		for(PlaceEachDetail detail : eachDetailList) {
			name.add(detail.getPlace_name());
			address.add(detail.getPlace_address());
			benefit.add(detail.getBenefit_detail());
			msg.add(detail.getEvent_msg());
			detailImg.add(detail.getPlace_img());

			// seq_id가 하나라도 들어왔을 때
			if(seq_id.add(detail.getPlace_seq())) {
				EachRoom room = new EachRoom();
				room.setRoom_condition_img(detail.getRoom_condition_img());
				room.setRoom_title(detail.getRoom_title());
				room.setTime_room(detail.getTime_room());
				room.setTime_price(detail.getTime_price());
				room.setDead_line(detail.getDead_line());
				room.setAvailability_time(detail.getAvailability_time());
				room.setSelect_time_flag(detail.getSelect_time_flag());
				room.setDay_room(detail.getDay_room());
				room.setDay_price(detail.getDay_price());
				room.setCheck_in_time(detail.getCheck_in_time());
				room.setCheck_out_time(detail.getCheck_out_time());
				room.setSelect_day_flag(detail.getSelect_day_flag());
				roomDtl.add(room);
			} // end of if
		} // end of for
		
		placeDtlResDto.setPlace_name(getSimpleData(name));
		placeDtlResDto.setPlace_address(getSimpleData(address));
		placeDtlResDto.setBenefit_detail(placeSubString(getSimpleData(benefit)));
		placeDtlResDto.setEvent_msg(placeSubString(getSimpleData(msg)));
		
		List<String> place_img_addr = new ArrayList<String>(detailImg);
		placeDtlResDto.setPlace_img(place_img_addr);
		List<EachRoom> eachRooms = new ArrayList<EachRoom>(roomDtl);
		placeDtlResDto.setEachRoomDetail(eachRooms);
		
		System.out.println(placeDtlResDto);
		return placeDtlResDto;
	}
	
	public <E extends Collection<T>, T> T getSimpleData(E e){
		Iterator<T> iterator =  e.iterator();
		if(iterator.hasNext()) {
			return iterator.next();
		}
		return null;
	}
	
	@Override
	public int motelUpdateInfo(MotelUpdateInfoReqDto infoReqDto, int place_id) {
		Place place = infoReqDto.placeUpdateToEntity();
		place.setPlace_id(place_id);
		place.setBenefit_detail(makeString( infoReqDto.getBenefit_detail()));
		place.setEvent_msg(makeString(infoReqDto.getEvent_msg()));
		int resultFlag = placeRepository.motelUpdateInfo(place);
		return resultFlag;
	}

}
