const place_id = document.querySelector('#place_id');

// place image 보여주기
const place_imgs_ip = document.querySelector('.place-images-ip');
const small_imgs = document.querySelector('.small-place-pics');
const delete_img_btn = document.querySelector('.delete-img-btn');

const place_name = document.querySelector('.place-name');
const place_address = document.querySelector('.address-name');

// benefit (혜택)
const benefit_ip = document.querySelector('.benefit-ip');
const benefit_insert_btn = document.querySelector('.benefit-insert-btn');
const benefit_delete_btn = document.querySelector('.benefit-delete-btn');

// event-msg (이벤트 메세지)
const event_msg_list = document.querySelector('.event-msg-list');
const event_insert_btn = document.querySelector('.event-insert-btn');
const event_delete_btn = document.querySelector('.event-delete-btn');

// room condition 추가
const tag_insert_btn = document.querySelector('#tag-insert-btn');
const tag_delete_btn = document.querySelector('#tag-delete-btn');
const room_detail_repeat = document.querySelector('.room-detail-repeat');

let room_img_ip = document.querySelectorAll('.room-img-ip');
let room_img = document.querySelectorAll('.room-img');

let imageDeleteFlag = false;
const originImageData = {
	"place_id": place_id.value,
	"place_img": []
}

let roomDetailFlag = false;
const deleteRoomData = {
	"place_seq": [],
	"room_condition_img": []
}

getReadData();

place_imgs_ip.onchange = () => {
	imageDeleteFlag = true;
	if (place_imgs_ip.files.length > 5) {
		file_count = 0;
		small_imgs.textContent = '';
		alert('최대 5개까지만 선택이 가능합니다.');
		place_imgs_ip.value = null;
	}
	file_count = 0;
	small_imgs.textContent = '';
	showImages();
}

delete_img_btn.onclick = () => {
	if (imageDeleteFlag == false) {
		imageDeleteFlag = true;
		small_imgs.textContent = '';
	} else {
		if (file_count > 0) {
			small_imgs.lastChild.remove();
			file_count--;
		}
		if (file_count == 0) {
			file_count = 0;
			place_imgs_ip.value = null;
		}
	}
}

let file_count = 0; // minimum = 0 / maximum = 5
function showImages() {
	for (let i = 0; i < place_imgs_ip.files.length; i++) {
		// 5개 이하면 파일을 생성 및 태그 추가
		let file = place_imgs_ip.files[i];
		let insert_image = document.createElement('img');
		if (file_count < 5) {
			if (file) {
				let reader = new FileReader();
				reader.onload = (e) => {
					insert_image.src = e.target.result;
				}
				reader.readAsDataURL(file);
			}
			small_imgs.appendChild(insert_image);
			file_count++;
		}
	}
}

// 화면에 보여줄 데이터를 먼저 받아온다.
function getReadData() {
	window.onload = () => {
		$.ajax({
			type: "get",
			url: "/motel-dtl/" + place_id.value,
			dataType: "text",
			success: function(data) {
				alert(data);
				insertData(data);
			},
			error: function() {
				alert("비동기 처리 오류");
			}
		});
	}
}

