const place_list = document.querySelector('.place-list');

callList();

function callList() {
	window.onload = () => {
		$.ajax({
			type: "get",
			url: "/motel-list",
			dataType: "text",
			success: function(data) {
				alert(data);
				insertMotelList(data);
			},
			error: function() {
				alert('비동기 처리 오류!');
			}
		});
	}
}

function insertMotelList(listObj) {
	let list = JSON.parse(listObj).motelList;
	alert(list);
	for (let i = 0; i < list.length; i++) {
		let list_detail = document.createElement('li');
		alert(list_detail);
		list_detail.className = 'list-detail';
		list_detail.innerHTML = `<a href="">
								<img class="place-view" src="">
									<div class="detail-content">
									<div class="detail-info">
										<strong class="info-title">${list[i].place_name}</strong>
										<div class="info-distance">
											<span class="km">2.5km</span> <span class="town"></span>
										</div>
										<p class="info-guest">예약취소가능</p>
										<div class="event-text">
											<span>넷플릭스, 마일리지쿠폰, 손소독제, 꼼꼼한 방역 외 3개</span>
										</div>
									</div>
									<div class="detail-price">
										<p class="time-place">
											대실&nbsp;<b class="time-place-price">${list[i].time_price}원</b>
										</p>
										<div class="mark">
											<span> <b class="mark-txt">13시부터 입실</b> <i>&nbsp;</i>
											</span>
										</div>
										<b class="place-price">59,000원</b>
									</div>
								</div>
							</a>`;
		place_list.appendChild(list_detail);
	}
}