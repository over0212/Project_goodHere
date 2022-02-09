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
<link rel="stylesheet" href="/css/motel-insert.css">
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
		<main>
			<!-- 사진 및 간단한 정보 -->
			<section class="place-info">
				<!-- 사진(left) -->
				<div class="place-pics">
					<span>추가할 사진</span> <input type="file" multiple="multiple">

					<div class="small-place-pics"></div>
				</div>

				<!-- 정보(right) -->
				<div class="place-simple-info">
					<input type="text" class="place-name">
					<!-- recommend & review -->
					<div class="place-recommend">
						<!-- <span class="recommend">추천해요</span>
                        <span class="review-text">리뷰 1,777개</span> -->
					</div>
					<input type="text" class="address-name">
					<!-- benefit -->
					<div class="benefits">
						<div class="benefit-btns">
							<button class="benefit-insert-btn">추가</button>
							<button class="benefit-delete-btn">삭제</button>
						</div>
						<div class="benefit-ip">
							<input type="text" class="benefit-detail">
						</div>
						<!-- <span>예약취소가능</span><span>혜택존</span> -->
					</div>
					<div class="event-message">
						<div class="event-btns">
							<button class="event-insert-btn">추가</button>
							<button class="event-delete-btn">삭제</button>
						</div>
						<div class="event-msg-list">
							<input type="text" class="event-message-detail">
						</div>
					</div>
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
					<button type="button" id="tag-insert-btn">추가</button>
					<button type="button" id="tag-delete-btn">삭제</button>
				</div>

				<div class="room-detail-repeat">
					<div class="room-detail">
						<!-- 이미지 -->
						<div class="room-image">
							<div>
								<input type="file">
							</div>
						</div>

						<!-- 객실 정보 -->
						<div class="room-condition">
							<input type="text" class="room-condition-title">

							<div class="room-condition-info">
								<!-- 대실 -->
								<div class="time-room">
									<input type="text" class="time-room-title">
									<div class="price">
										<input type="text" class="time-price">
									</div>
									<ul class="time-set">
										<li><span>마감시간</span><input type="text"></li>
										<li><span>이용시간</span><input type="text"></li>
									</ul>
									<select class="time-choice-btns">
										<option value="">=====선택=====</option>
										<option value="0">문의</option>
										<option value="1">예약</option>
									</select>
								</div>

								<!-- 숙박 -->
								<div class="day-room">
									<input type="text" class="day-room-title">
									<div class="price">
										<input type="text" class="day-price">
									</div>
									<ul class="time-set">
										<li><span>입실시간</span><span><input type="text"></span></li>
										<li><span>퇴실시간</span><span><input type="text"></span></li>
									</ul>
									<select class="day-choice-btns">
										<option value="">=====선택=====</option>
										<option value="0">문의</option>
										<option value="1">예약</option>
									</select>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<button type="button" class="insert-all-data">추가</button>
		</main>
		<jsp:include page="include/delete.jsp" />
		<!-- 하단 -->
		<jsp:include page="include/footer.jsp" />
	</div>

	<script src="/js/header.js"></script>
	<script src="/js/motel-insert.js"></script>
	<script src="https://kit.fontawesome.com/364bcbe9ac.js"
		crossorigin="anonymous"></script>
</body>

</html>