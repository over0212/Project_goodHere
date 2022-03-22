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
    <title>Document</title>
    <link rel="stylesheet" href="/css/reset.css">
    <link rel="stylesheet" href="/css/header.css">
    <link rel="stylesheet" href="/css/motel-dtl.css">
    <link rel="stylesheet" href="/css/footer.css">
    <script src="http://code.jquery.com/jquery-latest.min.js"></script>
	<script src="https://code.jquery.com/jquery-1.12.4.js"></script>
	<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
	<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
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
            <input type="hidden" id="place_id" value="${place_id }">
                <!-- 사진(left) -->
                <div class="place-pics">
                    <ul class="big-pics">
                        <li></li>
                    </ul>

                    <div class="small-place-pics">
                        <!-- left icon -->
                        <div></div>
                        <!-- images -->
                        <ul class="small-pics">

                        </ul>
                        <!-- right icon -->
                        <div></div>
                    </div>
                </div>

                <!-- 정보(right) -->
                <div class="place-simple-info">
                    <h2></h2>
                    <!-- recommend & review -->
                    <div class="place-recommend">
                        <!-- <span class="recommend">추천해요</span>
                        <span class="review-text">리뷰 1,777개</span> -->
                    </div>
                    <p class="address"></p>
                    <!-- benefit -->
                    <div class="benefits">
                    
                    </div>
                    <div class="event-message">
                        <ul class="message-list">
                        
                        </ul>
                    </div>
                </div>
            </section>

            <!-- 숙소의 정보 버튼들 -->
            <section class="place-info-btns">
                <button type="button" class="room-reserve"><span>객실안내/예약</span></button>
                <button type="button" class="room-info"><span>숙소정보</span></button>
                <button type="button" class="review"><span>리뷰</span></button>
                <%-- <c:if test="${principal.user.email == 'liberty0212@naver.com'}"> --%>
                	<button type="button" class="update-place"><span>숙박업소 정보 수정</span></button>
                <%-- </c:if> --%>
            </section>

            <!-- room detail -->
            <section class="place-detail">
                <div class="date-border">
                    <span>From</span> <input type="text" id="datepicker" value=""> <br>
                    <span>To</span> <input type="text" id="datepicker2" value="">
                </div>

            </section>
        </main>
        <jsp:include page="include/delete.jsp" />
		<!-- 하단 -->
		<jsp:include page="include/footer.jsp" />
    </div>
    
   	<script src="/js/header.js"></script>
   	<script src="/js/date-picker.js"></script>
   	<script src="/js/motel-dtl.js"></script>
    <script src="https://kit.fontawesome.com/364bcbe9ac.js" crossorigin="anonymous"></script>
</body>

</html>