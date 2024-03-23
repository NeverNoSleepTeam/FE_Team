import style from '@/app/_component/contentLayout.module.scss';
import SingleUserPost from '@/app/(route)/_component/SingleUserPost';
import { Title2 } from '@/app/common/elements/Title';
import Link from 'next/link';

export default function PhotoshopPage() {
	return (
		<>
			<Title2 colorTitle={'포토샵 능력자!'} title={'해줄게 & 필요해'} />
			<div className={style.contentWrapper}>
				<Link href={`/post/photoshop/:postId/`}>
					<SingleUserPost />
				</Link>
				<SingleUserPost />
				<SingleUserPost />
				<SingleUserPost />
				<SingleUserPost />
				<SingleUserPost />
				<SingleUserPost />
				<SingleUserPost />
			</div>
		</>
	);
}
