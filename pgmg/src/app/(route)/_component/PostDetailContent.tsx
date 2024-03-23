'use client';

import style from '@/app/(route)/_component/postDetail.module.scss';
import { faker } from '@faker-js/faker';
import { PostProfileSyle } from './ProfileStyle';
import { usePathname } from 'next/navigation';

export default function PostDetailContent() {
	const url = usePathname();

	return (
		<div className={style.postDetailWrap}>
			<div className={style.left}>
				<PostProfileSyle url={url} />
			</div>
			<div className={style.right}>
				<p className={style.rightTitle}>이미지</p>
				<div className={style.rightInner}>
					<img src={faker.image.avatar()} alt="Detail Image" />
					<img src={faker.image.avatar()} alt="Detail Image" />
					<img src={faker.image.avatar()} alt="Detail Image" />
					<img src={faker.image.avatar()} alt="Detail Image" />
				</div>
			</div>
		</div>
	);
}
