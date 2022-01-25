const pwd_ip = document.querySelectorAll('.pwd-ip');
const msg = document.querySelectorAll('.msg');
const changePwdBtn = document.querySelector('.change-pwd-btn');

/* 텍스트 지우기 */
function clearMsgText(msg) {
	if (msg.textContent != '') {
		msg.textContent = '';
	}
}

let pwdTotalFlag = {
	originPwdFlag: false,
	newPwdFlag: false,
	newRePwdFlag: false
}

for (let i = 0; i < pwd_ip.length; i++) {

	pwd_ip[i].onkeyup = () => {
		// 기존 비밀번호
		checkInput(i);
		checkFlag();
	}
}

changePwdBtn.onclick = () => {
	let passwordObj = {
		'originPassword': pwd_ip[0].value,
		'newPassword': pwd_ip[2].value
	}
	$.ajax({
		type: "patch",
		url: "/change/password",
		contentType: "application/json; charset=UTF-8",
		data: JSON.stringify(passwordObj),
		dataType: "text",
		success: function(data) {
			changePasswordMsg(data);
		},
		error: function() {
			alert('비동기 처리 오류!');
		}
	});
}

function changePasswordMsg(data) {
	let passwordData = JSON.parse(data);
	if (passwordData.code == 460) {
		alert(
			'유효성 검사 오류 : ' + '\n' +
			'오류코드 : ' + passwordData.code + '\n' +
			'오류 내용 : ' + passwordData.note
		);
		location.reload();
	} else if (passwordData.code == 470) {
		alert(
			'중복 오류' + '\n' +
			'오류 코드 : ' + passwordData.code + '\n' +
			'오류 내용 : ' + passwordData.note
		);
		location.replace("/user/info");
	} else if (passwordData.code == 200) {
		location.replace("/user/info");
	}
}

function checkFlag() {
	changePwdBtn.style.pointerEvents = 'none';
	changePwdBtn.style.backgroundColor = '#eeeeee';
	changePwdBtn.style.color = 'd1cfcf';

	if (pwdTotalFlag.originPwdFlag == true && pwdTotalFlag.newPwdFlag == true &&
		pwdTotalFlag.newRePwdFlag == true) {
		changePwdBtn.style.pointerEvents = 'auto';
		changePwdBtn.style.backgroundColor = '#f7323f';
		changePwdBtn.style.color = 'white';
	}
}

function checkInput(indexNumber) {
	// 기존 비밀번호 확인
	if (indexNumber == 0) {
		clearMsgText(msg[indexNumber]);
		pwdTotalFlag.originPwdFlag = passwordCheck(pwd_ip[indexNumber].value, indexNumber);

		// 새 비밀번호
	} else if (indexNumber == 1) {
		clearMsgText(msg[indexNumber]);
		pwdTotalFlag.newPwdFlag = passwordCheck(pwd_ip[indexNumber].value, indexNumber);

		if (pwdTotalFlag.newPwdFlag == true) {
			clearMsgText(msg[indexNumber]);
			newpasswordCheck(pwd_ip[indexNumber].value, pwd_ip[2].value, indexNumber);
			pwdTotalFlag.newRePwdFlag = false;
		}

		// 새 비밀번호 확인
	} else {
		clearMsgText(msg[1]);
		clearMsgText(msg[indexNumber]);
		pwdTotalFlag.newRePwdFlag = newpasswordCheck(pwd_ip[1].value, pwd_ip[indexNumber].value, indexNumber);
		if (pwd_ip[1].value != pwd_ip[2].value) {
			clearMsgText(msg[indexNumber]);
			msg[indexNumber].textContent = '새 비밀번호와 다릅니다. 다시 입력 바랍니다.';
			pwdTotalFlag.newRePwdFlag = false;
		} else {
			clearMsgText(msg[indexNumber]);
			pwdTotalFlag.newRePwdFlag = true;
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

// 비밀번호 정규식
function passwordCheck(password, indexNumber) {

	var checkNumber = password.search(/[0-9]/g);
	var checkEnglish = password.search(/[a-z]/ig);

	if (isEmpty(password) == true) {
		if (/(\w)\1\1\1/.test(password)) {
			msg[indexNumber].textContent = '같은 문자를 4번 이상 사용하실 수 없습니다.';
			return false;
		}
		if (checkNumber < 0 || checkEnglish < 0) {
			msg[indexNumber].textContent = "숫자와 영문자를 혼용하여야 합니다.";
			return false;
		}
		if (!/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/.test(password)) {
			msg[indexNumber].textContent = '숫자+영문자+특수문자 조합으로 8자리 이상 사용해야 합니다.';
			return false;
		}
		return true;

	} else {
		msg[indexNumber].textContent = '비밀번호를 입력해주세요 !';
		return false;
	}
}

function newpasswordCheck(newPwdValue, reNewPwdValue, indexNumber) {
	if (newPwdValue != reNewPwdValue) {
		msg[indexNumber].textContent = '입력한 비밀번호를 확인해주세요.';
		return false;
	} else {
		clearMsgText(msg[indexNumber]);
		return true;
	}
}