'use client';

import Image from 'next/image';
import style from './styles/layout.module.scss';
import { usePathname } from 'next/navigation';
import RightBox from '@/app/(route)/[username]/_component/RightBox';
import { ReactNode, useState, useEffect } from 'react';
import { ProfileStyle } from '@/app/(route)/_component/ProfileStyle';

export default function Mypage() {
	const [userInfo, setUserInfo] = useState({});
	const pathname = usePathname();
	console.log(decodeURI(pathname));
	const GetUser = async () => {
		const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/user/my-page`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: decodeURI(pathname.split('/')[1]),
			}),
		});
		const jsonData = await res.json();
		setUserInfo(jsonData);
		console.log(userInfo);
	};
	useEffect(() => {
		GetUser();
	}, [pathname]);
	return (
		<div className={style.contentWrapper}>
			<div></div>
			<ProfileStyle user={userInfo} />
			<RightBox />
		</div>
	);
}
