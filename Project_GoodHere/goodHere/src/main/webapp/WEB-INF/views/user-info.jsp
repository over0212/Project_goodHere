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
<title>회원정보수정 | 여기어때</title>
<link rel="stylesheet" href="/css/reset.css">
<link rel="stylesheet" href="/css/header.css">
<link rel="stylesheet" href="/css/user-info.css">
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
				<section class="user-info">
					<div class="user-detail">
						<strong>내 정보 수정</strong> <img src="/icons/user-icon.png" alt="">
						<p class="user-email">${principal.user.email }</p>
					</div>

					<div class="info-detail user-nickname">
						<div class="nickname-detail">
							<b>닉네임</b> <span class="user-nickname">${principal.user.username }</span>
						</div>
						<button type="button" class="update-btn">수정</button>

						<div class="update-info">
							<div class="change-ip">
								<div class="ip-border">
									<input type="text" class="update-ip" value="${principal.user.username }" placeholder="체크인시 필요한 정보입니다.">
								</div>
								<button type="button" class="change-nick-btn">딴거할래요</button>
							</div>
							<div class="change-btns">
								<button type="button" class="ok-btn">수정완료</button>
								<button type="button" class="cancel-btn">수정취소</button>
							</div>
						</div>
					</div>

					<div class="info-detail user-reserve-name">
						<div class="reserve-name-detail">
							<b>예약자 이름</b> <span>${principal.user.booker }</span>
						</div>
						<button type="button" class="update-btn">수정</button>

						<div class="update-info">
							<div class="change-ip">
								<div class="ip-border">
									<input type="text" class="update-ip" value="${principal.user.booker }"
										placeholder="체크인시 필요한 정보입니다.">
								</div>
							</div>
							<div class="change-btns">
								<button type="button" class="ok-btn">수정완료</button>
								<button type="button" class="cancel-btn">수정취소</button>
							</div>
						</div>
					</div>

					<div class="info-detail user-phone">
						<div class="phone-detail">
							<b>휴대폰 번호</b> <span class="user-phone-number">${principal.user.phone }</span>
						</div>
						<p>개인 정보 보호를 위해 내 정보는 모두 안전하게 암호화됩니다.</p>
						<button type="button" class="update-btn">수정</button>

						 <div class="update-info">
							<div class="change-ip">
								<div class="ip-border">
									<input type="text" class="update-ip" maxlength="11" placeholder="체크인시 필요한 정보입니다.">
								</div>
								<button type="button" class="send-sms-btn">인증번호 전송</button>
							</div>
							
							<!-- 인증번호 확인 -->
			                <div class="check-sms">
			                    <b>인증 번호</b>
			                    <div class="check-form">
			                        <div class="sms-ip">
			                            <input type="tel" class="sms" maxlength="4" placeholder="인증번호 입력">
			                            <div id="timer"></div>
			                        </div>
			                        <button type="button" class="receive-sms">확인</button>
			                    </div>
			                </div>
			                
							<div class="change-btns">
								<button type="button" class="ok-btn">수정완료</button>
								<button type="button" class="cancel-btn">수정취소</button>
							</div>
						 </div> 
					</div>

					<p class="change-pwd">
						<a href="/user/password">비밀번호 변경</a>
					</p>

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
	<script src="/js/user-info.js"></script>
	<script src="https://kit.fontawesome.com/364bcbe9ac.js"
		crossorigin="anonymous"></script>
</body>

</html>