import style from '../../styles/layout.module.scss';
import LeftBox from '@/app/(route)/[username]/_component/LeftBox';
import RightBox from '@/app/(route)/[username]/_component/RightBox';
import EditProfile from '@/app/(route)/[username]/_component/EditProfile';
import { ProfileStyle } from '@/app/(route)/_component/ProfileStyle';
export default function Eidt_ProFile() {
	return (
		<div className={style.contentWrapper}>
			<ProfileStyle />
			<EditProfile />
		</div>
	);
}
