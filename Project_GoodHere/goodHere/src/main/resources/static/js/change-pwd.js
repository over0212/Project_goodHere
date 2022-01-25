const origin_pwd = document.querySelector('.originnal-pwd');
const new_pwd = document.querySelector('.new-pwd');
const new_repwd = document.querySelector('.new-repwd');
const pwd_ip = document.querySelectorAll('#pwd-ip');
const msg = document.querySelectorAll('.msg');
const changePwdBtn = document.querySelector('.change-pwd-btn');

/* 텍스트 지우기 */
function clearMsgText(msg) {
	if (msg.textContent != '') {
		msg.textContent = '';
	}
}

for (let i = 0; i < pwd_ip.length; i++) {
	pwd_ip[i].onkeyup = () => {
		// 기존 비밀번호
		if (i == 0) {


			// 새 비밀번호
		} else if (i == 1) {


			// 새 비밀번호 확인
		} else {


		}

	} // end of onkeyup
} // end of for






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