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

function moneyFormat(money){
	return "$ " + (Math.round(money * 100) / 100).toLocaleString();
}

function insertMotelList(listObj) {
	let list = JSON.parse(listObj).motelList;
	for (let i = 0; i < list.length; i++) {
		let list_detail = document.createElement('li');
		list_detail.className = 'list-detail';
		
		let benefit_detail_str = ``;
		for(let j = 0; j < list[i].benefit_detail.length; j++){
			benefit_detail_str += `<span class="info-guest">${list[i].benefit_detail[j]}</span>`;
		}
		
		let event_msg_str = ``;
		let msg_length = list[i].event_msg.length;
		if(list[i].event_msg.length > 1){
			event_msg_str = `<span>${list[i].event_msg}</span> 외 ${msg_length} 개`;
		} else {
			event_msg_str = `<span>${list[i].event_msg}</span>`;
		}
		
		let img_kor = ``;
		for(let j = 0; j < list[i].place_img.length; j++){
			img_kor = decodeURIComponent(list[i].place_img[j]);
		}
		let img_src = list[i].place_img;
		console.log(img_src);
		
		let time_money = ``;
		for(let j = 0; j < list[i].time_price.length; j++){
			time_money = moneyFormat(list[i].time_price[j]);
		}
		list_detail.innerHTML = `<a href="">
								<img class="place-view" src="/image/${img_kor}">
									<div class="detail-content">
									<div class="detail-info">
										<strong class="info-title">${list[i].place_name}</strong>
										<div class="info-distance">
											<span class="km"></span> <span class="town"></span>
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
											${list[i].time_room}&nbsp;<b class="time-place-price">${time_money}원</b>
										</p>
										<div class="mark">
											<span> <b class="mark-txt">${list[i].check_in_time}</b> <i>&nbsp;</i>
											</span>
										</div>
										<b class="place-price">${list[i].day_price}원</b>
									</div>
								</div>
							</a>`;
		place_list.appendChild(list_detail);
	}
}