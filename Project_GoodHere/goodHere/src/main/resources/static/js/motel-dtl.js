const place_id = document.querySelector('#place_id');
const go_place_update = document.querySelector('.update-place');

const place_big_img = document.querySelector('.big-pics li');
const place_small_pics = document.querySelector('.small-pics');
const place_name = document.querySelector('.place-simple-info h2');
const place_address = document.querySelector('.address');
const benefits = document.querySelector('.benefits');
const event_message = document.querySelector('.message-list');

const place_detail = document.querySelector('.place-detail');

getDetailData();

function getDetailData() {
	window.onload = () => {
		$.ajax({
			type: "get",
			url: "/motel-dtl/" + place_id.value,
			dataType: "text",
			success: function(data) {
				parsingDetailData(data);
			},
			error: function() {
				alert('비동기 처리 오류');
			}
		});
	}
}

// 업데이트 페이지로 이동
go_place_update.onclick = () =>{
	location.href = "/update-place/" + place_id.value;
}

function parsingDetailData(detailData) {
	let detailObj = JSON.parse(detailData).motelDtl;
	let detailRoom = detailObj.eachRoomDetail;

	// big image 첫번째 index 값 삽입
	place_big_img.innerHTML = `<img src="/image/${detailObj.place_img[0]}" alt="">`;

	// small img
	for (let i = 1; i < detailObj.place_img.length; i++) {
		let li_tag = document.createElement("li");
		let img_tag = document.createElement("img");
		place_small_pics.appendChild(li_tag);
		li_tag.appendChild(img_tag);
		img_tag.src = `/image/${detailObj.place_img[i]}`;
	}

	// place_name
	place_name.innerText = detailObj.place_name;

	// place_address
	place_address.innerText = detailObj.place_address;

	// benefit_detail span tag
	for (let i = 0; i < detailObj.benefit_detail.length; i++) {
		let spanTag = document.createElement('span');
		spanTag.innerText = detailObj.benefit_detail[i];
		benefits.appendChild(spanTag);
	}

	// event_msg tag
	for (let i = 0; i < detailObj.event_msg.length; i++) {
		let liTag = document.createElement('li');
		liTag.innerText = detailObj.event_msg[i];
		event_message.appendChild(liTag);
	}

	for (let i = 0; i < detailRoom.length; i++) {
		let room_detail = document.createElement('div');
		room_detail.className = 'room-detail';

		let time_kor_money = setComma(detailRoom[i].time_price);
		let day_kor_money = setComma(detailRoom[i].day_price);

		room_detail.innerHTML = `<div class="room-image">
                        <img src="/image/${detailRoom[i].room_condition_img}">
                    </div>
                    <!-- 객실 정보 -->
                    <div class="room-condition">
                        <strong class="room-title">${detailRoom[i].room_title}</strong>
                        <div class="room-condition-info">
                        
                            <!-- 대실 -->
                            <div class="time-room">
                                <strong>${detailRoom[i].time_room}</strong>
                                <div class="price">
                                    <p>${time_kor_money}</p>
                                </div>
                                <ul class="time-set">
                                    <li><span>마감시간</span><span>${detailRoom[i].dead_line}</span></li>
                                    <li><span>이용시간</span><span>${detailRoom[i].availability_time}</span></li>
                                </ul>
                            </div>

                            <!-- 숙박 -->
                            <div class="day-room">
                                <strong>${detailRoom[i].day_room}</strong>
                                <div class="price">
                                    <p>${day_kor_money}</p>
                                </div>
                                <ul class="time-set">
                                    <li><span>입실시간</span><span>${detailRoom[i].check_in_time}</span></li>
                                    <li><span>퇴실시간</span><span>${detailRoom[i].check_out_time}</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>`;

		place_detail.appendChild(room_detail);
		
		const time_room = document.querySelectorAll('.time-room');
		let time_button = flagNumByButton(detailRoom[i].select_time_flag);
		time_room[i].appendChild(time_button);
		
		const day_room = document.querySelectorAll('.day-room');
		let day_button = flagNumByButton(detailRoom[i].select_day_flag);
		day_room[i].appendChild(day_button);
		
	}

	function setComma(strMoney) {
		let korMoney = parseInt(strMoney);
		return (Math.round(korMoney * 100) / 100).toLocaleString() + "원";
	}

	function flagNumByButton(num) {
		if (num == 0) {
			let ask_btn = document.createElement('button');
			ask_btn.className = 'ask-btn';
			ask_btn.innerText = '숙소에 문의 하세요';
			return ask_btn;
		} else if (num == 1) {
			let reserve_btn = document.createElement('button');
			reserve_btn.className = 'reserve-btn';
			reserve_btn.innerText = '대실 예약'
			return reserve_btn;
		} else if(num == 2) {
			let reserve_btn = document.createElement('button');
			reserve_btn.className = 'reserve-btn';
			reserve_btn.innerText = '숙박 예약'
			return reserve_btn;
		}
	}

} // end of parsingDetailData