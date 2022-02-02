const map = document.querySelector('#map');
const map_window = document.querySelector('#map-window');
const closeBtn = document.querySelector('#map i');
const mapBtn = document.querySelector('.map-btn');

var mapContainer = document.getElementById('map-window'),
	mapOptions = {
		center: new kakao.maps.LatLng(33.450701, 126.570667),
		level: 8
	};
var kakaoMap = new kakao.maps.Map(mapContainer, mapOptions);

map.style.display = 'none';

mapBtn.onclick = () => {
	map.style.display = 'flex';
}

closeBtn.onclick = () => {
	map.style.display = 'none';
}
