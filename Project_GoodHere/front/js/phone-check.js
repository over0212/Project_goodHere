const check_sms = document.querySelector('.check-sms'); // sms form
const phone = document.querySelector('.phone'); // phone input
const sms = document.querySelector('.sms'); // sms input
const sendNumberBtn = document.querySelector('.send-number'); // 인증번호 발송 btn
const receiveSMSBtn = document.querySelector('.receive-sms'); // 인증번호 확인 btn

// 인증번호를 받기 전까지 숨겨놓는다.
check_sms.style.display = 'none';

let checkNumberResult = false;

phone.onkeyup = () => {
    fn_press_kor(phone); // 한글이 입력되지 않게 설정
    fn_press(phone); // 숫자만 입력할 수 있게 설정
    if (phone.value.length == 11 && numberValidator(phone.value)) {
        sendNumberBtn.style.backgroundColor = '#ff0055';
        checkNumberResult = true;

    } else {
        sendNumberBtn.style.backgroundColor = '#cccccc';
        checkNumberResult = false;
    }
}

let smsCode = "";

sendNumberBtn.onclick = () => {
    if (checkNumberResult == true) {
        $.ajax({
            type: "get",
            url: "/check/sendSMS",
            data: {
                "phone": phone.value
            },
            dataType: "text",
            success: function (data) {
                check_sms.style.display = 'flex';
                smsTimer;
                alert(data);
                smsCode = data;
            },
            error: function () {
                alert('비동기 통신 오류!');
            }
        });
    }
}

/* 인증번호 */
let checkNumberSMS = false;

sms.onkeyup = () => {
    fn_press_kor(sms); // 한글이 입력되지 않게 설정
    fn_press(sms); // 숫자만 입력할 수 있게 설정
    if (sms.value.length == 4) {
        receiveSMSBtn.style.backgroundColor = '#ff0055';
        checkNumberSMS = true;

    } else {
        receiveSMSBtn.style.backgroundColor = '#cccccc';
        checkNumberSMS = false;
    }
}

receiveSMSBtn.onclick = () => {
    smsObj = sms.value;
    smsFlag = false;
    if (checkNumberSMS == true && smsCode == smsObj) {
        alert('인증 성공');
        smsFlag = true;
        location.replace('/user/sign-up?phone=' + phone.value); // 회원가입 페이지 이동

    } else {
        alert('인증 실패!');
        sendNumberBtn.style.backgroundColor = '#ff0055';
        check_sms.style.display = 'none';
        return;
    }

}

/* 폰 번호 유효성 검사 */
function numberValidator(phone) {
    var check_number = /^[0-9]{2,3}[0-9]{3,4}[0-9]{4}/;
    if (check_number.test(phone)) {
        return true;
    } else {
        return false;
    }
}

/* 숫자만 입력할 수 있게 */
function fn_press(event, type) {
    if (type == 'numbers') {
        if (event.keyCode < 48 || event.keyCode > 57) {
            return false;
        }
    }
}

/* 한글은 입력할 수 없게(좌, 우 방향키, 백스페이스, 딜리트, 탭키는 예외) */
function fn_press_kor(obj) {
    if (window.event.keyCode == 8 || window.event.keyCode == 9 || window.event.keyCode == 37 ||
        window.event.keyCode == 39 || window.event.keyCode == 46) {
        return;
    }
    obj.value = obj.value.replace(/[\a-zㄱ-ㅎㅏ-ㅣ가-힣]/g, '');
}

/* 타이머 3분 설정*/
const timer = document.querySelector('#timer');
let time = 180; // 3분 설정
let min = "";
let sec = "";

let smsTimer = setInterval(function () {
    min = parseInt(time / 60);
    sec = time % 60;

    timer.innerHTML = min + "분" + sec + "초";
    time--;

    if (time < 0) {
        clearInterval(smsTimer);
        timer.innerHTML = '';
        check_sms.style.display = 'none';
    }
}, 1000);

