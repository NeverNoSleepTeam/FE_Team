import style from '@/app/(route)/[username]/styles/layout.module.scss';
import SinglePost from '@/app/(route)/_component/SinglePost';
import { Title4 } from '@/app/common/elements/Title';
import { faker } from '@faker-js/faker';
import Link from 'next/link';
import Image from 'next/image';
import leftArrow from '@/app/common/img/chevron_left.png';
import rightArrow from '@/app/common/img/chevron_right.png';

export default function RightBox() {
	return (
		<div className={style.rightContent}>
			<div className={style.rightInner}>
				<div className={style.controllBar}>
					<ul className={`${style.tabList} + ${style.active}`}>
						<li className={style.active}>
							<Link href={'/mypage'}>
								작성글<span>0</span>
							</Link>
						</li>
						<li>
							<Link href={'/mypage/heart_list'}>
								좋아요<span>0</span>
							</Link>
						</li>
					</ul>
					<div className={style.controll}>
						<button>
							<Image src={leftArrow} alt="left arrow" />
						</button>
						<button>
							<Image src={rightArrow} alt="right arrow" />
						</button>
					</div>
				</div>
				<div>
					<div className={style.postContent}>
						<div className={style.noPost}>
							<p>커뮤니티에서 내가 작성한 글을 이곳에서 확인할 수 있어요!</p>
						</div>
						<div className={style.postInner}>
							<SinglePost />
						</div>
						<div className={style.postInner}>
							<SinglePost />
						</div>
						<div className={style.postInner}>
							<SinglePost />
						</div>
						<div className={style.postInner}>
							<SinglePost />
						</div>
					</div>

					<div className={style.imgContentWrap}>
						<Title4 colorTitle={`닉네임`} title={'님 등록이미지'} />
						<div className={style.imgContent}>
							<div className={style.noImage}>
								<p>프로필에서 여러이미지를 등록하면 이 공간에 표시됩니다!</p>
							</div>
							<img src={faker.image.avatar()} alt="profileImage" />
							<img src={faker.image.avatar()} alt="profile" />
							<img src={faker.image.avatar()} alt="profile" />
							<img src={faker.image.avatar()} alt="profile" />
							<img src={faker.image.avatar()} alt="profile" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
