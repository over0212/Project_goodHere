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
    <title>Document</title>
    <link rel="stylesheet" href="/css/reset.css">
    <link rel="stylesheet" href="/css/header.css">
    <link rel="stylesheet" href="/css/motel-dtl.css">
    <link rel="stylesheet" href="/css/footer.css">
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
                    <ul class="big-pics">
                        <li><img src="images/994cc0a70268737f0847f491aa4ec699.jfif" alt=""></li>
                    </ul>

                    <div class="small-place-pics">
                        <!-- left icon -->
                        <div></div>
                        <!-- images -->
                        <ul class="small-pics">
                            <li><img src="images/994cc0a70268737f0847f491aa4ec699.jfif" alt=""></li>
                            <li><img src="images/994cc0a70268737f0847f491aa4ec699.jfif" alt=""></li>
                            <li><img src="images/994cc0a70268737f0847f491aa4ec699.jfif" alt=""></li>
                            <li><img src="images/994cc0a70268737f0847f491aa4ec699.jfif" alt=""></li>
                        </ul>
                        <!-- right icon -->
                        <div></div>
                    </div>
                </div>

                <!-- 정보(right) -->
                <div class="place-simple-info">
                    <h2>연산 호텔 유아인</h2>
                    <!-- recommend & review -->
                    <div class="place-recommend">
                        <span class="recommend">추천해요</span>
                        <span class="review-text">리뷰 1,777개</span>
                    </div>
                    <p class="address">부산 연제구 연산동 731-9</p>
                    <!-- benefit -->
                    <div class="benefits">
                        <span>예약취소가능</span><span>혜택존</span>
                    </div>
                    <div class="event-message">
                        <ul>
                            <li>전 객실 넷플릭스고사양PC룸빠른입실늦은퇴실</li>
                        </ul>
                    </div>
                </div>
            </section>

            <!-- 숙소의 정보 버튼들 -->
            <section class="place-info-btns">
                <button type="button" class="room-reserve"><span>객실안내/예약</span></button>
                <button type="button" class="room-info"><span>숙소정보</span></button>
                <button type="button" class="review"><span>리뷰</span></button>
            </section>

            <!-- room detail -->
            <section class="place-detail">
                <div class="date-border">
                    <span>From</span> <input type="text" id="datepicker" value=""> <br>
                    <span>To</span> <input type="text" id="datepicker2" value="">
                </div>

                <div class="room-detail">
                    <!-- 이미지 -->
                    <div class="room-image">
                        <img src="images/3a2bd4e00f857462b7f52145f342dd8d.jpg" alt="">
                    </div>

                    <!-- 객실 정보 -->
                    <div class="room-condition">
                        <strong class="room-title">스탠다드(넷플릭스,일반PC,랜덤객실)</strong>

                        <div class="room-condition-info">
                            <!-- 대실 -->
                            <div class="time-room">
                                <strong>대실</strong>
                                <div class="price">
                                    <p>20,000원</p>
                                </div>
                                <ul class="time-set">
                                    <li><span>마감시간</span><span>24시까지</span></li>
                                    <li><span>이용시간</span><span>최대 4시간</span></li>
                                </ul>
                                <button type="button" class="ask-btn">숙소에 문의 하세요</button>
                            </div>

                            <!-- 숙박 -->
                            <div class="day-room">
                                <strong>숙박</strong>
                                <div class="price">
                                    <p>42,000원</p>
                                </div>
                                <ul class="time-set">
                                    <li><span>입실시간</span><span>18시 부터</span></li>
                                    <li><span>퇴실시간</span><span>익일 12시</span></li>
                                </ul>
                                <button type="button" class="reserve-btn">숙박 예약</button>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </main>
        <jsp:include page="include/delete.jsp" />
		<!-- 하단 -->
		<jsp:include page="include/footer.jsp" />
    </div>
    
   	<script src="/js/header.js"></script>
    <script src="https://kit.fontawesome.com/364bcbe9ac.js" crossorigin="anonymous"></script>
</body>

</html>