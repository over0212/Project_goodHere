const myLocationBtn = document.querySelector('.reset-location-btn');

// 위도 경도의 변수 생성
let latitude = '';
let longitude = '';

myLocationBtn.onclick = () => {
	getLocation();
}

const watchID = navigator.geolocation.watchPosition((position) => {
	latitude = position.coords.latitude;
	longitude = position.coords.longitude;
});

navigator.geolocation.clearWatch(watchID);

function getLocation() {
	if (!navigator.geolocation) {
		alert('사용자의 브라우저는 지오로케이션을 지원하지 않습니다.');
	}
	function success(position) {
		latitude = position.coords.latitude;
		longitude = position.coords.longitude;
		alert(latitude);
		alert(longitude);
	}
	function error() {
		alert('사용자의 위치를 찾을 수 없습니다.');
	}
	navigator.geolocation.getCurrentPosition(success, error);
}

/*
	현재 위치 가져오기
	getCurrentPosition()
	- 메서드를 호출해서 사용자의 현재 위치를 얻을 수 있다.
	- 사용자의 위치를 탐지하는 비동기 요청을 초기화
	- 기본값에서는 최대한 빠르게 낮은 정밀도의 응답으 반환
*/

// kakao map(지도 버튼을 눌렀을 때)
