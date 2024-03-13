'use client';

import Link from 'next/link';
import style from './writingButton.module.scss';
import { usePathname } from 'next/navigation';

export default function WritingButton() {
	const pathname = usePathname();
	const postUploadHandler = () => {};

	return (
		<div className={style.buttonWrapper}>
			{pathname === '/writing' ? (
				<button className={style.button} onClick={postUploadHandler}>
					게시글 업로드
				</button>
			) : (
				<Link href={'/writing'} className={style.button}>
					글 쓰기
				</Link>
			)}
			<span className={style.text}>* 해당 게시판은 “모델회원”만 작성가능합니다.</span>
		</div>
	);
}

// 로그인 안했을 시 => 모달? 로그인하라고
// 해줄게 => 모델 또는 기사 회원이 아닐 경우 모달로 알려주기와 span 텍스트
