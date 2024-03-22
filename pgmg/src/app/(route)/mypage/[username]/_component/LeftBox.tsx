import style from '@/app/(route)/mypage/[username]/styles/layout.module.scss';
import { ProfileStyle } from '@/app/(route)/_component/ProfileStyle';

export default function LeftBox() {
	return (
		<div className={style.leftContent}>
			<ProfileStyle />
		</div>
	);
}
