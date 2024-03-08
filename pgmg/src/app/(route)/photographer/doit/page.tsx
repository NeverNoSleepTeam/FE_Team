import { Title1 } from '@/app/common/elements/Title';
import style from '@/app/_component/contentLayout.module.scss';
import SingleUserPost from '../../_component/SingleUserPost';

export default function PhotoGrapherDoItPage() {
	return (
		<>
			<Title1 title={'사진작가'} colorTitle={'해줄게요!'} />
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
