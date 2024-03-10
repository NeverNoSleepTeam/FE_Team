'use client';
import styles from '../../styles/model.module.scss';
import Image from 'next/image';
import CloseBtn from '../../../../../../public/closebtn.svg';
import OpenBtn from '../../../../../../public/openbtn.svg';
import TextareaAutosize from 'react-textarea-autosize';
import { useCallback, useState } from 'react';
import EmailMemoStore from '@/app/store/memo';
import useInput from '@/app/Hooks/useInput';

export default function modelUser() {
	const [location, setlocation] = useState('지역을 선택해 주세요.');
	const [global, setglobal] = useState('국적을 선택해 주세요.');
	const [GlobalOn, setGlobalChange] = useState(false);
	const [LocalOn, setLocalChange] = useState(false);
	const [height, setheight] = useInput('');
	const [weight, setweight] = useInput('');
	const [top, settop] = useInput('');
	const [bottom, setbottom] = useInput('');
	const [shoes, setshose] = useInput('');

	const locations = [
		'서울',
		'인천',
		'경기',
		'부산',
		'대구',
		'대전',
		'세종',
		'울산',
		'제주',
		'충북',
		'충남',
		'경북',
		'경남',
		'전북',
		'전남',
		'기타',
	];
	const { memo } = EmailMemoStore();
	console.log(memo);
	const GobalChoice = useCallback(e => {
		setglobal(e.target.value);
		setGlobalChange(false);
	}, []);
	const LocationChoice = useCallback(e => {
		setlocation(e.target.value);
		setLocalChange(false);
	}, []);
	const onsubmit = async (e: any) => {
		e.preventDefault();
		await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/auth/model-register`, {
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
				nationality: global,
				city: location,
			}),
		});
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
				<div className={styles.SignupSubForm}>
					<label className={styles.FormTitle}>국적*</label>
					<div className={styles.TextDiv}>
						<button className={styles.LocationForm} onClick={() => setGlobalChange(prev => !prev)}>
							{global}
							{GlobalOn ? <Image src={CloseBtn} alt="버튼" /> : <Image src={OpenBtn} alt="버튼" />}
						</button>
					</div>
					{GlobalOn ? (
						<div className={styles.GobalList}>
							<ul>
								<li>
									<button type="button" value="내국인" onClick={GobalChoice}>
										내국인
									</button>
								</li>
								<li>
									<button type="button" value="외국인" onClick={GobalChoice}>
										외국인
									</button>
								</li>
							</ul>
						</div>
					) : (
						''
					)}
				</div>
				<div className={styles.SignupSubForm}>
					<label className={styles.FormTitle}>지역*</label>
					<div className={styles.TextDiv}>
						<button className={styles.LocationForm} onClick={() => setLocalChange(prev => !prev)}>
							{location}
							{LocalOn ? <Image src={CloseBtn} alt="버튼" /> : <Image src={OpenBtn} alt="버튼" />}
						</button>
					</div>
					{LocalOn ? (
						<div className={styles.LocalList}>
							<ul>
								{locations.map(LocalCity => {
									return (
										<li>
											<button type="button" value={LocalCity} onClick={LocationChoice}>
												{LocalCity}
											</button>
										</li>
									);
								})}
							</ul>
						</div>
					) : (
						''
					)}
				</div>
				<button className={styles.NomalSusseceBtn} onClick={onsubmit}>
					모델회원으로 가입 완료하기
				</button>
			</div>
		</div>
	);
}
