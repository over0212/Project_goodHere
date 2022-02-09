<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags"%>

<sec:authorize access="isAuthenticated()">
	<sec:authentication property="principal" var="principal" />
</sec:authorize>

<header id="header">
	<section class="header_in">
		<!-- 메인 로고 -->
		<div class="logo">
			<h1>
				<a href="/">여기어때.</a>
			</h1>
		</div>
		<!-- 상단 메뉴 -->
		<ul class="in_menu">
			<li><a href="#"><i class="fas fa-search"></i></a></li>
			<li><a href="/my-location">내주변</a></li>
			<li><a href="#">예약내역</a></li>
			<li class="more-btn"><a>더보기</a>
				<div class="more-menu">
					<ul>
						<li><a href="#">공지사항</a></li>
						<li><a href="#">이벤트</a></li>
						<li><a href="/insert-place">혁신 프로젝트</a></li>
						<li><a href="#">자주 묻는 질문</a></li>
						<li><a href="#">1:1 문의</a></li>
						<li><a href="#">약관 및 정책</a></li>
					</ul>
				</div>
			</li>
			<c:choose>
				<c:when test="${empty principal.user }">
					<li class="login-btn"><a href="/login">로그인</a></li>
				</c:when>
				<c:otherwise>
					<li class="sub-user-info">
						<a href="#"><img src="/icons/user-icon.png" alt=""></a>
						<div class="user-menu">
							<ul>
								<li><b>${principal.user.username }</b></li>
								<li><a href="/user/info">내정보</a></li>
								<li><a href="#">포인트</a></li>
								<li><a href="#">쿠폰함</a></li>
								<li><a href="#">예약내역</a></li>
								<li><a href="#" id="logout">로그아웃</a></li>
							</ul>
						</div>
					</li>
				</c:otherwise>
			</c:choose>
		</ul>
	</section>
</header>