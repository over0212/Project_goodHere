const map = document.querySelector('#map');
const map_window = document.querySelector('#map-window');
const closeBtn = document.querySelector('#map i');
const mapBtn = document.querySelector('.map-btn');

let latitude = 33.450701;
let longitude = 126.570667;

var mapContainer = document.getElementById('map-window'),
	mapOptions = {
		center: new kakao.maps.LatLng(latitude, longitude),
		level: 6
	};
var kakaoMap = new kakao.maps.Map(mapContainer, mapOptions);

map.style.display = 'none'; // 맵을 css 로 none을 줄 경우 맵이 정상적으로 보여지지 않는다.

// 버튼을 눌렀을 때 해당위치로 이동한다.
function setCenter(latitude, longitude) {
	var moveLatLon = new kakao.maps.LatLng(latitude, longitude);
	// 지도 중심을 이동 시킵니다
	kakaoMap.setCenter(moveLatLon);
}

mapBtn.onclick = () => {
	map.style.display = 'flex';
}

closeBtn.onclick = () => {
	map.style.display = 'none';
}

