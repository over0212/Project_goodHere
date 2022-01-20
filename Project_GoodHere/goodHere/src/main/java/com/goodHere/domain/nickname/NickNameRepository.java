package com.goodHere.domain.nickname;

import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface NickNameRepository {
	
	public String chooseNickName();
	
}