// 받아온 데이터를 각각의 태그에 데이터를 뿌려준다.
let tag_count = 0;
function insertData(data) {
	let readObj = JSON.parse(data).motelDtl;
	let detailRoomObj = readObj.eachRoomDetail;

	for (let i = 0; i < readObj.place_img.length; i++) {
		let read_img = document.createElement('img');
		read_img.src = "/image/" + readObj.place_img[i];
		originImageData.place_img.push(readObj.place_img[i]);
		small_imgs.appendChild(read_img);
	}

	place_name.value = readObj.place_name;
	place_address.value = readObj.place_address;

	for (let i = 0; i < readObj.benefit_detail.length; i++) {
		benefit_ip.innerHTML +=
			`<input type="text" class="benefit-detail" name="benefit_detail" value="${readObj.benefit_detail[i]}">`;
	}

	let benefit_count = readObj.benefit_detail.length;
	benefit_insert_btn.onclick = () => {
		let benefit_text = document.createElement('input');
		if (benefit_count < 6) {
			benefit_text.setAttribute('type', 'text');
			benefit_text.className = 'benefit-detail';
			benefit_text.name = 'benefit_detail';
			benefit_ip.appendChild(benefit_text);
			benefit_count++;
		}
	}

	benefit_delete_btn.onclick = () => {
		if (benefit_count > 1) {
			benefit_ip.lastChild.remove();
			benefit_count--;
		}
	}

	for (let i = 0; i < readObj.event_msg.length; i++) {
		event_msg_list.innerHTML +=
			`<input type="text" class="event-message-detail" name="event_msg" value="${readObj.event_msg[i]}">`;
	}

	let event_msg_count = readObj.event_msg.length;
	event_insert_btn.onclick = () => {
		let event_ip = document.createElement('input');
		if (event_msg_count < 4) {
			event_ip.setAttribute('type', 'text');
			event_ip.className = 'event-message-detail';
			event_ip.name = 'event_msg';
			event_msg_list.appendChild(event_ip);
			event_msg_count++;
		}
	}

	event_delete_btn.onclick = () => {
		if (event_msg_count > 1) {
			event_msg_list.lastChild.remove();
			event_msg_count--;
		}
	}

	for (let i = 0; i < detailRoomObj.length; i++) {
		let room_datail_ip = document.createElement('div');
		room_datail_ip.className = 'room-detail';
		room_datail_ip.innerHTML += `
						<input type="hidden" class="room-seq" value="${detailRoomObj[i].place_seq}">
						<div class="room-image">
								<input type="file" class="room-img-ip" name="room_condition_img">
							<div class="room-img">
								<img src="/image/${detailRoomObj[i].room_condition_img}">
							</div>
						</div>
						<div class="room-condition">
						<p class="room-condition-text">객실 타입</p>
						<div class="room-title-box">
							<input type="text" class="room-condition-title" name="room_title" value="${detailRoomObj[i].room_title}">
							<div class="room-delete-btn"><img src="/icons/cancel-button.png"></div>
                        </div>
							<div class="room-condition-info">
								<div class="time-room">
									<p class="room-condition-text">대실</p>
									<input type="text" class="time-room-title" name="time_room" value="${detailRoomObj[i].time_room}">
									<p class="room-condition-text">대실 가격</p>
									<div class="price">
										<input type="text" class="time-price" name="time_price" value="${detailRoomObj[i].time_price}">
									</div>
									<ul class="time-set">
										<li><span>마감시간</span><input type="text" name="dead_line" value="${detailRoomObj[i].dead_line}"></li>
										<li><span>이용시간</span><input type="text" name="availability_time" value="${detailRoomObj[i].availability_time}"></li>
									</ul>
									<p class="room-condition-text">예약 버튼 활성화/비활성화</p>
									<select class="time-choice-box" name="select_time_flag">
										<option value="">=====선택=====</option>
										<option value="0">숙소에 문의</option>
										<option value="1">대실 예약</option>
										<option value="2">숙박 예약</option>
									</select>
								</div>
								<div class="day-room">
									<p class="room-condition-text">숙박</p>
									<input type="text" class="day-room-title" name="day_room" value="${detailRoomObj[i].day_room}">
									<p class="room-condition-text">숙박 가격</p>
									<div class="price">
										<input type="text" class="day-price" name="day_price" value="${detailRoomObj[i].day_price}">
									</div>
									<ul class="time-set">
										<li><span>입실시간</span><input type="text" name="check_in_time" value="${detailRoomObj[i].check_in_time}"></li>
										<li><span>퇴실시간</span><input type="text" name="check_out_time" value="${detailRoomObj[i].check_out_time}"></li>
									</ul>
									<p class="room-condition-text">예약 버튼 활성화/비활성화</p>
									<select class="day-choice-box" name="select_day_flag">
										<option value="">=====선택=====</option>
										<option value="0">숙소에 문의</option>
										<option value="1">대실 예약</option>
										<option value="2">숙박 예약</option>
									</select>
								</div>
							</div>
						</div>`;

		// 대실 select box db에서 넘어온 값으로 seleted 설정
		// 총 4개의 option이 있기에 +1 을 해줘야 한다.
		room_detail_repeat.appendChild(room_datail_ip);
		let time_choice_box = room_datail_ip.querySelector('.time-choice-box');
		let time_option_value = time_choice_box.options;
		time_option_value[detailRoomObj[i].select_time_flag + 1].selected = true;

		// 숙박 select box db에서 넘어온 값으로 seleted 설정
		// 총 4개의 option이 있기에 +1 을 해줘야 한다.
		let day_choice_box = room_datail_ip.querySelector('.day-choice-box');
		let day_option_value = day_choice_box.options;
		day_option_value[detailRoomObj[i].select_day_flag + 1].selected = true;

		let room_delete_btn = room_datail_ip.querySelector('.room-delete-btn');
		room_delete_btn.onclick = () => {
			if (tag_count > 1) {
				room_datail_ip.remove();
				roomDetailFlag = true;
				deleteRoomData.place_seq.push(room_datail_ip.querySelector('.room-seq').value);
				deleteRoomData.room_condition_img.push(detailRoomObj[i].room_condition_img);
				tag_count--;
				repeatOnchange();
			}
		}
		tag_count++;
	}
	// 기존에 있는 태그가 실행할 수 있게 한번 실행해준다.
	repeatOnchange();

} // end of readData(function)

