package com.goodHere.domain.nickname;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class NickName {

	private int adjective_index;
	private String adjective_word;
	private String noun_index;
	private String noun_word;
	
}
