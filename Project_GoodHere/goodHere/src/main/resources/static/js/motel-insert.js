// place image 보여주기
const place_imgs_ip = document.querySelector('.place-images-ip');
const small_imgs = document.querySelector('.small-place-pics');
const delete_img_btn = document.querySelector('.delete-img-btn');

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

// room image 보여주기
let room_img_ip = document.querySelectorAll('.room-img-ip');
let room_img = document.querySelectorAll('.room-img');

place_imgs_ip.onchange = () => {
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
	if (file_count > 0) {
		small_imgs.lastChild.remove();
		file_count--;
	}
	if (file_count == 0) {
		file_count = 0;
		place_imgs_ip.value = null;
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

// 혜택 텍스트--> minimum = 1 / maximum = 5
let benefit_count = 1;
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

// 이벤트 메세지 --> minimum = 1 / maximum = 4
let event_msg_count = 1;
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

// 기존에 있는 태그가 실행할 수 있게 한번 실행해준다.
repeatOnchange();

// room datail condition list
let tag_count = 1;
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
							<input type="text" class="room-condition-title" name="room_title">

							<div class="room-condition-info">
								<div class="time-room">
									<input type="text" class="time-room-title" name="time_room">
									<div class="price">
										<input type="text" class="time-price" name="time_price">
									</div>
									<ul class="time-set">
										<li><span>마감시간</span><input type="text" name="dead_line"></li>
										<li><span>이용시간</span><input type="text" name="availability_time"></li>
									</ul>
									<select class="time-choice-btns" name="select_time_flag">
										<option value="">=====선택=====</option>
										<option value="0">숙소에 문의</option>
										<option value="1">대실 예약</option>
										<option value="2">숙박 예약</option>
									</select>
								</div>
								<div class="day-room">
									<input type="text" class="day-room-title" name="day_room">
									<div class="price">
										<input type="text" class="day-price" name="day_price">
									</div>
									<ul class="time-set">
										<li><span>입실시간</span><span><input type="text" name="check_in_time"></span></li>
										<li><span>퇴실시간</span><span><input type="text" name="check_out_time"></span></li>
									</ul>
									<select class="day-choice-btns" name="select_day_flag">
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
		repeatOnchange(); // 태그가 삽입되었을 때 먼저 선언되었던 input 변수에 덮어씌운다.
	}
}

tag_delete_btn.onclick = () => {
	if (tag_count > 1) {
		room_detail_repeat.lastChild.remove();
		tag_count--;
	}
}

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
