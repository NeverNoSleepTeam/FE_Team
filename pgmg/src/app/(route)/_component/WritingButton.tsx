import Link from 'next/link';
import style from './writingButton.module.scss';

export default function WritingButton() {
	return (
		<div className={style.buttonWrapper}>
			<Link href={'/writing'} className={style.button}>
				글 쓰기
			</Link>
			<span className={style.text}>* 해당 게시판은 “모델회원”만 작성가능합니다.</span>
		</div>
	);
}

// 로그인 안했을 시 => 모달? 로그인하라고
// 해줄게 => 모델 또는 기사 회원이 아닐 경우 모달로 알려주기와 span 텍스트
