'use client';

import { faker } from '@faker-js/faker';
import style from './singleUserPost.module.scss';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function SinglePost() {
	const pathname = usePathname();

	return (
		<Link href={`${pathname}/:postId`} className={style.singleCardContent}>
			<div className={style.singleImgBox}>
				<img src={faker.image.avatar()} alt="want image" />
			</div>
			<div className={style.singleCardPost}>
				<div className={style.singleCardDate}>
					<span>서울 · </span>
					<span>2024.02.20 13:00</span>
				</div>
				<p className={style.singleCardTitle}>스튜디오 촬영 가능한 모델 구합니다!</p>
				<p>2024.03.13. 금요일 오후 12:00 ~ 2024.03.13. 금요일 오후 01:00</p>
				<span className={style.singleCardPrice}>85,000원</span>
				<div className={style.singleCardCategory}>
					<span>전신</span>
					<span>기타</span>
				</div>
			</div>
		</Link>
	);
}
