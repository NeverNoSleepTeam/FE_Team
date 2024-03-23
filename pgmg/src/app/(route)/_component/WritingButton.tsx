'use client';

import Link from 'next/link';
import style from './writingButton.module.scss';
import { usePathname } from 'next/navigation';
import { FormEvent, useCallback } from 'react';

export default function WritingButton() {
	const pathname = usePathname();
	const postWhether = pathname.includes('/post');

	if (postWhether) {
		return (
			<div className={style.buttonWrapper}>
				<Link href={'/writing'} className={style.button}>
					글 쓰기
				</Link>
			</div>
		);
	}

	// const onSubmitUpload = useCallback(async (e: FormEvent<HTMLFormElement>) => {
	// 	e.preventDefault();
	// 	const formData = new FormData();
	// 	const RequestBody = new Blob(
	// 		[
	// 			JSON.stringify({
	// 				title: '제목입니다. 제목이에요 ~~ 핳하하',
	// 				modelAssistanceCategory: ['손', '헤어'],
	// 				place: '성신여대 입구역 앞',
	// 				price: 50000,
	// 				contents: '컨텐츠 입니다. 컨텐츠',
	// 				firstDate: '2024.04.03 오전 10:00',
	// 				lastDate: '2024.04.03 오후 10:00',
	// 			}),
	// 		],
	// 		{ type: 'application/json' },
	// 	);
	// 	formData.append('RequestBody', RequestBody);
	// 	formData.append('Title', 'file!');
	// 	formData.append('Details', ['kakao.png', 'google.png']);

	// 	console.log(formData.get('RequestBody'));

	// 	await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/board/model-assistance`, {
	// 		method: 'POST',
	// 		body: formData,
	// 	});
	// }, []);

	return (
		<div className={style.buttonWrapper}>
			{pathname === '/writing' ? <button className={style.button}>게시글 업로드</button> : null}
			{/* <span className={style.text}>* 해당 게시판은 “모델회원”만 작성가능합니다.</span> */}
		</div>
	);
}

// 로그인 안했을 시 => 모달? 로그인하라고
// 해줄게 => 모델 또는 기사 회원이 아닐 경우 모달로 알려주기와 span 텍스트