// 추가 버튼을 눌렀을 때 태그 삽입
tag_insert_btn.onclick = () => {
	let room_datail_ip = document.createElement('div');
	room_datail_ip.className = 'room-detail';
	if (tag_count < 6) {
		room_datail_ip.innerHTML = `
						<div class="room-image">
								<input type="file" class="room-img-ip" name="room_condition_img">
							<div class="room-img">
							</div>
						</div>
						<div class="room-condition">
						<p class="room-condition-text">객실 타입</p>
							<div class="room-title-box">
							<input type="text" class="room-condition-title" name="room_title">
							<div class="room-delete-btn"><img src="/icons/cancel-button.png"></div>
                        </div>

							<div class="room-condition-info">
								<div class="time-room">
									<p class="room-condition-text">대실</p>
									<input type="text" class="time-room-title" name="time_room">
									<p class="room-condition-text">대실 가격</p>
									<div class="price">
										<input type="text" class="time-price" name="time_price">
									</div>
									<ul class="time-set">
										<li><span>마감시간</span><input type="text" name="dead_line"></li>
										<li><span>이용시간</span><input type="text" name="availability_time"></li>
									</ul>
									<p class="room-condition-text">예약 버튼 활성화/비활성화</p>
									<select class="time-choice-box" name="select_time_flag">
										<option value="">=====선택=====</option>
										<option value="0">숙소에 문의</option>
										<option value="1">대실 예약</option>
										<option value="2">숙박 예약</option>
									</select>
								</div>
								<div class="day-room">
									<p class="room-condition-text">숙박</p>
									<input type="text" class="day-room-title" name="day_room">
									<p class="room-condition-text">숙박 가격</p>
									<div class="price">
										<input type="text" class="day-price" name="day_price">
									</div>
									<ul class="time-set">
										<li><span>입실시간</span><span><input type="text" name="check_in_time"></span></li>
										<li><span>퇴실시간</span><span><input type="text" name="check_out_time"></span></li>
									</ul>
									<p class="room-condition-text">예약 버튼 활성화/비활성화</p>
									<select class="day-choice-box" name="select_day_flag">
										<option value="">=====선택=====</option>
										<option value="0">숙소에 문의</option>
										<option value="1">대실 예약</option>
										<option value="2">숙박 예약</option>
									</select>
								</div>
							</div>
						</div>`;
		room_detail_repeat.appendChild(room_datail_ip);
		tag_count++;
		let room_delete_btn = room_datail_ip.querySelector('.room-delete-btn');
		room_delete_btn.onclick = () => {
			if (tag_count > 1) {
				room_datail_ip.remove();
				tag_count--;
				repeatOnchange();
			}
		}
		repeatOnchange(); // 태그가 삽입되었을 때 먼저 선언되었던 input 변수에 덮어씌운다.
	}
}

