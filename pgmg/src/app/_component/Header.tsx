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

export default function Header() {
	const router = usePathname();
	const blueH = router.includes('/auth');
	console.log(router);

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
							<Link href={'/hot'}>
								<Image src={blueH ? calendar_w : calendar} alt="캘린더" />
							</Link>
						</li>
						<li>
							<Link href={'/modal'}>
								<Image src={blueH ? chat_w : chat} alt="채팅" />
							</Link>
						</li>
						<li>
							<Link href={'/photo'}>
								<Image src={profile} alt="캘린더" />
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}
