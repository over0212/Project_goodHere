// 모든 수정 버튼
const updateBtn = document.querySelectorAll('.update-btn');
// 모든 숨겨진 창
const updateInfo = document.querySelectorAll('.update-info');
// 모든 취소 버튼
const cancelBtn = document.querySelectorAll('.cancel-btn');
// 모든 수정 버튼
const okBtn = document.querySelectorAll('.ok-btn');
// 수정 시 모든 input
const updateInput = document.querySelectorAll('.update-ip');
const changeNickBtn = document.querySelector('.change-nick-btn');
const sendSmsBtn = document.querySelector('.send-sms-btn');
const check_sms = document.querySelector('.check-sms'); // sms form
const sms = document.querySelector('.sms');
const receiveSMSBtn = document.querySelector('.receive-sms');

for (let i = 0; i < updateBtn.length; i++) {
	updateBtn[i].onclick = () => {

		for (let j = 0; j < updateInfo.length; j++) {
			if (i == j) {
				updateBtn[i].style.display = 'none';
				updateInfo[j].style.display = 'flex';
				hideWindow(j);
				updateNickName(j);
				changPhoneNumber(j);
				updateUserInfo(j);
			}
			// 인증번호 창은 번호를 입력 전까지 숨겨놓는다.
			check_sms.style.display = 'none';
		}
	}
}

let checkNumberResult = false;
let smsResult = false;

function hideWindow(ipNumber) {
	cancelBtn[ipNumber].onclick = () => {
		updateInfo[ipNumber].style.display = 'none';
		updateBtn[ipNumber].style.display = 'block';
	}
}

function updateUserInfo(ipNumber) {
	// 닉네임 수정
	if (ipNumber == 0) {
		okBtn[ipNumber].onclick = () => {
			let username = updateInput[ipNumber].value;
			$.ajax({
				type: "patch",
				url: "/change/nickname",
				contentType: "application/json; charset=UTF-8",
				data: JSON.stringify(username),
				dataType: "text",
				success: function(data) {
					if (data == 1) {
						alert('수정되었습니다.');
						location.reload();
					}
				},
				error: function() {
					alert('비동기 처리 오류!');
				}
			});
		}

		// 예약자 이름 수정
	} else if (ipNumber == 1) {
		okBtn[ipNumber].onclick = () => {
			let booker = updateInput[ipNumber].value;
			$.ajax({
				type: "patch",
				url: "/change/booker",
				contentType: "application/json; charset=UTF-8",
				data: JSON.stringify(booker),
				dataType: "text",
				success: function(data) {
					if (data == 1) {
						alert('수정되었습니다.');
						location.reload();
					}
				},
				error: function() {

				}
			});
		}

		// 휴대폰 번호
	} else if (ipNumber == 2) {
		okBtn[ipNumber].onclick = () => {
			let phone = updateInput[ipNumber].value;
			if (smsFlag == true) {
				$.ajax({
					type: "patch",
					url: "/change/phone",
					contentType: "application/json; charset=UTF-8",
					data: JSON.stringify(phone),
					dataType: "text",
					success: function(data) {
						if (data == 1) {
							alert('수정되었습니다.');
							location.replace("/user/info");
						}
					},
					error: function() {
						alert('비동기 처리 오류!');
					}
				});
			}
		}
	}
}


function updateNickName(indexNum) {
	changeNickBtn.onclick = () => {
		$.ajax({
			type: "get",
			url: "/choose/nickname",
			dataType: "text",
			async: false,
			success: function(data) {
				updateInput[indexNum].value = data;
			},
			error: function() {
				alert('비동기 처리 오류!');
			}
		});
	}
}

function changPhoneNumber(indexNumber) {
	updateInput[indexNumber].onkeyup = () => {
		if (indexNumber == 2) {
			fn_press_kor(updateInput[indexNumber]); // 한글이 입력되지 않게 설정
			fn_press(updateInput[indexNumber]); // 숫자만 입력할 수 있게 설정
			if (updateInput[indexNumber].value.length == 11 & numberValidator(updateInput[indexNumber].value)) {
				sendSmsBtn.style.backgroundColor = '#ff0055';
				checkNumberResult = true;
			} else {
				sendSmsBtn.style.backgroundColor = '#ccccccc';
				checkNumberResult = false;
			}
		}
	}

	let smsCode = '';

	sendSmsBtn.onclick = () => {
		if (checkNumberResult == true) {
			$.ajax({
				type: "get",
				url: "/check/sendSMS",
				data: {
					"phone": updateInput[indexNumber].value
				},
				dataType: "text",
				success: function(data) {
					if (data == "1") {
						alert("이미 존재하는 번호입니다.");
					} else {
						check_sms.style.display = 'flex';
						smsTimer;
						smsCode = data;
					}
				},
				error: function() {
					alert('비동기 통신 오류!');
				}
			});
		} else {
			alert('휴대폰 번호를 확인해주세요');
		}
	}

	/* 인증 */
	let checkNumberSMS = false;

	if (check_sms.style.display = 'flex') {
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
			if (checkNumberSMS == true && smsCode == smsObj) {
				alert('인증 성공');
				smsFlag = true;

			} else {
				alert('인증 실패!');
				sendNumberBtn.style.backgroundColor = '#ff0055';
				check_sms.style.display = 'none';
				smsFlag = false;
				return;
			}
		}

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

let smsTimer = setInterval(function() {
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

