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
	<script src="https://kit.fontawesome.com/364bcbe9ac.js"
		crossorigin="anonymous"></script>
</body>

</html>