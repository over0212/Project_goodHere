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

for (let i = 0; i < updateBtn.length; i++) {
	updateBtn[i].onclick = () => {
		
		for (let j = 0; j < updateInfo.length; j++) {
			if (i == j) {
				updateBtn[i].style.display = 'none';
				updateInfo[j].style.display = 'flex';
				hideWindow(j);
				updateNickName(j);
				updateUserInfo(j);
			}
		}
	}
}

function hideWindow(ipNumber) {
	cancelBtn[ipNumber].onclick = () => {
		updateInfo[ipNumber].style.display = 'none';
		updateBtn[ipNumber].style.display = 'block';
	}
}

function updateUserInfo(ipNumber) {
	let username = updateInput[ipNumber].value;
	okBtn[ipNumber].onclick = () => {
		$.ajax({
			type: "patch",
			url: "/change/nickname",
			contentType: "application/json; charset=UTF-8",
			data: JSON.stringify(username),
			dataType: "text",
			success: function(data) {
				let okNickName = JSON.parse(data);
					updateInput[ipNumber].value = data;
					location.reload();
					//updateBtn[ipNumber].style.display = 'block';
					//updateInfo[ipNumber].style.display = 'none';
			},
			error: function() {
				alert('비동기 처리 오류!');
			}
		});
	}
}

function updateNickName(indexNum) {
	updateInput[indexNum].value = '';
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