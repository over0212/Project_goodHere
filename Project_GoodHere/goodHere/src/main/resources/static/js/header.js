const moreBtn = document.querySelector('.more-btn');
const moreMenu = document.querySelector('.more-menu');
const subUserInfo = document.querySelector('.sub-user-info');
const userMenu = document.querySelector('.user-menu');

// 로그아웃
const logoutBtn = document.querySelectorAll('#logout');
const logoutWindow = document.querySelector('.modal');
const cancel_logout = document.querySelector('.cancel-logout');
const ok_logout = document.querySelector('.ok-logout');

/* 헤더의 하위 메뉴 */
$(document).ready(function(){
	$(moreBtn).mouseenter(function(){
		$(moreMenu).stop().show();
	});
	
	$(moreBtn).mouseleave(function(){
		$(moreMenu).stop().hide();
	});
	
	$(subUserInfo).mouseenter(function(){
		$(userMenu).stop().show();
	});
	
	$(subUserInfo).mouseleave(function(){
		$(userMenu).stop().hide();
	});
});

// 로그아웃 창
for(let i = 0; i < logoutBtn.length; i++){
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