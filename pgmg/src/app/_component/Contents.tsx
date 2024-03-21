'use client';

import style from '@/app/_component/contentLayout.module.scss';
import { usePathname } from 'next/navigation';

import PickCard from '../(route)/_component/PickCard';
import SingleUserPost from '../(route)/_component/SingleUserPost';
import { Title1 } from '../common/elements/Title';
import { ReactNode } from 'react';

type Props = { children: React.ReactNode };

export default function Contents({ children }: Props) {
	const pathname = usePathname();

	return (
		<>
			{pathname === '/' ? (
				<>
					<div className={style.topContent}>
						<div className={style.singleContentWrapper}>
							<Title1 title={'사진작가가'} colorTitle={'모델 구해요!'} />
							<SingleUserPost />
						</div>
						<div className={style.singleContentWrapper}>
							<Title1 title={'모델이'} colorTitle={'사진작가 구해요!'} />
							<SingleUserPost />
						</div>
					</div>

					<div className={style.content}>
						<Title1 title={'포글모글 추천'} colorTitle={'PICK!'} />
						<div className={style.contentWrapper}>
							<PickCard />
							<PickCard />
							<PickCard />
							<PickCard />
							<PickCard />
							<PickCard />
							<PickCard />
						</div>
					</div>
				</>
			) : (
				<>
					<div className={style.content}>{children}</div>
				</>
			)}
		</>
	);
}
