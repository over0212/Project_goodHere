const email = document.querySelector('#email'); // email ip
const password = document.querySelector('#password'); // password ip
const re_password = document.querySelector('#re-pwd'); // re-pwd ip
const username = document.querySelector('.nickname'); // nickname ip
const sign_up_ip = document.querySelectorAll('.sign-up-ip'); // 전체 ip
const phone = document.querySelector('.phone'); // hidden ip
const msg = document.querySelectorAll('.msg'); // label message
const signUpDetail = document.querySelectorAll('.sign-up-detail');
const nickBtn = document.querySelector('.nick-btn'); // choose nickname button
const signUpBtn = document.querySelector('.sign-up-btn'); // sign-up button

/* 텍스트 지우기 */
function clearMsgText(msg) {
    if (msg.textContent != '') {
        msg.textContent = '';
    }
}

for (let i = 0; i < sign_up_ip.length; i++) {
    sign_up_ip[i].onkeyup = () => {
        if (i == 0) {
            clearMsgText(msg[i]);
            emailCheck(email, i);
        } else if (i == 1) {
            clearMsgText(msg[i]);
            passwordCheck(password, i);
        } else {
            clearMsgText(msg[i]);
            if (password.value != re_password.value) {
                msg[2].textContent = '입력한 비밀번호를 확인해주세요.';
            }
        }
    }
}

nickBtn.onclick = () => {
    $.ajax({
        type: "get",
        url: "/choose/nickname",
        dataType: "text",
        success: function (data) {
            alert(username);
            username = data;
        },
        error: function () {
            alert('비동기 처리 오류!');
        }
    })
}

/* 회원가입에 필요한 Data */
let signUpObj = {
    'email': email.value,
    'password': password.value,
    'username': username.value,
    'phone': phone.value
}

signUpBtn.onclick = () => {

}

//이메일 정규식 체크
function emailCheck(email, ipNumber) {
    var check_email = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (check_email.test(email.value)) {
        return true;
    } else {
        msg[ipNumber].textContent = '이메일을 확인해주세요.';
        return false;
    }
}

// 비밀번호 정규식
function passwordCheck(password, ipNumber) {

    var passwordValue = password.value;
    var checkNumber = passwordValue.search(/[0-9]/g);
    var checkEnglish = passwordValue.search(/[a-z]/ig);

    if (!/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/.test(passwordValue)) {
        msg[ipNumber].textContent = '숫자+영문자+특수문자 조합으로 8자리 이상 사용해야 합니다.';
        return false;
    }
    if (checkNumber < 0 || checkEnglish < 0) {
        msg[ipNumber].textContent = "숫자와 영문자를 혼용하여야 합니다.";
        return false;
    }
    if (/(\w)\1\1\1/.test(passwordValue)) {
        msg[ipNumber].textContent = '같은 문자를 4번 이상 사용하실 수 없습니다.';
        return false;
    }
    return true;
}