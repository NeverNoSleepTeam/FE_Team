import style from './profileStyle.module.scss';
import Image from 'next/image';
import profileBg from '@/app/common/img/default_profile_bg.png';
import myProfile from '@/app/common/img/my_profile.png';
import heart from '@/app/common/img/heart.png';
import calender_w from '@/app/common/img/calender_w.png';
import chat from '@/app/common/img/chat_w.png';

export const ProfileStyle = () => {
	return (
		<>
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
		</>
	);
};

export const PostProfileSyle = () => {
	return (
		<>
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
		</>
	);
};
