-- --------------------------------------------------------
-- 호스트:                          127.0.0.1
-- 서버 버전:                        10.6.4-MariaDB - mariadb.org binary distribution
-- 서버 OS:                        Win64
-- HeidiSQL 버전:                  11.3.0.6295
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- goodhere 데이터베이스 구조 내보내기
CREATE DATABASE IF NOT EXISTS `goodhere` /*!40100 DEFAULT CHARACTER SET utf8mb3 */;
USE `goodhere`;

-- 테이블 goodhere.booking_mst 구조 내보내기
CREATE TABLE IF NOT EXISTS `booking_mst` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `booker` varchar(50) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `check_in_time` varchar(50) NOT NULL,
  `check_out_time` varchar(50) NOT NULL,
  `create_date` date NOT NULL,
  `update_date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- 테이블 데이터 goodhere.booking_mst:~0 rows (대략적) 내보내기
DELETE FROM `booking_mst`;
/*!40000 ALTER TABLE `booking_mst` DISABLE KEYS */;
/*!40000 ALTER TABLE `booking_mst` ENABLE KEYS */;

-- 테이블 goodhere.nickname_mst 구조 내보내기
CREATE TABLE IF NOT EXISTS `nickname_mst` (
  `adjective_index` int(11) NOT NULL,
  `adjective_word` varchar(50) NOT NULL,
  `noun_index` int(11) NOT NULL,
  `noun_word` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- 테이블 데이터 goodhere.nickname_mst:~271 rows (대략적) 내보내기
DELETE FROM `nickname_mst`;
/*!40000 ALTER TABLE `nickname_mst` DISABLE KEYS */;
INSERT INTO `nickname_mst` (`adjective_index`, `adjective_word`, `noun_index`, `noun_word`) VALUES
	(1, '가냘픈', 1, '간고등어'),
	(2, '가는', 2, '간디스토마'),
	(3, '가엾은', 3, '간암'),
	(4, '가파른', 4, '간장'),
	(5, '같은', 5, '간헐천'),
	(6, '거센', 6, '갈색여치'),
	(7, '거친', 7, '갈피갈피'),
	(8, '검은', 8, '감격무지'),
	(9, '게으른', 9, '감람색'),
	(10, '게을러빠진', 10, '감자튀김'),
	(11, '게을러터진', 11, '감전사'),
	(12, '고달픈', 12, '갑옷'),
	(13, '고른', 13, '강물'),
	(14, '고마운', 14, '강원고사리'),
	(15, '고운', 15, '개돼지'),
	(16, '고픈', 16, '개새끼'),
	(17, '곧은', 17, '개암나무'),
	(18, '괜찮은', 18, '개자식'),
	(19, '구석진', 19, '개장국'),
	(20, '굳은', 20, '개집'),
	(21, '굵은', 21, '개천절'),
	(22, '귀여운', 22, '거센소리'),
	(23, '그런', 23, '검은색'),
	(24, '그른', 24, '검정색'),
	(25, '그리운', 25, '겨울냉면'),
	(26, '기다란', 26, '겨울철'),
	(27, '기쁜', 27, '겨자색'),
	(28, '긴', 28, '견우화'),
	(29, '깊은', 29, '결혼반지'),
	(30, '깎아지른', 30, '결혼정략'),
	(31, '깨끗한', 31, '경도풍'),
	(32, '나쁜', 32, '경쇠'),
	(33, '나은', 33, '계단공포증'),
	(34, '난데없는', 34, '계란덮밥'),
	(35, '날랜', 35, '계정계좌'),
	(36, '날카로운', 36, '고등학생'),
	(37, '낮은', 37, '고려자기'),
	(38, '너그러운', 38, '고무찰흙'),
	(39, '너른', 39, '고생대'),
	(40, '널따란', 40, '고속버스'),
	(41, '넓은', 41, '고장물'),
	(42, '네모난', 42, '고조선'),
	(43, '노란', 43, '고지랑물'),
	(44, '높은', 44, '고혈단신'),
	(45, '누런', 45, '골동반'),
	(46, '눅은', 46, '곰국'),
	(47, '느닷없는', 47, '곰배팔'),
	(48, '느린', 48, '곱상'),
	(49, '늦은', 49, '곳곳'),
	(50, '다른', 50, '공깃밥'),
	(51, '더러운', 51, '공산주의'),
	(52, '더운', 52, '공통점'),
	(53, '덜된', 53, '공항버스'),
	(54, '동그란', 54, '과로사'),
	(55, '돼먹잖은', 55, '관광버스'),
	(56, '된', 56, '관악기'),
	(57, '둥그런', 57, '광견병'),
	(58, '둥근', 58, '광범위'),
	(59, '뒤늦은', 59, '광역시'),
	(60, '드문', 60, '광주시'),
	(61, '딱한', 61, '광통신'),
	(62, '때늦은', 62, '광합성'),
	(63, '뛰어난', 63, '교과서'),
	(64, '뜨거운', 64, '교자상'),
	(65, '막다른', 65, '교차점'),
	(66, '많은', 66, '구두시험'),
	(67, '매운', 67, '구부렁길'),
	(68, '먼', 68, '구석구석'),
	(69, '멋진', 69, '구정물'),
	(70, '메마른', 70, '구지렁물'),
	(71, '메스꺼운', 71, '국악가요'),
	(72, '모난', 72, '국어사전'),
	(73, '못난', 73, '궁리궁리'),
	(74, '못된', 74, '귀걸이'),
	(75, '못생긴', 75, '귀머거리'),
	(76, '무거운', 76, '귀밑'),
	(77, '무딘', 77, '귀책사유'),
	(78, '무른', 78, '귓가'),
	(79, '무서운', 79, '귓속말'),
	(80, '미끈미끈한', 80, '그날'),
	(81, '미운', 81, '그녀'),
	(82, '바람직스러운', 82, '그다음'),
	(83, '반가운', 83, '그동안'),
	(84, '밝은', 84, '그때'),
	(85, '밤늦은', 85, '그때그때'),
	(86, '보드라운', 86, '그해'),
	(87, '보람찬', 87, '근근부지'),
	(88, '보잘것없는', 88, '금고형'),
	(89, '부드러운', 89, '금메달'),
	(90, '부른', 90, '금속광택'),
	(91, '붉은', 91, '금오신화'),
	(92, '비싼', 92, '금욕주의'),
	(93, '빠른', 93, '금자탑'),
	(94, '빨간', 94, '기념비'),
	(95, '뻘건', 95, '기둥서방'),
	(96, '뼈저린', 96, '기생충'),
	(97, '뽀얀', 97, '기암절벽'),
	(98, '뿌연', 98, '기역니은차례'),
	(99, '새로운', 99, '기원전'),
	(100, '서툰', 100, '기원후'),
	(101, '섣부른', 101, '기자조선'),
	(102, '설운', 102, '긴바늘'),
	(103, '성가신', 103, '김초밥'),
	(104, '센', 104, '김치찌개'),
	(105, '수다스러운', 105, '깃발'),
	(106, '수줍은', 106, '깃털'),
	(107, '쉬운', 107, '까만색'),
	(108, '스스러운', 108, '깡통'),
	(109, '슬픈', 109, '깨소금'),
	(110, '시원찮은', 110, '깨알'),
	(111, '싫은', 111, '깨죽'),
	(112, '싼', 112, '꺼먼색'),
	(113, '쌀쌀맞은', 113, '꼬마잠자리'),
	(114, '쏜살같은', 114, '꽃매미'),
	(115, '쓰디쓴', 115, '꽃샘추위'),
	(116, '쓰린', 116, '꽃씨'),
	(117, '쓴', 117, '꿀꿀이'),
	(118, '아니꼬운', 118, '대중식당'),
	(119, '아닌', 119, '대청'),
	(120, '아름다운', 120, '대추색'),
	(121, '아쉬운', 121, '대하드라마'),
	(122, '아픈', 122, '대한민국'),
	(123, '안된', 123, '덮밥'),
	(124, '안쓰러운', 124, '도랑물'),
	(125, '안타까운', 125, '도로수'),
	(126, '않은', 126, '도막도막'),
	(127, '알맞은', 127, '도망병'),
	(128, '약빠른', 128, '도미빵'),
	(129, '약은', 129, '도주병'),
	(130, '얇은', 130, '독가스'),
	(131, '얕은', 131, '독버섯'),
	(132, '어두운', 132, '독불장군'),
	(133, '어려운', 133, '독수리'),
	(134, '어린', 134, '독약'),
	(135, '언짢은', 135, '독재주의'),
	(136, '엄청난', 136, '돌담'),
	(137, '없는', 137, '돌무덤'),
	(138, '여문', 138, '돌사막'),
	(139, '열띤', 139, '동남아시아'),
	(140, '예쁜', 140, '동메달'),
	(141, '올바른', 141, '동명사'),
	(142, '옳은', 142, '동물도감'),
	(143, '외로운', 143, '동유럽'),
	(144, '우스운', 144, '동쪽'),
	(145, '의심쩍은', 145, '돼지고기'),
	(146, '이른', 146, '돼지고기덮밥'),
	(147, '익은', 147, '돼지꿈'),
	(148, '있는', 148, '된바람'),
	(149, '작은', 149, '된소리'),
	(150, '잘난', 150, '두상화'),
	(151, '잘빠진', 151, '두제곱'),
	(152, '잘생긴', 152, '뒤꿈치'),
	(153, '재미있는', 153, '뒤어금니'),
	(154, '적은', 154, '뒤쪽'),
	(155, '젊은', 155, '뒷모습'),
	(156, '점잖은', 156, '뒷문'),
	(157, '조그만', 157, '뒷산'),
	(158, '좁은', 158, '뒷일'),
	(159, '좋은', 159, '뒷짐결박'),
	(160, '주제넘은', 160, '득실상반'),
	(161, '줄기찬', 161, '들온말'),
	(162, '즐거운', 162, '들음들음'),
	(163, '지나친', 163, '등나무'),
	(164, '지혜로운', 164, '등솔기'),
	(165, '질긴', 165, '등적색'),
	(166, '짓궂은', 166, '디딤돌'),
	(167, '짙은', 167, '딴사람'),
	(168, '짠', 168, '딸기색'),
	(169, '짧은', 169, '땀띠약'),
	(170, '케케묵은', 170, '땀샘'),
	(171, '큰', 171, '땅바닥'),
	(172, '탐스러운', 172, '땅속'),
	(173, '턱없는', 173, '땅속줄기'),
	(174, '푸른', 174, '땅안개'),
	(175, '하나같은', 175, '땅콩과자'),
	(176, '한결같은', 176, '땔감'),
	(177, '흐린', 177, '땔나무'),
	(178, '희망찬', 178, '땟국'),
	(179, '흰', 179, '땟국물'),
	(180, '힘겨운', 180, '떡볶이'),
	(181, '힘찬', 181, '떡집'),
	(182, '걸핏걸핏', 182, '똥거름'),
	(183, '깡동', 183, '똥고집'),
	(184, '깡총깡총', 184, '똥내'),
	(185, '꺼벅', 185, '똥바가지'),
	(186, '꾸정꾸정', 186, '똥오줌'),
	(187, '꾹', 187, '똥파리'),
	(188, '오호호', 188, '뜬소문'),
	(189, '차르륵', 189, '라면떡볶이'),
	(190, '달달', 190, '라면수프'),
	(191, '쌕쌕', 191, '라벤더색'),
	(192, '애옹', 192, '라일락색'),
	(193, '오호호', 193, '라틴어'),
	(194, '쟁쟁', 194, '레닌주의'),
	(195, '아차', 195, '레몬수'),
	(196, '아하', 196, '레이더망'),
	(197, '악', 197, '레코드판'),
	(198, '앗', 198, '렌즈구름'),
	(199, '앞에총', 199, '로마자'),
	(200, '애고', 200, '리겔성'),
	(201, '애고머니', 201, '리놀레산'),
	(202, '애구', 202, '리놀렌산'),
	(203, '애해', 203, '림프관'),
	(204, '애햄', 204, '림프샘'),
	(205, '액', 205, '림프액'),
	(206, '얘', 206, '날짐승'),
	(207, '어따', 207, '남남'),
	(208, '어럽쇼', 208, '남녀노소'),
	(209, '어마', 209, '남실바람'),
	(210, '어마나', 210, '남자색'),
	(211, '어머', 211, '남자아이'),
	(212, '어머나', 212, '남쪽'),
	(213, '어머머', 213, '남폿불'),
	(214, '어머어머', 214, '낭만주의'),
	(215, '어메', 215, '낭송시'),
	(216, '어부바', 216, '낱말'),
	(217, '어뿔싸', 217, '내파음'),
	(218, '어어', 218, '냉동고'),
	(219, '어와', 219, '네모'),
	(220, '어유', 220, '네제곱'),
	(221, '어이', 221, '노끈'),
	(222, '어이구', 222, '노대바람'),
	(223, '어이구나', 223, '노동절'),
	(224, '어이구머니', 224, '노란색'),
	(225, '어이쿠', 225, '녹갈색'),
	(226, '어쩜', 226, '녹조식물'),
	(227, '어허', 227, '녹청색'),
	(228, '어험', 228, '녹황색'),
	(229, '어화', 229, '뇌종양'),
	(230, '얼씨구', 230, '뇌중풍'),
	(231, '에', 231, '눈가'),
	(232, '에구', 232, '눈동자'),
	(233, '에구구', 233, '눈송이'),
	(234, '에구머니', 234, '눈알'),
	(235, '에그', 235, '눈앞'),
	(236, '에그나', 236, '눈인사'),
	(237, '에기', 237, '느낌표'),
	(238, '에꾸', 238, '다갈색'),
	(239, '에꾸나', 239, '다락방'),
	(240, '에끼', 240, '다리뼈'),
	(241, '에이그', 241, '다윈주의'),
	(242, '에쿠', 242, '다음날'),
	(243, '에쿠나', 243, '다팔머리'),
	(244, '에쿠쿠', 244, '다홍치마'),
	(245, '에크', 245, '단거리'),
	(246, '에크나', 246, '단군조선'),
	(247, '에키', 247, '단면적'),
	(248, '에헤', 248, '단성화'),
	(249, '에헴', 249, '단추구멍'),
	(250, '엑', 250, '달걀덮밥'),
	(251, '엥', 251, '달장근'),
	(252, '여보세요', 252, '닭고기'),
	(253, '염병할', 253, '닭고기덮밥'),
	(254, '예시위', 254, '닭똥'),
	(255, '옛', 255, '닭새우'),
	(256, '오호', 256, '닭튀김'),
	(257, '오호통재', 257, '닮은꼴'),
	(258, '와', 258, '담수어'),
	(259, '우아', 259, '담수호'),
	(260, '우우', 260, '담요'),
	(261, '으아', 261, '당근색'),
	(262, '으악', 262, '당나귀'),
	(263, '응가', 263, '당비파'),
	(264, '이런', 264, '닿소리'),
	(265, '인마', 265, '대명사'),
	(266, '맙소사', 266, '대물림'),
	(267, '메롱', 267, '대보름날'),
	(268, '뭐', 268, '대분수'),
	(269, '뭘', 269, '대숲'),
	(270, '빌어먹을', 270, '대오리'),
	(271, '아이고머니', 271, '대장암');
/*!40000 ALTER TABLE `nickname_mst` ENABLE KEYS */;

-- 테이블 goodhere.place_dtl 구조 내보내기
CREATE TABLE IF NOT EXISTS `place_dtl` (
  `place_seq` int(11) NOT NULL AUTO_INCREMENT,
  `place_id` int(11) NOT NULL,
  `room_condition_img` varchar(50) NOT NULL,
  `room_title` varchar(50) NOT NULL,
  `time_room` varchar(50) NOT NULL,
  `time_price` varchar(50) NOT NULL,
  `dead_line` varchar(50) NOT NULL,
  `availability_time` varchar(50) NOT NULL,
  `select_time_flag` int(11) NOT NULL,
  `day_room` varchar(50) NOT NULL,
  `day_price` varchar(50) NOT NULL,
  `check_in_time` varchar(50) NOT NULL,
  `check_out_time` varchar(50) NOT NULL,
  `select_day_flag` int(11) NOT NULL,
  `update_date` date NOT NULL,
  `create_date` date NOT NULL,
  PRIMARY KEY (`place_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;

