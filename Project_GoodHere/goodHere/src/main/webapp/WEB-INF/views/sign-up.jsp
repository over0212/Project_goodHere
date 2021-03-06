<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>회원가입 | 여기어때</title>
    <link rel="stylesheet" href="/css/reset.css">
    <link rel="stylesheet" href="/css/sign-up.css">
    <script src="http://code.jquery.com/jquery-latest.min.js"></script>
</head>

<body>
    <div id="container">
        <div class="in-container">

            <!-- logo -->
            <header id="header">
                <a href="/">
                    <h1>여기어때.</h1>
                </a>
            </header>

            <main id="main">
                <strong>회원가입</strong>
                <div class="sign-up-detail">
                    <b>이메일 아이디</b>
                    <div class="email-ip sign-up-ips">
                        <input type="email" class="sign-up-ip" id="email" placeholder="이메일 주소를 입력해주세요.">
                    </div>
                    <label class="msg"></label>
                </div>

                <div class="sign-up-detail">
                    <b>비밀번호</b>
                    <div class="pwd-ip sign-up-ips">
                        <input type="password" class="sign-up-ip" id="password" placeholder="비밀번호를 입력해주세요.">
                    </div>
                    <label class="msg"></label>
                </div>

                <div class="sign-up-detail">
                    <b>비밀번호 확인</b>
                    <div class="repwd-ip sign-up-ips">
                        <input type="password" class="sign-up-ip" placeholder="다시 비밀번호를 입력해주세요.">
                    </div>
                    <label class="msg"></label>
                </div>

                <div class="sign-up-detail">
                    <b>닉네임</b>
                    <div class="nickname-ip">
                        <div class="nickname-border">
                            <input type="text" class="sign-up-ip nickname">
                        </div>
                        <button type="button" class="nick-btn">딴거할래요</button>
                    </div>
                </div>
				<input type="hidden" class="phone" value="${phone }">
                <button type="button" class="sign-up-btn"><span>가입하기</span></button>
            </main>
        </div>
    </div>

<script src="/js/sign-up.js"></script>
</body>

</html>