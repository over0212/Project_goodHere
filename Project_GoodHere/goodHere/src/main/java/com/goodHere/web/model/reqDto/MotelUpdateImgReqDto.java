package com.goodHere.web.model.reqDto;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MotelUpdateImgReqDto {
	
	private List<MultipartFile> multipartFiles;
	private List<String> origin_imgs;

}
