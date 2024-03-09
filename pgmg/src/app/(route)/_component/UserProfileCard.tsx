import style from './userProfileCard.module.scss';

import Link from 'next/link';
import Image from 'next/image';

import profile from '@/app/common/img/profile.png';
import calender from '@/app/common/img/calender.png';
import chat from '@/app/common/img/chat.png';
import hart from '@/app/common/img/heart.png';

export default function UserProfileCard() {
	return (
		<div className={style.UserProfileCardWrapper}>
			<div className={style.UserProfileCard}>
				<Link href={'/'}>
					<Image src={profile} alt="profile" />
				</Link>
				<div className={style.UserProfileCardInfo}>
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
	);
}
