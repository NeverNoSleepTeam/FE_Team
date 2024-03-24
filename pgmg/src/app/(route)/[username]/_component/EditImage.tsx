import layout from '@/app/(route)/[username]/styles/layout.module.scss';
import style from '../styles/edit_image.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import addImage from '@/app/common/img/add-photo-alternate.png';
import AddImage from '@/app/(route)/[username]/_component/AddImage';
export default function EditImage() {
	return (
		<div className={layout.rightContent}>
			<div className={layout.rightInner}>
				<div className={layout.controllBar}>
					<ul className={`${layout.tabList} + ${layout.active}`}>
						<li className={layout.active}>
							<Link href={'profile'}>내 프로필</Link>
						</li>
						<li>
							<Link href={'image'}>등록이미지</Link>
						</li>
					</ul>
				</div>
				<div className={style.imageContainer}>
					<AddImage />
					<AddImage />
					<AddImage />
					<AddImage />
					<AddImage />
					<AddImage />
					<AddImage />
					<AddImage />
					<AddImage />
					<AddImage />
				</div>
			</div>
		</div>
	);
}
