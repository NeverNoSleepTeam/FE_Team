'use client';

import { ChangeEventHandler, EventHandler, FormEventHandler, useCallback, useState } from 'react';
import styles from '../../styles/step2.module.scss';
import Image from 'next/image';
import OpenBtn from '@/../public/openbtn.svg';
import CloseBtn from '@/../public/closebtn.svg';
import { signIn } from 'next-auth/react';
import useInput from '@/app/Hooks/useInput';
import TextareaAutosize from 'react-textarea-autosize';
import { redirect, useRouter } from 'next/navigation';
export default function step2() {
	const router = useRouter();
	const [UserId, setUserId] = useInput('');
	const [UserPassword, setUserPassword] = useInput('');
	const [CheckPassword, changeCheckPassword] = useState('');
	const [NickName, setNickName] = useInput('');
	const [UserIntro, setUserIntro] = useInput('');
	const [Gender, setGender] = useState('성별을 선택해주세요');
	const [genderbtn, setgenderbtn] = useState(false);
	const [IdState, setIdState] = useState('');
	const [NameState, setNameState] = useState('');
	const [EmailError, setEmailError] = useState(false);
	const [PasswordCheck, setPasswordCheck] = useState('');
	const [NameError, setNameError] = useState(false);
	const ClickGender = useCallback((e: any) => {
		setGender(e.target.value);
		setgenderbtn(false);
	}, []);
	const OnCheckId = useCallback(
		async (e: any) => {
			e.preventDefault();

			const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/duplicate/email`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email: UserId,
				}),
			});
			setEmailError(true);
			if (res.ok) {
				const fetchData = await res.json();
				if (fetchData.OK) {
					console.log(fetchData.message);
					setIdState(fetchData.message);
					console.log(IdState);
				} else {
					setIdState(fetchData.message);
				}
			}
		},
		[UserId],
	);
	const OnCheckName = useCallback(
		async (e: any) => {
			e.preventDefault();
			const res = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/duplicate/name`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email: NickName.trim(),
				}),
			});
			setNameError(true);
			if (res.ok) {
				const fetchData2 = await res.json();
				if (fetchData2.message) {
					setNameState(fetchData2.message);
				} else {
					setNameState(fetchData2.message);
				}
			}
		},
		[NickName],
	);

	const setCheckPassword = useCallback(
		async (e: any) => {
			changeCheckPassword(e.target.value);
			console.log(1, UserPassword, 2, e.target.value, UserPassword != CheckPassword);
			if (!UserPassword && !e.target.value) {
				setPasswordCheck('');
			}
			if (UserPassword.trim() == e.target.value.trim()) {
				setPasswordCheck('비밀번호가 일치합니다.');
			}
			if (UserPassword.trim() != e.target.value.trim()) {
				setPasswordCheck('비밀번호 다시 입력해주세요.');
			}
		},
		[UserPassword, CheckPassword],
	);

	const onsubmit = useCallback(
		async (e: any, type: string) => {
			if (!UserId.trim() && !UserPassword.trim() && !CheckPassword.trim() && !NickName.trim()) {
				console.log('정보를 기록해주세요');
			}
			if (UserPassword !== CheckPassword) {
				console.log('비밀번호가 다르다.');
			}
			if (UserPassword.length <= 8 && CheckPassword.length <= 8) {
				console.log(UserPassword.length, CheckPassword.length);
				console.log('8글자 이상적어줘');
			}
			const result = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/auth/basic-register`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email: UserId,
					passwd: UserPassword,
					passwd2: CheckPassword,
					name: NickName,
					gender: '남성',
					intro: '안녕 나는짱구야',
				}),
			});
			if (result.ok) {
				if (type == 'basic') {
					router.replace('/auth/singup/stepend');
				}
				if (type == 'model') {
					router.replace('/auth/signup/modelUser');
				}
				if (type == 'photographer') {
					router.replace('/auth/signup/photographer');
				}
			}
			// const result = await signIn('credentials', {
			// 	email: UserId,
			// 	password: UserPassword,
			// 	redirect: false, // 리다이렉션을 수동으로 처리하려면 false로 설정합니다.
			// });
			//
			// if (result?.error) {
			// 	// 로그인 실패 처리
			// 	console.log('로그인 실패:', result.error);
			// } else {
			// 	// 로그인 성공 처리
			// 	console.log('로그인 성공:', result);
			// }
		},
		[UserId, UserPassword, CheckPassword, NickName],
	);
	return (
		<div className={styles.Container}>
			<span className={styles.subTitle}>step2.</span>
			<h1 className={styles.Title}>회원정보를 입력해주세요.</h1>
			<div className={styles.SignUpForm}>
				<div className={styles.SignupSubForm}>
					<label className={styles.FormTitle}>이메일 *</label>
					<div>
						<div className={styles.TextDiv}>
							<input
								className={styles.TextInput}
								placeholder="이메일을 입력해주세요"
								value={UserId}
								onChange={setUserId}
							/>
							<button className={styles.IdCheckBtn} onClick={OnCheckId}>
								중복검사
							</button>
						</div>
						{EmailError ? <span className={styles.ErrorMessage}>{NameState}</span> : ''}
					</div>
				</div>
				<div className={styles.SignupSubForm}>
					<label className={styles.FormTitle}>비밀번호</label>
					<div className={styles.TextDiv}>
						<input
							className={styles.TextInput}
							type="password"
							placeholder="비밀번호를 입력해주세요 (8자리 이상)"
							value={UserPassword}
							onChange={setUserPassword}
						/>
					</div>
				</div>
				<div className={styles.SignupSubForm}>
					<label className={styles.FormTitle}>비밀번호 확인</label>
					<div>
						<div className={styles.TextDiv}>
							<input
								className={styles.TextInput}
								type="password"
								placeholder="비밀번호를 한번 더 입력해 주세요."
								value={CheckPassword}
								onChange={setCheckPassword}
							/>
						</div>
						{PasswordCheck == '' ? (
							''
						) : PasswordCheck == '비밀번호가 일치합니다.' ? (
							<span className={styles.SuccessMessage}>비밀번호가 일치합니다.</span>
						) : (
							<span className={styles.ErrorMessage}>비밀번호 다시 입력해주세요.</span>
						)}
					</div>
				</div>
				<div className={styles.SignupSubForm}>
					<label className={styles.FormTitle}>닉네임 *</label>
					<div>
						<div className={styles.TextDiv}>
							<input
								className={styles.TextInput}
								placeholder="닉네임을 입력해주세요"
								value={NickName}
								onChange={setNickName}
							/>
							<button className={styles.IdCheckBtn} onClick={OnCheckName}>
								중복검사
							</button>
						</div>
						{NameError ? (
							NameState === '사용가능한 닉네임입니다.' ? (
								<span className={styles.SuccessMessage}>{NameState}</span>
							) : (
								<span className={styles.ErrorMessage}>{NameState}</span>
							)
						) : (
							''
						)}
					</div>
				</div>
				<div className={styles.SignupSubForm}>
					<label className={styles.FormTitle}>성별 *</label>
					<div className={styles.TextDiv}>
						<button onClick={() => setgenderbtn(prev => !prev)} className={styles.GenderForm}>
							{Gender}
							{genderbtn ? <Image src={CloseBtn} alt="버튼" /> : <Image src={OpenBtn} alt="버튼" />}
						</button>
					</div>
					<div className={styles.GenderList}>
						{genderbtn ? (
							<ul>
								<li>
									<button value="남성" type="button" onClick={ClickGender}>
										남성
									</button>
								</li>
								<li>
									<button value="여성" type="button" onClick={ClickGender}>
										여성
									</button>
								</li>
								<li>
									<button value="MTF" type="button" onClick={ClickGender}>
										MTF
									</button>
								</li>
								<li>
									<button value="FTM" type="button" onClick={ClickGender}>
										FTM
									</button>
								</li>
							</ul>
						) : (
							''
						)}
					</div>
				</div>
				<div className={styles.SignupSubForm}>
					<label className={styles.FormTitle}>자기소개</label>
					<div className={styles.TextDiv}>
						<TextareaAutosize
							className={styles.IntroduceTextarea}
							placeholder="소개글을 작성하여 신뢰도를 높여주세요!"
							value={UserIntro}
							onChange={setUserIntro}
						/>
					</div>
				</div>
				<button className={styles.NomalSusseceBtn} onClick={() => onsubmit('', 'basic')}>
					일반회원으로 가입하기
				</button>
				<button className={styles.SusseceBtn} onClick={() => onsubmit('', 'model')}>
					모델회원으로 가입하기
				</button>
				<button className={styles.SusseceBtn} onClick={() => onsubmit('', 'photographer')}>
					사진작가회원으로 가입하기
				</button>
			</div>
		</div>
	);
}
