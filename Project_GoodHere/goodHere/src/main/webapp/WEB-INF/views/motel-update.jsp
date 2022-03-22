<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
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
<title>여기어때</title>
<link rel="stylesheet" href="/css/reset.css">
<link rel="stylesheet" href="/css/header.css">
<link rel="stylesheet" href="/css/motel-update.css">
<link rel="stylesheet" href="/css/footer.css">
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
</head>

<body>
	<!-- 전체 틀 -->
	<div id="container">
		<!-- 상단 -->
		<jsp:include page="include/header.jsp" />

		<jsp:include page="include/logout.jsp" />

		<!-- 메인 컨텐츠 -->
		<form class="update-form">
			<!-- 사진 및 간단한 정보 -->
			<section class="place-info">
				<!-- 사진(left) -->
				<div class="place-pics">
					<span>추가할 사진</span> <input type="file" name="place_img" multiple="multiple" class="place-images-ip">
					
					<button type="button" class="delete-img-btn">삭제</button>

					<div class="small-place-pics"></div>
					<button type="button" class="update-image-btn">숙소 사진 업데이트</button>
				</div>

				<!-- 정보(right) -->
				<div class="place-simple-info">
					<p class="place-small-text">숙소 이름</p>
					<input type="text" class="place-name" name="place_name">
					<!-- recommend & review -->
					<p class="place-small-text">주소</p>
					<input type="text" class="address-name" name="place_address">
					<!-- benefit -->
					<p class="place-small-text">혜택</p>
					<div class="benefits">
						<div class="benefit-btns">
							<button type="button" class="benefit-insert-btn">추가</button>
							<button type="button" class="benefit-delete-btn">삭제</button>
						</div>
						<div class="benefit-ip">
						</div>
					</div>
					<p class="place-small-text">이벤트 메세지</p>
					<div class="event-message">
						<div class="event-btns">
							<button type="button" class="event-insert-btn">추가</button>
							<button type="button" class="event-delete-btn">삭제</button>
						</div>
						<div class="event-msg-list">
						</div>
					</div>
						<button type="button" class="update-info-btn">숙소 정보 업데이트</button>
				</div>
			</section>

			<!-- 숙소의 정보 버튼들 -->
			<section class="place-info-btns">
				<button type="button" class="room-reserve">
					<span>객실안내/예약</span>
				</button>
				<button type="button" class="room-info">
					<span>숙소정보</span>
				</button>
				<button type="button" class="review">
					<span>리뷰</span>
				</button>
			</section>

			<!-- room detail -->
			<section class="place-detail">

				<!-- 태그 추가 및 삭제 버튼 -->
				<div class="room-detail-insert-btn">
				<div>
					<button type="button" id="tag-insert-btn">추가</button>
					<button type="button" id="tag-delete-btn">삭제</button>
				</div>
					<div><button type="button" id="update-room-btn">방 정보 업데이트</button></div>
				</div>

				<div class="room-detail-repeat">
					<!-- <div class="room-detail">
						이미지
						<div class="room-image">
								<input type="file" class="room-img-ip" name="room_condition_img">
							<div class="room-img">
							</div>
						</div>

						객실 정보
						<div class="room-condition">
						<p class="room-condition-text">객실 타입</p>
							<input type="text" class="room-condition-title" name="room_title">

							<div class="room-condition-info">
								대실
								<div class="time-room">
									<p class="room-condition-text">대실</p>
									<input type="text" class="time-room-title" name="time_room">
									<p class="room-condition-text">대실 가격</p>
									<div class="price">
										<input type="text" class="time-price" name="time_price">
									</div>
									<ul class="time-set">
										<li><span>마감시간</span><input type="text" name="dead_line"></li>
										<li><span>이용시간</span><input type="text" name="availability_time"></li>
									</ul>
									<p class="room-condition-text">예약 버튼 활성화/비활성화</p>
									<select class="time-choice-box" name="select_time_flag">
										<option value="">=====선택=====</option>
										<option value="0">숙소에 문의</option>
										<option value="1">대실 예약</option>
										<option value="2">숙박 예약</option>
									</select>
								</div>

								숙박
								<div class="day-room">
									<p class="room-condition-text">숙박</p>
									<input type="text" class="day-room-title" name="day_room">
									<p class="room-condition-text">숙박 가격</p>
									<div class="price">
										<input type="text" class="day-price" name="day_price">
									</div>
									<ul class="time-set">
										<li><span>입실시간</span><input type="text" name="check_in_time"></li>
										<li><span>퇴실시간</span><input type="text" name="check_out_time"></li>
									</ul>
									<p class="room-condition-text">예약 버튼 활성화/비활성화</p>
									<select class="day-choice-box" name="select_day_flag">
										<option value="">=====선택=====</option>
										<option value="0">숙소에 문의</option>
										<option value="1">대실 예약</option>
										<option value="2">숙박 예약</option>
									</select>
								</div>
							</div>
						</div>
					</div> -->
				</div>
			</section>
			<button type="button" class="go-detail-page">상세페이지로 이동하기</button>
		</form>
		<input type="hidden" id="place_id" value="${place_id }">
		<jsp:include page="include/delete.jsp" />
		<!-- 하단 -->
		<jsp:include page="include/footer.jsp" />
	</div>

	<script src="/js/header.js"></script>
	<script src="/js/motel-update.js"></script>
	<!-- <script src="/js/motel-insert.js"></script> -->
	<script src="https://kit.fontawesome.com/364bcbe9ac.js"
		crossorigin="anonymous"></script>
</body>

</html>