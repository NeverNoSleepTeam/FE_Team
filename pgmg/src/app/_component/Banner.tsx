'use client';

import layout from '@/app/styles/_layout.module.scss';
import style from '@/app/_component/banner.module.scss';
import { usePathname } from 'next/navigation';

export default function Banner() {
	const pathname = usePathname();

	if (pathname === '/') {
		return (
			<div className={style.bannerWrapper}>
				<div className={style.banner}></div>
			</div>
		);
	}
	return null;
}
