'use client';

import style from '@/app/_component/mainLayout.module.scss';
import { usePathname } from 'next/navigation';

import PickCard from '../(route)/_component/PickCard';
import SingleUserPost from '../(route)/_component/SingleUserPost';
import Title from '../common/elements/Title';

type Props = { children: React.ReactNode };

export default function Contents({ children }: Props) {
	const pathname = usePathname();

	return (
		<>
			{pathname === '/' ? (
				<>
					<div className={style.topContent}>
						<div className={style.singleContentWrapper}>
							<Title title={'사진작가가'} colorTitle={'모델 구해요!'} />
							<SingleUserPost />
						</div>
						<div className={style.singleContentWrapper}>
							<Title title={'모델이'} colorTitle={'사진작가 구해요!'} />
							<SingleUserPost />
						</div>
					</div>

					<div className={style.content}>
						<Title title={'포글모글 추천'} colorTitle={'PICK!'} />
						<div className={style.pickCardWrapper}>
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
