<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="sec"
	uri="http://www.springframework.org/security/tags"%>

<sec:authorize access="isAuthenticated()">
	<sec:authentication property="principal" var="principal" />
</sec:authorize>

<div class="modal">
	<div class="logout-window">
		<div class="logout-text">로그아웃 하시겠습니까?</div>
		<div class="logout-btns">
			<button type="button" class="cancel-logout">취소</button>
			<button type="button" class="ok-logout">로그아웃</button>
		</div>
	</div>
</div>