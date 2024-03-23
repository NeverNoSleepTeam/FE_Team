import LeftBox from '@/app/(route)/mypage/[username]/_component/LeftBox';
import style from '@/app/(route)/mypage/[username]/styles/layout.module.scss';
import EditProfile from '@/app/(route)/mypage/[username]/_component/EditProfile';
import EditImage from '@/app/(route)/mypage/[username]/_component/EditImage';

export default function Eidt_Image() {
	return (
		<div className={style.contentWrapper}>
			<LeftBox />
			<EditImage />
		</div>
	);
}
