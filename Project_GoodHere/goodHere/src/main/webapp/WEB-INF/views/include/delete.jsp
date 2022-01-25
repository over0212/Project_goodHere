<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="sec"
	uri="http://www.springframework.org/security/tags"%>

<sec:authorize access="isAuthenticated()">
	<sec:authentication property="principal" var="principal" />
</sec:authorize>

<div class="delete-modal">
	<div class="delete-window">
		<div class="delete-text">회원탈퇴 하시겠습니까?</div>
		<div class="delete-btns">
			<button type="button" class="cancel-delete">취소</button>
			<button type="button" class="ok-delete">회원탈퇴</button>
		</div>
	</div>
</div>