// 삭제버튼을 눌렀을 때 태그가 삭제
tag_delete_btn.onclick = () => {
	if (tag_count > 1) {
		room_detail_repeat.lastChild.remove();
		tag_count--;
	}
}

// room detail에 있는 이미지 input 태그를 클릭했을 때
function repeatOnchange() {
	room_img_ip = document.querySelectorAll('.room-img-ip');
	room_img = document.querySelectorAll('.room-img');
	for (let i = 0; i < room_img_ip.length; i++) {
		room_img_ip[i].onchange = () => {
			room_img[i].textContent = '';
			showRoomImage(i);
		}
	}
}

function showRoomImage(indexNumber) {
	room_img = document.querySelectorAll('.room-img');
	let file = room_img_ip[indexNumber].files[0];
	let insert_room_img = document.createElement('img');
	let reader = new FileReader();
	reader.onload = (e) => {
		insert_room_img.src = e.target.result;
	}
	reader.readAsDataURL(file);
	room_img[indexNumber].appendChild(insert_room_img);
}

// 제일 하단에 있는 상세페이지로 이동 버튼
const go_detail_page = document.querySelector('.go-detail-page');
go_detail_page.onclick = () => {
	location.replace("/motel-detail/" + place_id.value);
}

// 숙소 전경 이미지를 변경 버튼
const update_img_btn = document.querySelector('.update-image-btn');
update_img_btn.onclick = () => {

	let formData = new FormData();
	for (let i = 0; i < place_imgs_ip.files.length; i++) {
		formData.append("multipartFiles", place_imgs_ip.files[i]);
	}
	if (originImageData.place_img != null) {
		for (let i = 0; i < originImageData.place_img.length; i++) {
			formData.append("origin_imgs", originImageData.place_img[i]);
		}
	}
	console.log(formData);
	if (imageDeleteFlag == true) {
		$.ajax({
			type: 'post',
			url: '/motel/image/' + place_id.value,
			data: formData,
			enctype: 'multipart/form-data',
			processData: false,
			contentType: false,
			success: function(data) {
				if (data > 0) {
					location.reload();
				} else {
					alert("업데이트 실패!");
				}
			},
			error: function() {
				alert("비동기 처리 오류!");
			}
		});
	} else {
		location.reload();
	}
}
// 숙소의 이름 및 주소 등 숙소 정보 변경 버튼
const update_info_btn = document.querySelector('.update-info-btn');
update_info_btn.onclick = () => {
	let benefit_detail = document.querySelectorAll('.benefit-detail');
	let event_msg = document.querySelectorAll('.event-message-detail');
	let infoData = {
		"place_name": place_name.value,
		"place_address": place_address.value,
		"benefit_detail": [],
		"event_msg": []
	}
	for (let i = 0; i < benefit_detail.length; i++) {
		infoData.benefit_detail.push(benefit_detail[i].value);
	}
	for (let i = 0; i < event_msg.length; i++) {
		infoData.event_msg.push(event_msg[i].value);
	}
	$.ajax({
		type: "put",
		url: "/motel/info/" + place_id.value,
		data: JSON.stringify(infoData),
		contentType: "application/json; charset=UTF-8",
		dataType: "text",
		success: function(data) {
			if (data == 1) {
				location.reload();
			} else {
				alert("숙소 정보 수정 오류!");
			}
		},
		error: function() {
			alert("비동기 처리 오류!");
		}
	});
}

