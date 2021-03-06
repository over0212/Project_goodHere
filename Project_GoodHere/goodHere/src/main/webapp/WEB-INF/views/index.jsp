<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags"%>

<sec:authorize access="isAuthenticated()">
	<sec:authentication property="principal" var="principal" />
</sec:authorize>

<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>취향대로 머물다 여기어때</title>
    <link rel="stylesheet" href="/css/reset.css">
    <link rel="stylesheet" href="/css/header.css">
    <link rel="stylesheet" href="/css/index.css">
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
            <section id="contents">
                <!-- 메인 이미지 -->
                <div class="main-img"><img src="/images/mainBanner.png" alt="메인 이미지"></div>

                <!-- main_menu -->
                <div class="main-btns">
                    <ul class="group-icons">

                        <li class="icon">
                            <a href="#">
                                <img src="/icons/motel-icon.png" alt="모텔">
                                <p>모텔</p>
                            </a>
                        </li>

                        <li class="icon">
                            <a href="#">
                                <img src="/icons/hotel-icon.png" alt="호텔">
                                <p>호텔</p>
                            </a>
                        </li>

                        <li class="icon">
                            <a href="#">
                                <img src="/icons/pension-icon.png" alt="펜션">
                                <p>펜션</p>
                            </a>
                        </li>

                        <li class="icon">
                            <a href="#">
                                <img src="/icons/resort-icon.png" alt="리조트">
                                <p>리조트</p>
                            </a>
                        </li>

                        <li class="icon">
                            <a href="#">
                                <img src="/icons/guesthouse-icon.png" alt="캠핑·글램핑">
                                <p>게스트하우스</p>
                            </a>
                        </li>

                        <li class="icon">
                            <a href="#">
                                <img src="/icons/camping-icon.png" alt="캠핑·글램핑">
                                <p>캠핑·글램핑</p>
                            </a>
                        </li>

                        <li class="icon">
                            <a href="#">
                                <img src="/icons/traditionhouse-icon.png" alt="한옥">
                                <p>한옥</p>
                            </a>
                        </li>

                        <li class="icon">
                            <a href="#">
                                <img src="/icons/location-icon.png" alt="내주변">
                                <p>내주변</p>
                            </a>
                        </li>

                        <li class="icon">
                            <a href="#">
                                <img src="/icons/payback-icon.png" alt="페이백">
                                <p>페이백</p>
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- post -->
                <div id="posts">
                    <h2 class="post-title">여기어때 소식</h2>
                    <ul class="post-groups">
                        <li class="post-business">
                            <a href="#">
                                <img src="/images/leftBanner.png" alt="비즈니스">
                                <div class="post-text">
                                    <b>여기어때 비즈니스</b>
                                    <span>출장부터 복지까지 <br> 여기어때 비즈니스로 스마트하게 </span>
                                </div>
                            </a>
                        </li>
                        <li class="post-font">
                            <a href="#">
                                <img src="/images/jalnan.png" alt="잘난서체">
                                <div class="post-text">
                                    <b>여기어때 서체 출시</b>
                                    <span>젊고 당당한 여기어때 잘난체 <br> 지금 다운로드 받으세요!</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>

                <!-- app -->
                <div class="app">
                    <p>앱 다운 받고 <strong>더 많은 혜택</strong> 받으세요</p>
                    <div class="download">
                        <a href="#"><img src="/images/appBanner.png" alt="android"></a>
                        <a href="#"><img src="/images/ios_banner.png" alt="ios"></a>
                    </div>
                </div>

                <!-- event -->
                <div class="event">
                    <h2>이벤트</h2>
                    <div class="event-slides">
                        <a href="#"><img src="/images/slideBanner1.png" alt=""></a>
                        <!--  <a href="#"><img src="/images/slideBanner2.jpg" alt=""></a>
                        <a href="#"><img src="/images/slideBanner3.png" alt=""></a>
                        <a href="#"><img src="/images/slideBanner4.png" alt=""></a>
                        <a href="#"><img src="/images/slideBanner5.png" alt=""></a> -->
                    </div>
                </div>

                <!-- advertisement and guestHouse -->
                <div class="info-menu">
                    <ul class="info-dtl">
                        <li class="advertisement">
                            <a href="#"><img src="/images/Advertisement.png" alt=""></a>
                        </li>
                        <li class="guest-house">
                            <a href="#"><img src="/images/guestHouse.png" alt=""></a>
                        </li>
                    </ul>
                </div>
            </section>
        </main>

        <!-- 하단 -->
        <jsp:include page="include/footer.jsp" />

    </div>
    <script src="/js/header.js"></script>
    <script src="https://kit.fontawesome.com/364bcbe9ac.js" crossorigin="anonymous"></script>
</body>

</html>