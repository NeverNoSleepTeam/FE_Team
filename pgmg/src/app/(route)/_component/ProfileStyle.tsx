import style from './profileStyle.module.scss';
import Image from 'next/image';
import profileBg from '@/app/common/img/default_profile_bg.png';
import postDetailProfileBG from '@/app/common/img/post_detail_default.png';
import myProfile from '@/app/common/img/my_profile.png';
import heart from '@/app/common/img/heart.png';
import calender_w from '@/app/common/img/calender_w.png';
import chat from '@/app/common/img/chat_w.png';
import Link from 'next/link';
import { ModelProfileInfoType, PhotoProfileInfoType } from './ProfileInfoType';

type Props = { url: string };

export const ProfileStyle = () => {
	return (
		<div className={style.profileStyleWrapper}>
			<Image
				className={style.profileBgImg}
				src={profileBg}
				alt="profile background image"
				fill={false}
				priority
			/>
			<div className={style.leftContentWrapper}>
				<div className={style.userProfileInner}>
					<div className={style.userProfile}>
						<Image className={style.profileImg} src={myProfile} alt="profile" />
						<div className={style.nameWrap}>
							<span className={style.name}>닉네임</span>
							<span className={style.nameState}>일반회원</span>
						</div>
						<button className={style.heart}>
							<Image src={heart} alt="heart" />
						</button>
					</div>
					<div className={style.buttonWrap}>
						<button>
							<Image src={calender_w} alt="calender" />
							<a>캘린더 보기</a>
						</button>
						<button>
							<Image src={chat} alt="calender" />
							<a>제안하기</a>
						</button>
					</div>
				</div>
				<div className={style.userInfoWrapper}>
					<div className={style.userInfo}>
						<span className={style.userText}>이메일</span>
						<p className={style.info}>vhrmfahrmf2024@gmail.com</p>
					</div>
					<div className={style.userInfo}>
						<span className={style.userText}>소개</span>
						<p className={style.info}>
							안녕하세요! 동양적인 고유한 이미지를 가진 배우 김희인입니다. 저는 항상 좋은 결과물과
							작품에 기여하고자 하는 마음으로 촬영합니다. 촬영 후 이 모델과 함께하길 잘했다
							생각하시도록 책임감을가지고 열심히 임하겠습니다. 감사합니다!! 키 164cm/48kg 작업 분야
							- 영상, 사진, 브랜드촬영, 콘텐츠, 뷰티, 뮤비, 영화/드라 마 보조출연 및 배우 or 모델이
							필요하신 모든 분야 경력사항 ■ 상업드라마 넷플릭스 오리지널 - 단역(2023) 넷플릭스
							오리지널 - 단역(2021) ■ 독립영화 킥서비스 2023 - (빌런)역 진용진없는영화 2020 -
							(주연)역 ■ 콘텐츠 약과 광고 모델 (2023) 뷰티제품 광고 모델 (2023) 뷰티제품 바이럴 광고
							모델 (2023)
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export const PostProfileSyle = ({ url }: Props) => {
	return (
		<div className={style.postProfileWrapper}>
			<Image
				className={style.profileBgImg}
				src={postDetailProfileBG}
				alt="profile background image"
				fill={false}
				priority
			/>
			<div className={style.profileContentWrapper}>
				<div className={style.profileTop}>
					<div className={style.TitleNameWrap}>
						<Image src={myProfile} alt="my profile" />
						<div className={style.nameWrap}>
							<span className={style.nickname}>닉네임</span>
							<span className={style.nicknameState}>일반회원</span>
						</div>
					</div>
					<div className={style.profileButtonWrap}>
						<Link href="/calendar">
							<Image src={calender_w} alt="calendar" />
							<span>캘린더 보기</span>
						</Link>
						<Link href="/chat">
							<Image src={chat} alt="chat" />
							<span>제안하기</span>
						</Link>
					</div>
				</div>
				<div className={style.profileContentWrap}>
					<div className={style.profileContentTitle}>
						<span className={style.uploadDate}>2024.03.24 14:00</span>
						<p className={style.title}>
							야외 컨셉 촬영, 피팅, 쇼핑몰 등 (얼굴노출O) 모델 해드립니다!!
						</p>
						<div className={style.price}>
							<strong>300,000</strong>
							<span>원</span>
						</div>
					</div>
					<div className={style.userInfoWrap}>
						<div className={style.userInfoBundle}>
							<div className={style.userInfo}>
								<span>카테고리</span>
								<p>얼굴, 전신, 기타</p>
							</div>
							<div className={style.userInfo}>
								<span>날짜/시간</span>
								<p>2024.03.13. 금요일 오후 12:00 ~ 2024.03.13. 금요일 오후 01:00</p>
							</div>
							<div className={style.userInfo}>
								<span>지역</span>
								<p>서울 강남구 세곡동</p>
							</div>
						</div>

						<ModelProfileInfoType />
						<PhotoProfileInfoType />

						<div className={style.userInfoBundle}>
							<span className={style.userInfoTitle}>상세내용</span>
							<div className={style.userInfoContent}>
								안녕하세요 A컴퍼니 입니다. 모델/피팅/룩북/쇼핑몰 모델 진행 가능합니다. 촬영은
								1시간부터 가능하고 장시간 촬영도 가능합니다 자연스러운 헤어/메이크업 가능합니다. 그
								외에 협의 사항도 전달 주시면 협의 가능합니다. 채팅주세요 감사합니다!
								모델/피팅/룩북/쇼핑몰 모델 진행 가능합니다. 촬영은 1시간부터 가능하고 장시간 촬영도
								가능합니다 자연스러운 헤어/메이크업 가능합니다. 그 외에 협의 사항도 전달 주시면 협의
								가능합니다. 채팅주세요 감사합니다! 모델/피팅/룩북/쇼핑몰 모델 진행 가능합니다. 노출
								촬영은 죄송하지만 안하고있습니다! 좋은 기회가 되어 많은 촬영을 할 수 있다면
								좋겠습니다감사합니다!!ㅎㅎ
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
