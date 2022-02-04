const myLocationBtn = document.querySelector('.reset-location-btn');
const nowLocation = document.querySelector('.now-location');

getLocation();

myLocationBtn.onclick = () => {
	getLocation();
}

const watchID = navigator.geolocation.watchPosition((position) => {
	latitude = position.coords.latitude;
	longitude = position.coords.longitude;
});

navigator.geolocation.clearWatch(watchID);

// 내위치 재설정 버튼을 눌렀을 때 위도, 경도를 검색 기능
function getLocation() {
	if (!navigator.geolocation) {
		alert('사용자의 브라우저는 지오로케이션을 지원하지 않습니다.');
	}
	function success(position) {
		const latitude = position.coords.latitude;
		const longitutde = position.coords.longitude;
		setCenter(latitude, longitutde);
		getAddress(latitude, longitutde);
		// 실행되고 지도라는 버튼을 클릭 했을때 해당하는 위도와 경도를 받아서 지도를 띄워준다.
	}
	function error() {
		alert('사용자의 위치를 찾을 수 없습니다.');
	}
	navigator.geolocation.getCurrentPosition(success, error);
}

// 위도와 경도로 지역의 주소를 검색
function getAddress(latitude, longitude) {
	var geocoder = new kakao.maps.services.Geocoder();

	var coord = new kakao.maps.LatLng(latitude, longitude);
	var callback = function(result, status) {
		if (status === kakao.maps.services.Status.OK) {
			addressDetail(result[0].address.address_name);
		}
	};
	geocoder.coord2Address(coord.getLng(), coord.getLat(), callback);
}

// 주소를 해당 구와 동을 잘라 리턴
function addressDetail(addressName){
	let addressDetailName = addressName.split(" ");
	let firstAddr = addressDetailName[1];
	let secondAddr = addressDetailName[2];
	nowLocation.textContent = firstAddr + " " + secondAddr;
}
/*
	현재 위치 가져오기
	getCurrentPosition()
	- 메서드를 호출해서 사용자의 현재 위치를 얻을 수 있다.
	- 사용자의 위치를 탐지하는 비동기 요청을 초기화
	- 기본값에서는 최대한 빠르게 낮은 정밀도의 응답으 반환
*/

// kakao map(지도 버튼을 눌렀을 때)
