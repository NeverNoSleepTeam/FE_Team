'use client';

import Image from 'next/image';
import style from '@/app/_component/mainLayout.module.scss';
import profile from '@/app/common/img/profile.png';
import calender from '@/app/common/img/calender.png';
import chat from '@/app/common/img/chat.png';
import hart from '@/app/common/img/heart.png';
import { usePathname } from 'next/navigation';

import { faker } from '@faker-js/faker';
import Link from 'next/link';

type Props = { children: React.ReactNode };

export default function Contents({ children }: Props) {
	const pathname = usePathname();

	return (
		<>
			{pathname === '/' ? (
				<>
					<div className={style.topContent}>
						<div className={style.singleContentWrapper}>
							<h2 className={style.title}>
								사진작가가 <span>모델 구해요!!</span>
							</h2>
							<div className={style.singleCardInner}>
								<div className={style.singleCardContent}>
									<div className={style.singleImgBox}>
										<img src={faker.image.avatar()} alt="want image" />
									</div>
									<div className={style.singleCardPost}>
										<div className={style.singleCardDate}>
											<span>서울 · </span>
											<span>2024.02.20 13:00</span>
										</div>
										<p className={style.singleCardTitle}>스튜디오 촬영 가능한 모델 구합니다!</p>
										<span className={style.singleCardPrice}>8,5000원</span>
										<div className={style.singleCardCategory}>
											<span>전신</span>
											<span>기타</span>
										</div>
									</div>
								</div>
								<div className={style.UserInfoWrapper}>
									<div className={style.UserInfo}>
										<Link href={'/'}>
											<Image src={profile} alt="profile" />
										</Link>
										<div className={style.UserInfoProfile}>
											<span>일반회원</span>
											<Link href={'/'}>대상혁</Link>
										</div>
									</div>
									<div className={style.iconButtons}>
										<button>
											<Image src={calender} alt="calender" />
										</button>
										<button>
											<Image src={chat} alt="calender" />
										</button>
										<button>
											<Image src={hart} alt="calender" />
										</button>
									</div>
								</div>
							</div>
						</div>
						<div className={style.singleContentWrapper}>
							<h2 className={style.title}>
								모델이 <span>사진작가 구해요!</span>
							</h2>
							<div className={style.singleCardInner}>
								<div className={style.singleCardContent}>
									<div className={style.singleImgBox}>
										<img src={faker.image.avatar()} alt="want image" />
									</div>
									<div className={style.singleCardPost}>
										<div className={style.singleCardDate}>
											<span>서울 · </span>
											<span>2024.02.20 13:00</span>
										</div>
										<p className={style.singleCardTitle}>스튜디오 촬영 가능한 모델 구합니다!</p>
										<span className={style.singleCardPrice}>8,5000원</span>
										<div className={style.singleCardCategory}>
											<span>전신</span>
											<span>기타</span>
										</div>
									</div>
								</div>
								<div className={style.UserInfoWrapper}>
									<div className={style.UserInfo}>
										<Link href={'/'}>
											<Image src={profile} alt="profile" />
										</Link>
										<div className={style.UserInfoProfile}>
											<span>일반회원</span>
											<Link href={'/'}>대상혁 &gt;</Link>
										</div>
									</div>
									<div className={style.iconButtons}>
										<button>
											<Image src={calender} alt="calender" />
										</button>
										<button>
											<Image src={chat} alt="calender" />
										</button>
										<button>
											<Image src={hart} alt="calender" />
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className={style.content}>
						<h2 className={style.title}>
							포글모글 추천 <span>PICK!</span>
						</h2>
					</div>
				</>
			) : (
				<>
					<div className={style.contentLayout}>{children}</div>
				</>
			)}
		</>
	);
}
