'use client';

import Image from 'next/image';
import style from './styles/layout.module.scss';

import leftArrow from '@/app/common/img/chevron_left.png';
import rightArrow from '@/app/common/img/chevron_right.png';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import RightBox from '@/app/(route)/mypage/[username]/_component/RightBox';
import { useEffect } from 'react';
import LeftBox from '@/app/(route)/mypage/[username]/_component/LeftBox';

type Props = { children: React.ReactNode };

export default function Mypage({ children }: Props) {
	const pathname = usePathname();
	const GetUser = async () => {
		const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/user-page`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				name: pathname.split('/')[2],
			}),
		});
		console.log(res.json());
	};
	useEffect(() => {
		GetUser();
	}, []);

	return (
		<div className={style.contentWrapper}>
			<LeftBox />
			<div className={style.rightContent}>
				<div className={style.rightInner}>
					<div className={style.controllBar}>
						<ul className={`${style.tabList} + ${style.active}`}>
							<li className={style.active}>
								<Link href={'/mypage'}>
									작성글<span>0</span>
								</Link>
							</li>
							<li>
								<Link href={'/mypage/heart_list'}>
									좋아요<span>0</span>
								</Link>
							</li>
						</ul>
						<div className={style.controll}>
							<button>
								<Image src={leftArrow} alt="left arrow" />
							</button>
							<button>
								<Image src={rightArrow} alt="right arrow" />
							</button>
						</div>
					</div>
					{pathname === '/mypage' ? <RightBox /> : <>{children}</>}
				</div>
			</div>
		</div>
	);
}
