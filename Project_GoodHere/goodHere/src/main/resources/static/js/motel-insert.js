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

// 라디오 버튼
const time_ask_radio = document.querySelectorAll('.time-ask-radio');
const time_reserve_radio = document.querySelectorAll('.time-reserve-radio');
const day_ask_radio = document.querySelectorAll('.day-ask-radio');
const day_reserve_radio = document.querySelectorAll('.day-reserve-radio');

// 혜택 텍스트--> minimum = 0 / maximum = 5
let benefit_count = 1;

benefit_insert_btn.onclick = () => {
	let benefit_text = document.createElement('input');
	if (benefit_count < 6) {
		benefit_text.setAttribute('type', 'text');
		benefit_text.className = 'benefit-detail';
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

// 이벤트 메세지 --> minimum = 0 / maximum = 4
let event_msg_count = 1;

event_insert_btn.onclick = () => {
	let event_ip = document.createElement('input');
	if (event_msg_count < 4) {
		event_ip.setAttribute('type', 'text');
		event_ip.className = 'event-message-detail';
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

// room datail condition list
let tag_count = 1;
tag_insert_btn.onclick = () => {
	let room_datail_ip = document.createElement('div');
	room_datail_ip.className = 'room-detail';
	if (tag_count < 6) {

		room_datail_ip.innerHTML = `
						<div class="room-image">
							<div>
								<input type="file">
							</div>
						</div>
						<div class="room-condition">
							<input type="text" class="room-condition-title">

							<div class="room-condition-info">
								<div class="time-room">
									<input type="text" class="time-room-title">
									<div class="price">
										<input type="text" class="time-price">
									</div>
									<ul class="time-set">
										<li><span>마감시간</span><input type="text"></li>
										<li><span>이용시간</span><input type="text"></li>
									</ul>
									<select class="time-choice-btns">
										<option value="">=====선택=====</option>
										<option value="0">문의</option>
										<option value="1">예약</option>
									</select>
								</div>
								<div class="day-room">
									<input type="text" class="day-room-title">
									<div class="price">
										<input type="text" class="day-price">
									</div>
									<ul class="time-set">
										<li><span>입실시간</span><span><input type="text"></span></li>
										<li><span>퇴실시간</span><span><input type="text"></span></li>
									</ul>
									<select class="day-choice-btns">
										<option value="">=====선택=====</option>
										<option value="0">문의</option>
										<option value="1">예약</option>
									</select>
								</div>
							</div>
						</div>`;
		room_detail_repeat.appendChild(room_datail_ip);
		tag_count++;
	}
}

tag_delete_btn.onclick = () => {
	if (tag_count > 1) {
		room_detail_repeat.lastChild.remove();
		tag_count--;
	}
}

