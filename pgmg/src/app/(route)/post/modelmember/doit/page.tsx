import style from '@/app/_component/contentLayout.module.scss';
import SingleUserPost from '@/app/(route)/_component/SingleUserPost';
import { Title1 } from '@/app/common/elements/Title';

export default function ModelDoItPage() {
	return (
		<>
			<Title1 title={'모델'} colorTitle={'해줄게요!'} />
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
