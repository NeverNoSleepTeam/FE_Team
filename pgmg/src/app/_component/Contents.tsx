'use client';

import style from '@/app/_component/mainLayout.module.scss';
import { usePathname } from 'next/navigation';

type Props = { children: React.ReactNode };

export default function Contents({ children }: Props) {
	const pathname = usePathname();

	return (
		<>
			{pathname === '/' ? (
				<>
					<div className={style.contentLayout}>포글모글 추천 PICK!</div>
				</>
			) : (
				<>
					<div className={style.contentLayout}>{children}</div>
				</>
			)}
		</>
	);
}
