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
    <link rel="stylesheet" href="/css/phone-check.css">
    <script src="http://code.jquery.com/jquery-latest.min.js"></script>
</head>

<body>
    <div id="container">
        <div class="in-container">

            <header class="header">
                <h2>휴대폰 본인확인</h2>
            </header>

            <main>
                <p class="sub-text">원활한 서비스 제공을 위해, 휴대폰 번호를 입력해주세요.</p>

                <!-- 휴대폰 번호 확인 -->
                <div class="check-number">
                    <strong>휴대폰 번호</strong>
                    <div class="check-form">
                        <div class="tel-ip">
                            <input type="tel" class="phone" maxlength="11" placeholder="휴대폰 번호 입력">
                        </div>
                        <button type="button" class="send-number">인증번호 전송</button>
                    </div>
                </div>

                <!-- 인증번호 확인 -->
                <div class="check-sms">
                    <strong>인증 번호</strong>
                    <div class="check-form">
                        <div class="sms-ip">
                            <input type="tel" class="sms" maxlength="4" placeholder="인증번호 입력">
                            <div id="timer"></div>
                        </div>
                        <button type="button" class="receive-sms">확인</button>
                    </div>
                </div>

            </main>
        </div>
    </div>

<script src="/js/phone-check.js"></script>
</body>

</html>