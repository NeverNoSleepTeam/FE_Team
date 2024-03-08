'use client';

import { usePathname } from 'next/navigation';
import style from './singleUserPost.module.scss';
import UserProfileCard from './UserProfileCard';
import SinglePost from './SinglePost';

export default function SingleUserPost() {
	const pathname = usePathname();
	console.log(pathname);

	return (
		<div className={pathname === '/' ? style.singleCardInner : style.singleCardInnerWidth}>
			<SinglePost />
			<hr />
			<UserProfileCard />
		</div>
	);
}
