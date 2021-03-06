

const email = document.querySelector('#email'); // email ip
const password = document.querySelector('#password'); // password ip
const re_password = document.querySelector('#re-pwd'); // re-pwd ip
const nickName = document.querySelector('.nickname'); // nickname ip
const sign_up_ip = document.querySelectorAll('.sign-up-ip'); // 전체 ip
const phone = document.querySelector('.phone'); // hidden ip
const msg = document.querySelectorAll('.msg'); // label message
const signUpDetail = document.querySelectorAll('.sign-up-detail');
const nickBtn = document.querySelector('.nick-btn'); // choose nickname button
const signUpBtn = document.querySelector('.sign-up-btn'); // sign-up button
const signUpBtnSpan = document.querySelector('.sign-up-btn span');
const inputAll = document.querySelectorAll('input');

/* 텍스트 지우기 */
function clearMsgText(msg) {
	if (msg.textContent != '') {
		msg.textContent = '';
	}
}

let totalFlag = {
	emailFlag: false,
	passwordFlag: false,
	rePasswordFlag: false,
	nickNameFlag: false
}

for (let i = 0; i < sign_up_ip.length; i++) {
	sign_up_ip[i].onkeyup = () => {
		if (i == 0) {
			clearMsgText(msg[i]);
			totalFlag.emailFlag = emailCheck(sign_up_ip[i].value, i);
		} else if (i == 1) {
			clearMsgText(msg[i]);
			totalFlag.passwordFlag = passwordCheck(sign_up_ip[i].value, i);
			if (totalFlag.passwordFlag == true) {
				clearMsgText(msg[i]);
				rePasswordCheck(sign_up_ip[i].value, sign_up_ip[2].value, i);
			}
		} else if (i == 2) {
			clearMsgText(msg[1]);
			clearMsgText(msg[i]);
			rePasswordCheck(sign_up_ip[1].value, sign_up_ip[2].value, i);
		} else if (i == 3) {
			if (sign_up_ip[i].value.length != 0) {
				totalFlag.nickNameFlag = true;
			} else {
				totalFlag.nickNameFlag = false;
			}
		}
	}
}

nickBtn.onclick = () => {
	/* 랜덤 닉네임 설정 */
	totalFlag.nickNameFlag = false;
	$.ajax({
		type: "get",
		url: "/choose/nickname",
		dataType: "text",
		async: false,
		success: function(data) {
			nickName.value = data;
		},
		error: function() {
			alert('비동기 처리 오류!');
		}
	});

	if (nickName.value.length != 0) {
		totalFlag.nickNameFlag = true;
	}
	checkFlag();
}

for (let i = 0; i < inputAll.length; i++) {
	inputAll[i].onblur = () => {
		checkFlag();
	}
}

function checkFlag() {
	// 초기화
	signUpBtn.style.pointerEvents = 'none';
	signUpBtn.style.backgroundColor = '#dde0e4';
	signUpBtn.style.opacity = 0.4;
	signUpBtnSpan.style.color = '#c0bfbf';

	// 모든 Flag 값이 true일 때 submit button 기능 활성화
	if (totalFlag.emailFlag == true && totalFlag.passwordFlag == true &&
		totalFlag.rePasswordFlag == true && totalFlag.nickNameFlag == true) {
		signUpBtn.style.pointerEvents = 'auto';
		signUpBtn.style.backgroundColor = '#ff0055';
		signUpBtn.style.opacity = 1;
		signUpBtnSpan.style.color = 'white';
	}
}

signUpBtn.onclick = () => {
	submit();
}


function submit() {
	/* 회원가입에 필요한 Data */
	let signUpObj = {
		'email': sign_up_ip[0].value,
		'password': sign_up_ip[1].value,
		'username': sign_up_ip[3].value,
		'phone': phone.value
	}
	$.ajax({
		type: "post",
		url: "/user/sign-up",
		contentType: "application/json; charset=UTF-8",
		data: JSON.stringify(signUpObj),
		dataType: "text",
		success: function(data) {
			alert(data);
			signUpValidationMsg(data);
		},
		error: function() {
			alert('비동기 처리 오류!');
		}
	});
}

function signUpValidationMsg(data) {
	let signUpData = JSON.parse(data);
	if (signUpData.code == 400) {
		alert(
			'유효성 검사 오류.' + '\n' +
			'오류 코드' + signUpData.code + '\n' +
			'오류 내용' + '\n' +
			'email' + EmptyBlank(signUpData.data.email) + '\n' +
			'username' + EmptyBlank(signUpData.data.username) + '\n' +
			'password' + EmptyBlank(signUpData.data.password) + '\n' +
			'phone' + EmptyBlank(signUpData.data.phone)
		);
	} else if (signUpData.code == 401) {
		alert(
			'중복 오류' + '\n' +
			'오류 코드 : ' + signUpData.code + '\n' +
			'오류 내용' + '\n' + signUpData.data
		);
	} else if (signUpData.code == 200) {
		alert(signUpData.data);
		location.replace('/login');
	}
}

function EmptyBlank(str) {
	if (typeof str == 'undefined' || str == null || str == '') {
		return '사용가능';
	} else {
		return str;
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
			msg[ipNumber].textContent = '이메일을 확인해주세요.';
			return false;
		}
	} else {
		msg[ipNumber].textContent = '이메일을 확인해주세요.';
		return false;
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
		msg[ipNumber].textContent = '비밀번호를 확인해주세요 !';
		return false;
	}
}

function rePasswordCheck(pwdValue, rePwdValue, ipNumber) {
	if (pwdValue != rePwdValue) {
		msg[ipNumber].textContent = '입력한 비밀번호를 확인해주세요.';
		totalFlag.rePasswordFlag = false;
	} else {
		clearMsgText(msg[ipNumber]);
		totalFlag.rePasswordFlag = true;
	}
}

/* 한글은 입력할 수 있게(좌, 우 방향키, 백스페이스, 딜리트, 탭키는 예외) */
/*function fn_accept_kor(obj) {
	let pattern = /[a-z0-9]|[ \[\]{}()<>?|`~!@#$%^&*-_+=,.;:\"'\\]/g;
	if (window.event.keyCode == 8 || window.event.keyCode == 9 || window.event.keyCode == 37 ||
		window.event.keyCode == 39 || window.event.keyCode == 46) {
		return;
	}
	obj.value = obj.value.replace(pattern, '');
}*/