// 방의 데이터 변경 버튼(수정 및 추가, 삭제 포함)
const update_room_btn = document.querySelector('#update-room-btn');
update_room_btn.onclick = () => {
	let makeListData = [];
	let roomFormData = new FormData();
	let room_dtl_tags = document.querySelectorAll(".room-detail");
	for (let i = 0; i < room_dtl_tags.length; i++) {
		let updateObj = new Object();

		let room_dtl_tag = room_dtl_tags[i];
		updateObj.place_seq = room_dtl_tag.querySelector('.room-seq') == null ? 0 : room_dtl_tag.querySelector('.room-seq').value;
		updateObj.roomDeleteFlag = false;
		updateObj.update_img = room_dtl_tag.querySelector('.room-img-ip').files[0];
		if (updateObj.update_img == null) {
			let room_img_src = room_dtl_tag.querySelector('.room-img img').src;
			updateObj.room_condition_img = room_img_src.split("/")[4];
		}
		updateObj.room_title = room_dtl_tag.querySelector("input[name='room_title']").value;
		updateObj.time_room = room_dtl_tag.querySelector("input[name='time_room']").value;
		updateObj.time_price = room_dtl_tag.querySelector("input[name='time_price']").value;
		updateObj.dead_line = room_dtl_tag.querySelector("input[name='dead_line']").value;
		updateObj.availability_time = room_dtl_tag.querySelector("input[name='availability_time']").value;
		//updateObj.select_time_flag = room_dtl_tag.querySelector('.time-choice-box').value;
		let time_selected = room_dtl_tag.querySelector('.time-choice-box').options;
		for (let j = 1; j < time_selected.length; j++) {
			if (time_selected[j].selected == true) {
				updateObj.select_time_flag = time_selected[j].value;
			}
		}

		updateObj.day_room = room_dtl_tag.querySelector("input[name='day_room']").value;
		updateObj.day_price = room_dtl_tag.querySelector("input[name='day_price']").value;
		updateObj.check_in_time = room_dtl_tag.querySelector("input[name='check_in_time']").value;
		updateObj.check_out_time = room_dtl_tag.querySelector("input[name='check_out_time']").value;
		//updateObj.select_day_flag = room_dtl_tag.querySelector('.day-choice-box').value;

		let day_selected = room_dtl_tag.querySelector('.day-choice-box').options;
		for (let j = 1; j < day_selected.length; j++) {
			if (day_selected[j].selected == true) {
				updateObj.select_day_flag = day_selected[j].value;
			}
		}
		makeListData.push(updateObj);
		console.log(updateObj);
	} // end of room_dtl.tags for

	if (roomDetailFlag) {
		console.log(deleteRoomData.place_seq.length);
		for (let i = 0; i < deleteRoomData.place_seq.length; i++) {
			let updateObj = new Object();
			updateObj.place_seq = deleteRoomData.place_seq[i];
			updateObj.roomDeleteFlag = true;
			updateObj.room_condition_img = deleteRoomData.room_condition_img[i];
			makeListData.push(updateObj);
			console.log(updateObj);
		}
	}
	console.log(makeListData);

	for (let i = 0; i < makeListData.length; i++) {
		roomFormData.append("roomDeleteFlag", makeListData[i].roomDeleteFlag);
		roomFormData.append("place_seq", makeListData[i].place_seq);
		roomFormData.append("update_img", makeListData[i].update_img);
		roomFormData.append("room_condition_img", makeListData[i].room_condition_img);
		roomFormData.append("room_title", makeListData[i].room_title);
		roomFormData.append("time_room", makeListData[i].time_room);
		roomFormData.append("time_price", makeListData[i].time_price);
		roomFormData.append("dead_line", makeListData[i].dead_line);
		roomFormData.append("availability_time", makeListData[i].availability_time);
		roomFormData.append("select_time_flag", makeListData[i].select_time_flag);
		console.log(makeListData[i].select_time_flag);
		roomFormData.append("day_room", makeListData[i].day_room);
		roomFormData.append("day_price", makeListData[i].day_price);
		roomFormData.append("check_in_time", makeListData[i].check_in_time);
		roomFormData.append("check_out_time", makeListData[i].check_out_time);
		roomFormData.append("select_day_flag", makeListData[i].select_day_flag);
		console.log(makeListData[i].select_day_flag);
	}

	$.ajax({
		type: "post",
		url: "/motel/room/" + place_id.value,
		data: roomFormData,
		enctype: 'multipart/form-data',
		processData: false,
		contentType: false,
		success: function(data) {
			location.reload();
		},
		error: function() {
			alert("비동기 처리 오류!!");
		}
	});
} // end of update_room_btn eventListener
