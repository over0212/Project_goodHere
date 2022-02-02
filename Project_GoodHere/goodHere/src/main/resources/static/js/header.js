const moreBtn = document.querySelector('.more-btn');
const moreMenu = document.querySelector('.more-menu');
const subUserInfo = document.querySelector('.sub-user-info');
const userMenu = document.querySelector('.user-menu');

// 로그아웃
const logoutBtn = document.querySelectorAll('#logout');
const logoutWindow = document.querySelector('.logout-modal');
const cancel_logout = document.querySelector('.cancel-logout');
const ok_logout = document.querySelector('.ok-logout');

// 회원탈퇴
const deleteUser = document.querySelectorAll('#delete');
const deleteWindow = document.querySelector('.delete-modal');
const cancel_delete = document.querySelector('.cancel-delete');
const ok_delete = document.querySelector('.ok-delete');

/* 헤더의 하위 메뉴 */
$(document).ready(function() {
	$(moreBtn).mouseenter(function() {
		$(moreMenu).stop().show();
	});

	$(moreBtn).mouseleave(function() {
		$(moreMenu).stop().hide();
	});

	$(subUserInfo).mouseenter(function() {
		$(userMenu).stop().show();
	});

	$(subUserInfo).mouseleave(function() {
		$(userMenu).stop().hide();
	});
});

// 로그아웃 창
for (let i = 0; i < logoutBtn.length; i++) {
	logoutBtn[i].onclick = () => {
		logoutWindow.style.display = 'flex';
	}
}
cancel_logout.onclick = () => {
	logoutWindow.style.display = 'none';
}
ok_logout.onclick = () => {
	location.href = '/logout';
}

/* 회원탈퇴 */
for (let i = 0; i < deleteUser.length; i++) {
	deleteUser[i].onclick = () => {
		deleteWindow.style.display = 'flex';
	}
}

	cancel_delete.onclick = () => {
		deleteWindow.style.display = 'none';
	}

if (deleteWindow.style.display == 'flex') {
	ok_delete.onclick = () => {
		$.ajax({
			type: "delete",
			url: "/user/delete",
			success: function(data) {
				if (data == 1) {
					location.replace("/");
				}
			},
			error: function() {
				alert('비동기 처리 오류!');
			}
		});
	}
}

