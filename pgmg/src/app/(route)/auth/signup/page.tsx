'use client';

import styles from '@/app/(route)/auth/styles/signup.module.scss';
import { MouseEventHandler, useState } from 'react';
import { useRouter } from 'next/navigation';
export default function () {
	const router = useRouter();
	const [agreeOne, setAgreeOne] = useState(false);
	const [agreeTwo, setAgreeTwo] = useState(false);
	const [agreeThree, setAgreeThree] = useState(false);
	const agreeOneHandler: MouseEventHandler<HTMLButtonElement> = () => {
		setAgreeOne(prev => !prev);
	};
	const agreeTwoHandler: MouseEventHandler<HTMLButtonElement> = () => {
		setAgreeTwo(prev => !prev);
	};
	const agreeThreeHandler: MouseEventHandler<HTMLButtonElement> = () => {
		setAgreeThree(prev => !prev);
	};
	const HandlerNextPage: MouseEventHandler<HTMLButtonElement> = () => {
		if (agreeOne && agreeTwo) {
			router.replace('signup/step2');
		} else {
			console.log('동의해줘');
		}
	};
	return (
		<div className={styles.Container}>
			<span className={styles.subTitle}>STEP1.</span>
			<h1 className={styles.Title}>야래 약관에 동의해주세요.</h1>
			<div className={styles.CheckListForm}>
				<div className={styles.CheckListInfo}>
					<span className={styles.InfoTitle}>개인정보처리 방침</span>
					<span className={styles.InfosubTitle}>약간 전체보기 &gt;</span>
				</div>
				{agreeOne ? (
					<button className={styles.AgreeBtn} onClick={agreeOneHandler}>
						동의합니다.
					</button>
				) : (
					<button className={styles.NotAgreeBtn} onClick={agreeOneHandler}>
						동의합니다.
					</button>
				)}

				<div className={styles.CheckListInfo}>
					<span className={styles.InfoTitle}>이용약관</span>
					<span className={styles.InfosubTitle}>약간 전체보기 &gt;</span>
				</div>
				{agreeTwo ? (
					<button className={styles.AgreeBtn} onClick={agreeTwoHandler}>
						동의합니다.
					</button>
				) : (
					<button className={styles.NotAgreeBtn} onClick={agreeTwoHandler}>
						동의합니다.
					</button>
				)}
				<div className={styles.CheckListInfo}>
					<span className={styles.InfoTitle}>마케팅 활용 동의(선택)</span>
					<span className={styles.InfosubTitle}>약간 전체보기 &gt;</span>
				</div>
				{agreeThree ? (
					<button className={styles.AgreeBtn} onClick={agreeThreeHandler}>
						동의합니다.
					</button>
				) : (
					<button className={styles.NotAgreeBtn} onClick={agreeThreeHandler}>
						동의합니다.
					</button>
				)}
			</div>
			<div className={styles.NextBtnDiv}>
				<button className={styles.NextBtn} onClick={HandlerNextPage}>
					다음
				</button>
			</div>
		</div>
	);
}
