import { Title1 } from '@/app/common/elements/Title';
import style from '@/app/_component/contentLayout.module.scss';
import SingleUserPost from '../../_component/SingleUserPost';

export default function ModelWantItPage() {
	return (
		<>
			<Title1 title={'모델'} colorTitle={'필요해요!'} />
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
