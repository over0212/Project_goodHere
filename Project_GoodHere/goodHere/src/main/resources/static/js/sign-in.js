const login_form = document.querySelector('.login-form');
const ip_img = document.querySelectorAll('.login-form i')
const email_border = document.querySelector('.email-ip');
const password_border = document.querySelector('.password-ip');
const email = document.querySelector('.email');
const password = document.querySelector('.password');
const login_btn = document.querySelector('.login-btn');
const inputAll = document.querySelectorAll('input');
const msg = document.querySelectorAll('.msg'); // label message

/* 텍스트 지우기 */
function clearMsgText(msg) {
	if (msg.textContent != '') {
		msg.textContent = '';
	}
}

email.addEventListener('click', function() {
	email.onfocus = () => {
		email_border.style.border = '1px solid #666';
		ip_img[0].style.opacity = 0.7;
	}

	email.onblur = () => {
		email_border.style.border = '1px solid #d0d0d0';
		ip_img[0].style.opacity = 0.4;
	}

});

password.addEventListener('click', function() {
	password.onfocus = () => {
		password_border.style.border = '1px solid #666';
		ip_img[1].style.opacity = 0.7;
	}

	password.onblur = () => {
		password_border.style.border = '1px solid #d0d0d0';
		ip_img[1].style.opacity = 0.4;
	}

});

// 로그인 버튼 클릭 시
login_btn.onclick = () => {
	let signInObj = {
		'email' : inputAll[0].value,
		'password' : inputAll[1].value
	}
	$.ajax({
		type: "post",
		url: "/sign-in",
		contentType: "application/json; charset=UTF-8",
		data: JSON.stringify(signInObj),
		dataType: "text"
	})
}

for (let i = 0; i < inputAll.length; i++) {
	inputAll[i].onkeyup = () => {
		if (i == 0) {
			clearMsgText(msg[i]);
			emailCheck(inputAll[i].value, i);
		} else if (i == 1) {
			clearMsgText(msg[i]);
			passwordCheck(inputAll[i].value, i);
		}
	}
}

// input 값의 유무 체크
function isEmpty(str) {
	if (typeof str == 'undefined' || str == null || str == '') {
		return false;
	} else {
		return true;
	}
}

//이메일 정규식 체크
function emailCheck(email, ipNumber) {
	var check_email = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
	if (isEmpty(email) == true) {
		if (check_email.test(email)) {
			return true;
		} else {
			msg[ipNumber].textContent = '잘못된 이메일 형식입니다.';
			return false;
		}
	} else {
		msg[ipNumber].textContent = '이메일을 입력해주세요.';
	}
}

// 비밀번호 정규식
function passwordCheck(password, ipNumber) {

	var checkNumber = password.search(/[0-9]/g);
	var checkEnglish = password.search(/[a-z]/ig);

	if (isEmpty(password) == true) {
		if (/(\w)\1\1\1/.test(password)) {
			msg[ipNumber].textContent = '같은 문자를 4번 이상 사용하실 수 없습니다.';
			return false;
		}
		if (checkNumber < 0 || checkEnglish < 0) {
			msg[ipNumber].textContent = "숫자와 영문자를 혼용하여야 합니다.";
			return false;
		}
		if (!/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/.test(password)) {
			msg[ipNumber].textContent = '숫자+영문자+특수문자 조합으로 8자리 이상 사용해야 합니다.';
			return false;
		}
		return true;
		
	} else {
		msg[ipNumber].textContent = '비밀번호를 입력해주세요.';
	}
}