const place_list = document.querySelector('.place-list');

callList();

function callList() {
	window.onload = () => {
		$.ajax({
			type: "get",
			url: "/motel-list",
			dataType: "text",
			success: function(data) {
				insertMotelList(data);
			},
			error: function() {
				alert('비동기 처리 오류!');
			}
		});
	}
}

// 주소 잘라서 보여줄 것만 정리
function PlaceAddress(address){
	let addressDetailName = address.split(" ");
	let middleAddr = addressDetailName[1];
	let lastAddr = addressDetailName[2];
	let textContent = middleAddr + " " + lastAddr;
	return textContent;
}

function insertMotelList(listObj) {
	let list = JSON.parse(listObj).motelList;
	// 받아온 data를 갯수만큼 반복
	for (let i = 0; i < list.length; i++) {
		let list_detail = document.createElement('li');
		list_detail.className = 'list-detail';
		
		// 주소 잘라서 사용
		let placeAddress = PlaceAddress(list[i].place_address);
		
		// benefit_detail (혜택), span 태그로 되어있다.
		let benefit_detail_str = ``;
		for(let j = 0; j < list[i].benefit_detail.length; j++){
			benefit_detail_str += `<span class="info-guest">${list[i].benefit_detail[j]}</span>`;
		}
		
		// event_msg (이벤트 메세지)
		let event_msg_str = ``;
		let msg_length = list[i].event_msg.length - 1;
		for(let j = 0; j < list[i].event_msg.length; j++){
			if(list[i].event_msg[j].length > 1){
				event_msg_str = `<span>${list[i].event_msg[j]} 외 ${msg_length} 개</span>`;
			} else {
				event_msg_str = `<span>${list[i].event_msg[j]}</span>`;
			}
		}

		// 원화 comma 찍기
		let time_comma = parseInt(list[i].time_price);
		let time_moneyFormat = (Math.round(time_comma * 100) / 100).toLocaleString();
		let day_comma = parseInt(list[i].day_price);
		let day_moneyFormat = (Math.round(day_comma * 100) / 100).toLocaleString();
		
		list_detail.innerHTML = `<a href="/motel-detail/${list[i].place_id}">
								<img class="place-view" src="/image/${list[i].place_img}">
									<div class="detail-content">
									<div class="detail-info">
										<strong class="info-title">${list[i].place_name}</strong>
										<div class="info-distance">
											<span class="km"></span> <span class="town">${placeAddress}</span>
										</div>
										<div>
										${benefit_detail_str}
										</div>
										<div class="event-text">
											${event_msg_str}
										</div>
									</div>
									<div class="detail-price">
										<p class="time-place">
											${list[i].time_room}&nbsp;<b class="time-place-price">${time_moneyFormat}원</b>
										</p>
										<div class="mark">
											<span> <b class="mark-txt">${list[i].check_in_time}</b> <i>&nbsp;</i>
											</span>
										</div>
										<b class="place-price">${day_moneyFormat}원</b>
									</div>
								</div>
							</a>`;
		place_list.appendChild(list_detail);
	}
}