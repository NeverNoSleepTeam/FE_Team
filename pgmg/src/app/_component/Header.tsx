'use client';

import Link from 'next/link';
import Image from 'next/image';

import layout from '@/app/styles/_layout.module.scss';
import style from '@/app/_component/header.module.scss';

import logo from '@/app/common/img/logo.png';
import calendar from '@/app/common/img/calender.png';
import chat from '@/app/common/img/chat.png';
import profile from '@/app/common/img/profile.png';
import logo_w from '@/app/common/img/logo_w.webp';
import calendar_w from '@/app/common/img/calender_w.png';
import chat_w from '@/app/common/img/chat_w.png';

import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

export default function Header() {
	const router = usePathname();
	const blueH = router.includes('/auth');
	const [visible, setVisible] = useState(false);

	const visibleHandler = useCallback(() => {
		setVisible(prev => !prev);
	}, []);

	return (
		<header className={blueH ? style.headerblue : style.header}>
			<div className={layout.container}>
				<div className={style.headerInner}>
					<h1 className={style.logo}>
						<Link href={'/'}>
							<Image src={blueH ? logo_w : logo} alt="logo" priority={true} />
						</Link>
					</h1>
					<ul className={style.headerList}>
						<li>
							<Link href={'/:username/calendar'}>
								<Image src={blueH ? calendar_w : calendar} alt="캘린더" />
							</Link>
						</li>
						<li>
							<Link href={'/:username/chat'}>
								<Image src={blueH ? chat_w : chat} alt="채팅" />
							</Link>
						</li>
						<li>
							<button onClick={visibleHandler}>
								<Image src={profile} alt="프로필" />
							</button>
							<div className={visible ? style.myArea : style.myAreaHidden}>
								<div className={style.btnWrap}>
									<Link href={'/auth/social'}>로그인</Link>
									<Link href={'/auth/signup'}>회원가입</Link>
								</div>
								<ul className={style.myList}>
									<li>
										<Link href={'/:username'}>
											<span>마이페이지</span>
										</Link>
									</li>
									<li>
										<Link href={'/:username/calendar'}>
											<span>캘린더</span>
										</Link>
									</li>
									<li>
										<Link href={'/:username/chat'}>
											<span>채팅</span>
										</Link>
									</li>
									<li>
										<Link href={'/:username/heart_list'}>
											<span>관심리스트</span>
										</Link>
									</li>
								</ul>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}