-- 테이블 데이터 goodhere.place_dtl:~2 rows (대략적) 내보내기
DELETE FROM `place_dtl`;
/*!40000 ALTER TABLE `place_dtl` DISABLE KEYS */;
INSERT INTO `place_dtl` (`place_seq`, `place_id`, `room_condition_img`, `room_title`, `time_room`, `time_price`, `dead_line`, `availability_time`, `select_time_flag`, `day_room`, `day_price`, `check_in_time`, `check_out_time`, `select_day_flag`, `update_date`, `create_date`) VALUES
	(3, 1, '연산 호텔 유아인/63fc9e884a8841bfbae6d827579f44d0.png', '스탠다드', '대실', '30000', '24시까지', '최대 8시간', 0, '숙박', '50000', '오후 12시부터', '익일 11시까지', 2, '2022-03-03', '2022-03-03'),
	(4, 1, '연산 호텔 유아인/607311c58ccf49a6905e22754caf46ee.png', '스탠다드', '대실', '30000', '24시까지', '최대 8시간', 1, '숙박', '50000', '오후 12시부터', '익일 11시까지', 2, '2022-03-03', '2022-03-03');
/*!40000 ALTER TABLE `place_dtl` ENABLE KEYS */;

-- 테이블 goodhere.place_img_mst 구조 내보내기
CREATE TABLE IF NOT EXISTS `place_img_mst` (
  `place_seq` int(11) NOT NULL AUTO_INCREMENT,
  `place_id` int(11) NOT NULL,
  `place_img` varchar(50) NOT NULL,
  PRIMARY KEY (`place_seq`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb3;

-- 테이블 데이터 goodhere.place_img_mst:~4 rows (대략적) 내보내기
DELETE FROM `place_img_mst`;
/*!40000 ALTER TABLE `place_img_mst` DISABLE KEYS */;
INSERT INTO `place_img_mst` (`place_seq`, `place_id`, `place_img`) VALUES
	(17, 1, '연산 호텔 유아인/4153c42f8a3746bea3eaa5c3868dc91c.png'),
	(18, 1, '연산 호텔 유아인/5c174c775f234c738b4f346ac058b832.png'),
	(19, 1, '연산 호텔 유아인/66dc9a70c62e41c5a5ff2f3c82d40844.png'),
	(20, 1, '연산 호텔 유아인/b8f1337df1074340a2682f292a45a88c.png');
/*!40000 ALTER TABLE `place_img_mst` ENABLE KEYS */;

-- 테이블 goodhere.place_mst 구조 내보내기
CREATE TABLE IF NOT EXISTS `place_mst` (
  `place_id` int(11) NOT NULL,
  `place_name` varchar(50) NOT NULL,
  `place_address` varchar(50) NOT NULL,
  `benefit_detail` varchar(50) NOT NULL,
  `event_msg` varchar(50) NOT NULL,
  `update_date` date NOT NULL,
  `create_date` date NOT NULL,
  PRIMARY KEY (`place_id`) USING BTREE,
  UNIQUE KEY `place_name` (`place_name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- 테이블 데이터 goodhere.place_mst:~1 rows (대략적) 내보내기
DELETE FROM `place_mst`;
/*!40000 ALTER TABLE `place_mst` DISABLE KEYS */;
INSERT INTO `place_mst` (`place_id`, `place_name`, `place_address`, `benefit_detail`, `event_msg`, `update_date`, `create_date`) VALUES
	(1, '연산 호텔 유아인', '부산 연제구 연산동 731-9', '예약취소가능,예약취소가능', '전객실 넷플릭스고사양PC룸빠른입실늦은퇴실,전객실 넷플릭스고사양PC룸빠른입실늦은퇴실', '2022-03-03', '2022-03-03');
/*!40000 ALTER TABLE `place_mst` ENABLE KEYS */;

-- 테이블 goodhere.user_mst 구조 내보내기
CREATE TABLE IF NOT EXISTS `user_mst` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `name` varchar(50) DEFAULT NULL,
  `phone` varchar(50) NOT NULL,
  `booker` varchar(50) DEFAULT NULL,
  `profile_image` varchar(50) DEFAULT NULL,
  `provider` varchar(50) DEFAULT NULL,
  `role` varchar(50) DEFAULT NULL,
  `create_date` date NOT NULL,
  `update_date` date NOT NULL,
  PRIMARY KEY (`id`,`email`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `booker` (`booker`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb3;

-- 테이블 데이터 goodhere.user_mst:~1 rows (대략적) 내보내기
DELETE FROM `user_mst`;
/*!40000 ALTER TABLE `user_mst` DISABLE KEYS */;
INSERT INTO `user_mst` (`id`, `email`, `username`, `password`, `name`, `phone`, `booker`, `profile_image`, `provider`, `role`, `create_date`, `update_date`) VALUES
	(17, 'liberty0212@naver.com', '넓은동명사', '$2a$10$IeJtAE5L/vAmsSah9JCH4ObtZ4nV6gpUkYAfcgnmmIJ4xNWPkpyTK', NULL, '01057982274', 'slkdfjlkdsf', NULL, NULL, 'ROLE_USER', '2022-01-20', '2022-01-20');
/*!40000 ALTER TABLE `user_mst` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
