<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="sec"
	uri="http://www.springframework.org/security/tags"%>

<sec:authorize access="isAuthenticated()">
	<sec:authentication property="principal" var="principal" />
</sec:authorize>

<!DOCTYPE html>
<html lang="ko">

<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>내주변</title>
<link rel="stylesheet" href="/css/reset.css">
<link rel="stylesheet" href="/css/header.css">
<link rel="stylesheet" href="/css/map.css">
<link rel="stylesheet" href="/css/location.css">
<link rel="stylesheet" href="/css/contents-list.css">
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
<script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=9c97d4a93761fde066b11f85273412c7&libraries=services,clusterer,drawing"></script>
<style type="text/css">
/* datepicker 버튼 롤오버 시 손가락 모양 표시 */
.ui-datepicker-trigger{
	cursor: pointer;
}
/* datepicker input 롤오버 시 손가락 모양 표시 */
.hasdatepicker{
	cursor: pointer;
}
</style>
</head>

<body>
	<!-- 전체 틀 -->
	<div id="container">
		<!-- 상단 -->
		<jsp:include page="include/header.jsp" />

		<jsp:include page="include/logout.jsp" />

		<!-- 내주변 박스 -->
		<section id="sub-box">
			<div class="sub-title">
				<h2>내주변</h2>
			</div>
			<div class="locations">
				<p class="now-location"></p>
				<button class="reset-location-btn">내 위치 재설정</button>
			</div>
		</section>

		<!-- 메인 컨텐츠 -->
		<main>
			<ul id="place-btns">
				<li><a href="/my-location" class="motel">모텔</a></li>
				<li><a href="#" class="hotel">호텔</a></li>
				<li><a href="#" class="pension">펜션</a></li>
				<li><a href="#" class="resort">리조트</a></li>
				<li><a href="#" class="guest-house">게스트하우스</a></li>
				<li><a href="#" class="camping">캠핑</a></li>
			</ul>

			<section id="contents">
				<nav class="contents-nav">
					<!-- 날짜 -->
					<section id="select-date">
						<h3>날짜</h3>
						<div class="date-border">
							<span>From</span> <input type="text" id="datepicker" value=""> <br>
							<span>To</span> <input type="text" id="datepicker2" value="">
						</div>
					</section>

					<!-- 상세조건 -->
					<section id="contents-detail">
						<h3>상세조건</h3>
						<div class="detail-btns">
							<button type="button" class="reset-btn">초기화</button>
							<button type="button" class="setting-btn">적용</button>
						</div>
					</section>

					<!-- 대실, 숙박, 50%할인 -->
					<section id="earlybird">
						<ul>
							<li><input type="checkbox" id="earlybird-0" value="0">
								<label for="earlybird-0" class="label-chk">대실 예약</label></li>
							<li><input type="checkbox" id="earlybird-1" value="1">
								<label for="earlybird-1" class="label-chk">숙박 예약</label></li>
							<li><input type="checkbox" id="earlybird-2" value="2">
								<label for="earlybird-2" class="label-chk">50% 할인</label></li>
						</ul>
					</section>

					<section id="unique-theme">
						<strong>이색테마</strong>
						<ul>
							<li><input type="checkbox" id="unique-theme-0" value="0">
								<label for="unique-theme-0" class="label-chk">무인텔</label></li>
							<li><input type="checkbox" id="unique-theme-1" value="1">
								<label for="unique-theme-1" class="label-chk">파티룸</label></li>
							<li><input type="checkbox" id="unique-theme-2" value="2">
								<label for="unique-theme-2" class="label-chk">거울룸</label></li>
							<li><input type="checkbox" id="unique-theme-3" value="3">
								<label for="unique-theme-3" class="label-chk">복층룸</label></li>
							<li><input type="checkbox" id="unique-theme-4" value="4">
								<label for="unique-theme-4" class="label-chk">공주룸</label></li>
							<li><input type="checkbox" id="unique-theme-5" value="5">
								<label for="unique-theme-5" class="label-chk">트윈베드</label></li>
							<li><input type="checkbox" id="unique-theme-6" value="6">
								<label for="unique-theme-6" class="label-chk">야외테라스</label></li>
							<li><input type="checkbox" id="unique-theme-7" value="7">
								<label for="unique-theme-7" class="label-chk">바다뷰</label></li>
							<li><input type="checkbox" id="unique-theme-8" value="8">
								<label for="unique-theme-8" class="label-chk">호수뷰</label></li>
							<li><input type="checkbox" id="unique-theme-9" value="9">
								<label for="unique-theme-9" class="label-chk">하늘뷰</label></li>
						</ul>
					</section>

					<section id="spa-theme">
						<strong>스파시설</strong>
						<ul>
							<li><input type="checkbox" id="spa-theme-0" value="0">
								<label for="spa-theme-0" class="label-chk">스파/월풀</label></li>
							<li><input type="checkbox" id="spa-theme-1" value="1">
								<label for="spa-theme-1" class="label-chk">사우나/찜질방</label></li>
							<li><input type="checkbox" id="spa-theme-2" value="2">
								<label for="spa-theme-2" class="label-chk">마사지 베드</label></li>
							<li><input type="checkbox" id="spa-theme-3" value="3">
								<label for="spa-theme-3" class="label-chk">히노끼탕</label></li>
							<li><input type="checkbox" id="spa-theme-4" value="4">
								<label for="spa-theme-4" class="label-chk">노천탕</label></li>
							<li><input type="checkbox" id="spa-theme-5" value="5">
								<label for="spa-theme-5" class="label-chk">반신욕</label></li>
							<li><input type="checkbox" id="spa-theme-6" value="6">
								<label for="spa-theme-6" class="label-chk">욕실 TV</label></li>
						</ul>
					</section>

					<section id="play-theme">
						<strong>놀이시설</strong>
						<ul>
							<li><input type="checkbox" id="play-theme-0" value="0">
								<label for="play-theme-0" class="label-chk">수영장</label></li>
							<li><input type="checkbox" id="play-theme-1" value="1">
								<label for="play-theme-1" class="label-chk">노래방</label></li>
							<li><input type="checkbox" id="play-theme-2" value="2">
								<label for="play-theme-2" class="label-chk">당구대</label></li>
							<li><input type="checkbox" id="play-theme-3" value="3">
								<label for="play-theme-3" class="label-chk">게임기</label></li>
							<li><input type="checkbox" id="play-theme-4" value="4">
								<label for="play-theme-4" class=" label-chk">안마의자</label></li>
							<li><input type="checkbox" id="play-theme-5" value="5">
								<label for="play-theme-5" class="label-chk">커플 PC</label></li>
							<li><input type="checkbox" id="play-theme-6" value="6">
								<label for="play-theme-6" class="label-chk">미니바</label></li>
							<li><input type="checkbox" id="play-theme-7" value="7">
								<label for="play-theme-7" class="label-chk">3D TV</label></li>
							<li><input type="checkbox" id="play-theme-8" value="8">
								<label for="play-theme-8" class="label-chk">빔프로젝터</label></li>
						</ul>
					</section>

					<section id="price">
						<strong>가격</strong> <input type="text">
						<div>금액 범위</div>
					</section>

					<section id="distance">
						<strong>거리 범위</strong>
						<ul>
							<li><input type="radio" id="distance-0" value="0"> <label
								for="distance-0" class="label-radio">기준거리</label></li>
							<li><input type="radio" id="distance-1" value="1"> <label
								for="distance-1" class="label-radio">30km</label></li>
							<li><input type="radio" id="distance-2" value="2"> <label
								for="distance-2" class="label-radio">40km</label></li>
							<li><input type="radio" id="distance-3" value="3"> <label
								for="distance-3" class="label-radio">50km</label></li>
						</ul>
					</section>

				</nav>

				<div id="list-wrap">
					<section class="choose-distance">
						<div class="distance-btns">
							<button type="button" class="distance-btn">
								<span>거리 순</span>
							</button>
							<button type="button" class="low-price-btn">
								<span>낮은 가격 순</span>
							</button>
							<button type="button" class="high-price-btn">
								<span>높은 가격 순</span>
							</button>
						</div>
						<button type="button" class="map-btn">지도</button>
					</section>



					<section class="recommend">
						<h3>TOP 추천</h3>
						<span>광고</span>
					</section>

					<ul class="place-list">
						
					</ul>

				</div>
			</section>
		</main>

		<jsp:include page="include/map.jsp" />
		<jsp:include page="include/delete.jsp" />

	</div>

	<script src="/js/header.js"></script>
	<script src="/js/map.js"></script>
	<script src="/js/location.js" defer="defer"></script>
	<script src="/js/my-location.js" charset="UTF-8"></script>
	<script src="/js/date-picker.js"></script>
	<script src="https://kit.fontawesome.com/364bcbe9ac.js"
		crossorigin="anonymous"></script>
</body>

</html>