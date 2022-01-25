package com.goodHere.web.service;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.goodHere.config.auth.PrincipalDetails;
import com.goodHere.domain.nickname.NickNameRepository;
import com.goodHere.domain.user.User;
import com.goodHere.domain.user.UserRepository;
import com.goodHere.web.model.reqDto.passwordReqDto;
import com.goodHere.web.model.resDto.PasswordResDto;

import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
@Service
public class SignServiceImpl implements SignService {

	private final NickNameRepository nickNameRepository;
	private final UserRepository userRepository;

	@Override
	public String chooseNickName() {
		return nickNameRepository.chooseNickName().toString();
	}

	// 닉네임
	@Override
	public int updateNickName(String email, String username) {
		User user = User.builder().email(email).username(username).build();
		int checkFlag = userRepository.userNickNameCheck(username);
		int resultFlag = userRepository.changeNickname(user);
		if (checkFlag == 0) {
			return resultFlag;
		}
		return 2;
	}

	// 예약자
	@Override
	public int updateBookerName(String email, String booker) {
		User user = User.builder().email(email).booker(booker).build();
		int checkFlag = userRepository.userBookerNameCheck(booker);
		int resultFlag = userRepository.changeBookerName(user);
		if (checkFlag == 0) {
			return resultFlag;
		}
		return 2;
	}

	// 폰번호
	@Override
	public int updatePhoneNumber(String email, String phone) {
		User user = User.builder().email(email).phone(phone).build();
		return userRepository.changePhoneNumber(user);
	}

	public boolean passwordEncoder(String password, String principalPassword) {
		BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
		// matches(평문화된 비밀번호[전달받은 암호], 암호화된 비밀번호)
		return encoder.matches(password, principalPassword);
	}

	@Override
	public PasswordResDto updatePassword(PrincipalDetails principalDetails, passwordReqDto passwordReqDto) {
		boolean originPassword = passwordEncoder(passwordReqDto.getOriginPassword(), principalDetails.getPassword());
		boolean newPassword = passwordEncoder(passwordReqDto.getNewPassword(), principalDetails.getPassword());
		PasswordResDto passwordResDto = new PasswordResDto();

		// 기존 비밀번호와 다를 때
		if (originPassword == false) {
			passwordResDto.setCode(460);
			passwordResDto.setNote("기존의 비밀번호와 다릅니다. 다시 입력해주세요.");
		} else if (newPassword == true) {
			passwordResDto.setCode(470);
			passwordResDto.setNote("기존의 비밀번호와 같습니다.");
		} else {
			User user = passwordReqDto.toEntity(principalDetails.getUser().getEmail());
			int resultFlag = userRepository.changePassword(user);
			if (resultFlag == 1) {
				passwordResDto.setCode(200);
				passwordResDto.setNote("비밀번호를 성공적으로 변경하였습니다.");
				principalDetails.getUser().setPassword(user.getPassword());
			}
		}
		return passwordResDto;
	}
}
