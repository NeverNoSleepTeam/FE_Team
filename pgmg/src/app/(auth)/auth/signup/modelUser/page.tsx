'use client';
import styles from '../../styles/model.module.scss';
import Image from 'next/image';
import CloseBtn from '../../../../../../public/closebtn.svg';
import OpenBtn from '../../../../../../public/openbtn.svg';
import TextareaAutosize from 'react-textarea-autosize';
import { useCallback, useState } from 'react';
import EmailMemoStore from '@/app/store/memo';
import useInput from '@/app/Hooks/useInput';
import { redirect, useRouter } from 'next/navigation';

export default function modelUser() {
	const [height, setheight] = useInput('');
	const [weight, setweight] = useInput('');
	const [top, settop] = useInput('');
	const [bottom, setbottom] = useInput('');
	const [shoes, setshose] = useInput('');
	const { memo } = EmailMemoStore();
	const router = useRouter();
	const onsubmit = async (e: any) => {
		e.preventDefault();
		const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/auth/model-register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: memo,
				height: height,
				weight: weight,
				top: top,
				bottom: bottom,
				shoes: shoes,
			}),
		});
		if (res.ok) {
			router.replace('/auth/signup/stepend');
		}
	};
	return (
		<div className={styles.Container}>
			<span className={styles.subTitle}>step3.</span>
			<h1 className={styles.Title}>모델회원정보를 입력해주세요.</h1>
			<div className={styles.SignUpForm}>
				<div className={styles.SignupSubForm}>
					<label className={styles.FormTitle}>키*</label>
					<div className={styles.TextDiv}>
						<input
							className={styles.TextInput}
							placeholder="키를 입력해주세요"
							value={height}
							onChange={setheight}
						/>
					</div>
				</div>
				<div className={styles.SignupSubForm}>
					<label className={styles.FormTitle}>몸무게*</label>
					<div className={styles.TextDiv}>
						<input
							className={styles.TextInput}
							type="text"
							placeholder="몸무게를 입력해주세요."
							value={weight}
							onChange={setweight}
						/>
					</div>
				</div>
				<div className={styles.SignupSubForm}>
					<label className={styles.FormTitle}>상의 사이즈*</label>
					<div className={styles.TextDiv}>
						<input
							className={styles.TextInput}
							type="text"
							placeholder="상의사이즈를 입력해주세요."
							value={top}
							onChange={settop}
						/>
					</div>
				</div>
				<div className={styles.SignupSubForm}>
					<label className={styles.FormTitle}>하의 사이즈*</label>
					<div className={styles.TextDiv}>
						<input
							className={styles.TextInput}
							type="text"
							placeholder="하의사이즈를 입력해주세요."
							value={bottom}
							onChange={setbottom}
						/>
					</div>
					<div className={styles.SignupSubForm}>
						<label className={styles.FormTitle}>신발 사이즈*</label>
						<div className={styles.TextDiv}>
							<input
								className={styles.TextInput}
								type="text"
								placeholder="신발 사이즈를 입력해주세요."
								value={shoes}
								onChange={setshose}
							/>
						</div>
					</div>
				</div>

				<button className={styles.NomalSusseceBtn} onClick={onsubmit}>
					모델회원으로 가입 완료하기
				</button>
			</div>
		</div>
	);
}
