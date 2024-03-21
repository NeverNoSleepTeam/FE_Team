import style from '@/app/(route)/mypage/[username]/styles/edit_image.module.scss';
import Image from 'next/image';
import addImage from '@/app/common/img/add-photo-alternate.png';

export default function AddImage() {
	return (
		<div className={style.addImage}>
			<button>
				<Image src={addImage} alt="이미지추가" />
			</button>
		</div>
	);
}
