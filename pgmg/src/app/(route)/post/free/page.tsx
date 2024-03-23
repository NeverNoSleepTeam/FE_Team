import style from '@/app/_component/contentLayout.module.scss';
import SingleUserPost from '@/app/(route)/_component/SingleUserPost';
import { Title3 } from '@/app/common/elements/Title';

export default function FreePage() {
	return (
		<>
			<Title3 title={'포글모글에서,'} colorTitle={'재능기부'} title2={'합니다!'} />
			<div className={style.contentWrapper}>
				<SingleUserPost />
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
