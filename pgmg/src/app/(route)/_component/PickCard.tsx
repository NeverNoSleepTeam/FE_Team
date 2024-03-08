import Link from 'next/link';
import UserProfileCard from './UserProfileCard';
import { faker } from '@faker-js/faker';
import style from './pickCard.module.scss';

export default function PickCard() {
	return (
		<div className={style.pickCard}>
			<Link
				href={'/'}
				className={style.pickCardImgwrapper}
				style={{ backgroundImage: `url(${faker.image.avatar()})` }}
			>
				<div className={style.pickCardBg}></div>
				<div className={style.pickCardTextWrap}>
					<div className={style.pickCardText}>
						<span className={style.desc}>서울 · 내국인</span>
						<span>170cm · 58kg</span>
						<span>상 30 · 하 26 · 상 240</span>
					</div>
				</div>
				<span className={style.category}>모델</span>
			</Link>
			<UserProfileCard />
		</div>
	);
}
