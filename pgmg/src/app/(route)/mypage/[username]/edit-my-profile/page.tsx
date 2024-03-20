import style from '../styles/layout.module.scss';
import LeftBox from '@/app/(route)/mypage/[username]/_component/LeftBox';
import RightBox from '@/app/(route)/mypage/[username]/_component/RightBox';
import EditProfile from '@/app/(route)/mypage/[username]/_component/EditProfile';
export default function Eidt_ProFile() {
	return (
		<div className={style.contentWrapper}>
			<LeftBox />
			<EditProfile />
		</div>
	);
}
