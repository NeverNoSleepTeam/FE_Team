import style from '@/app/(route)/_component/postDetail.module.scss';
import { faker } from '@faker-js/faker';
import { PostProfileSyle } from './ProfileStyle';

export default function PostDetailContent() {
	return (
		<div className={style.postDetailWrap}>
			<div className={style.left}>
				<PostProfileSyle />
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
