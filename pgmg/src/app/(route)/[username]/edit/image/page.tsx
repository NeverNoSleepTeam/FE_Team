import LeftBox from '@/app/(route)/[username]/_component/LeftBox';
import style from '@/app/(route)/[username]/styles/layout.module.scss';
import EditProfile from '@/app/(route)/[username]/_component/EditProfile';
import EditImage from '@/app/(route)/[username]/_component/EditImage';

export default function Eidt_Image() {
	return (
		<div className={style.contentWrapper}>
			<LeftBox />
			<EditImage />
		</div>
	);
}
