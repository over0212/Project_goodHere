<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>로그인 | 여기어때</title>
    <link rel="stylesheet" href="/css/reset.css">
    <link rel="stylesheet" href="/css/sign-in.css">
    <script src="http://code.jquery.com/jquery-latest.min.js"></script>
</head>

<body>
    <div id="container">
        <div class="in-container">

            <!-- logo -->
            <header class="header">
                <a href="/">
                    <h2>여기어때.</h2>
                </a>
            </header>

            <main>
                <!-- sns button -->
                <div id="sns-btns">
                    <button type="button" class="kakao-btn">
                        <!-- <img src="" alt="kakao"> -->
                        <span>카카오톡으로 로그인</span>
                    </button>
                    <button type="button" class="facebook-btn">
                        <!-- <img src="" alt="facebook"> -->
                        <span>Facebook으로 로그인</span>
                    </button>
                    <button type="button" class="naver-btn">
                        <!-- <img src="" alt="naver"> -->
                        <span>네이버로 로그인</span>
                    </button>
                </div>

                <div id="divid-line">
                    <!-- <div class="line"></div> -->
                    <span>또는</span>
                    <!-- <div class="line"></div> -->
                </div>

                <form action="/sign-in" method="post" class="login-form">
                    <div class="email-ip">
                        <i class="fas fa-envelope"></i>
                        <input type="email" class="email" name="username" placeholder="이메일 주소">
                    </div>
                    <label class="msg"></label>

                    <div class="password-ip">
                        <i class="fas fa-lock"></i>
                        <input type="password" class="password" name="password" placeholder="비밀번호">
                    </div>
                    <label class="msg"></label>
                    <button type="submit" class="login-btn"><span>로그인</span></button>
                </form>

                <div class="info-set">
                    <a href="#"><span>비밀번호 재설정</span></a>
                    <span>|</span>
                    <a href="/user/join"><span>회원가입</span></a>
                </div>
            </main>
        </div>
    </div>
    
	<script src="/js/sign-in.js"></script>
    <script src="https://kit.fontawesome.com/364bcbe9ac.js" crossorigin="anonymous"></script>
</body>

</html>