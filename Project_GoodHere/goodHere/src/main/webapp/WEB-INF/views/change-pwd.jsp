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
<title>비밀번호수정 ㅣ 여기어때</title>
<link rel="stylesheet" href="/css/reset.css">
<link rel="stylesheet" href="/css/header.css">
<link rel="stylesheet" href="/css/change-pwd.css">
<link rel="stylesheet" href="/css/footer.css">
<script src="http://code.jquery.com/jquery-latest.min.js"></script>
</head>

<body>
	<!-- 전체 틀 -->
	<div id="container">
		<!-- 상단 -->
		<jsp:include page="include/header.jsp" />

		<jsp:include page="include/logout.jsp" />

		<!-- 내정보 타이틀 박스 -->
		<section id="sub-box">
			<div class="sub-title">
				<h2>내정보</h2>
			</div>
		</section>

		<!-- 메인 컨텐츠 -->
		<main>
			<nav class="info-nav">
				<ul class="nav-menu">
					<li><a href="#">포인트</a></li>
					<li><a href="#">쿠폰함</a></li>
					<li><a href="#">예약 내역</a></li>
					<li><a href="/user/info" id="user-page">내 정보 관리</a></li>
					<li><a href="#">여기어때 상품권 잔액 조회</a></li>
				</ul>
			</nav>

			<div class="information">
				<section class="password-info">

					<strong>비밀번호 변경</strong>

					<div class="password-detail">
						<b>기존 비밀번호</b>
						<div class="ip-border">
							<input type="password" class="original-pwd pwd-ip"
								placeholder="기존 비밀번호를 입력해 주세요.">
						</div>
						<label class="msg"></label>
					</div>

					<div class="password-detail">
						<b>새 비밀번호</b>
						<div class="ip-border">
							<input type="password" class="new-pwd pwd-ip"
								placeholder="비밀번호(최소 8자 이상)">
						</div>
						<label class="msg"></label>
					</div>

					<div class="password-detail">
						<b>새 비밀번호 확인</b>
						<div class="ip-border">
							<input type="password" class="new-repwd pwd-ip"
								placeholder="변경할 비밀번호를 재입력해 주세요.">
						</div>
						<label class="msg"></label>
					</div>

					<p class="change-user-info">
						<a href="/user/info">내 정보 수정</a>
					</p>

					<button type="button" class="change-pwd-btn">변경</button>

					<div class="sign-out-btn">
						<p>여기어때를 이용하고 싶지 않으신가요?</p>
						<a href="#" id="logout">로그아웃</a> <a href="#" id="delete">회원탈퇴</a>
					</div>
				</section>
			</div>
		</main>

		<jsp:include page="include/delete.jsp" />

		<!-- 하단 -->
		<jsp:include page="include/footer.jsp" />
	</div>

	<script src="/js/header.js"></script>
	<script src="/js/change-pwd.js"></script>
	<script src="https://kit.fontawesome.com/364bcbe9ac.js"
		crossorigin="anonymous"></script>
</body>

</html>