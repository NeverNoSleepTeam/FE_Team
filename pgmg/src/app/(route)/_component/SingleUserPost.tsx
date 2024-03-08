import style from './singleUserPost.module.scss';
import UserProfileCard from './UserProfileCard';
import { faker } from '@faker-js/faker';

export default function SingleUserPost() {
	return (
		<div className={style.singleCardInner}>
			<div className={style.singleCardContent}>
				<div className={style.singleImgBox}>
					<img src={faker.image.avatar()} alt="want image" />
				</div>
				<div className={style.singleCardPost}>
					<div className={style.singleCardDate}>
						<span>서울 · </span>
						<span>2024.02.20 13:00</span>
					</div>
					<p className={style.singleCardTitle}>스튜디오 촬영 가능한 모델 구합니다!</p>
					<span className={style.singleCardPrice}>8,5000원</span>
					<div className={style.singleCardCategory}>
						<span>전신</span>
						<span>기타</span>
					</div>
				</div>
			</div>
			<UserProfileCard />
		</div>
	);
}
