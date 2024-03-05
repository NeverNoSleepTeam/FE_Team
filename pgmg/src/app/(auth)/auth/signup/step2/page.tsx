'use client';

import { ChangeEventHandler, useCallback, useState } from 'react';
import Image from 'next/image';
import OpenBtn from '@/../public/openbtn.svg';
import CloseBtn from '@/../public/closebtn.svg';
import { signIn } from 'next-auth/react';
export default function step2() {
	const [UserId, setUserId] = useState('');
	const [UserPassword, setUserPassword] = useInput('');
	const [CheckPassword, setCheckPassword] = useInput('');
	const [NickName, setNickName] = useInput('');
	const [UserIntro, setUserIntro] = useInput('');
	const [Gender, setGender] = useState('성별을 선택해주세요');
	const [genderbtn, setgenderbtn] = useState(false);
	const onText: ChangeEventHandler<HTMLInputElement> = e => {
		setUserId(e.target.value);
		console.log(e.target.value);
	};
	const ClickGender = useCallback((e: any) => {
		setGender(e.target.value);
		setgenderbtn(false);
	}, []);
	const onsubmit = useCallback(
		async (e: any) => {
			e.preventDefault();
			console.log(`${process.env.NEXT_PUBLIC_ENDPOINT}`);
			// console.log(UserId, UserPassword, CheckPassword, NickName);
			// if (!UserId.trim() && !UserPassword.trim() && !CheckPassword.trim() && !NickName.trim()) {
			// 	console.log('정보를 기록해주세요');
			// }
			// if (UserPassword !== CheckPassword) {
			// 	console.log('비밀번호가 다르다.');
			// }
			// if (UserPassword.length <= 8 && CheckPassword.length <= 8) {
			// 	console.log(UserPassword.length, CheckPassword.length);
			// 	console.log('8글자 이상적어줘');
			// }
			await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/auth/basic-register`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email: UserId,
					passwd: UserPassword,
					passwd2: CheckPassword,
					name: NickName,
					gender: Gender,
					intro: '안녕 나는짱구야',
				}),
			});
			const result = await signIn('credentials', {
				email: UserId,
				password: UserPassword,
				redirect: false, // 리다이렉션을 수동으로 처리하려면 false로 설정합니다.
			});

			if (result?.error) {
				// 로그인 실패 처리
				console.log('로그인 실패:', result.error);
			} else {
				// 로그인 성공 처리
				console.log('로그인 성공:', result);
			}
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
					<div className={styles.TextDiv}>
						<input
							className={styles.TextInput}
							placeholder="이메일을 입력해주세요"
							value={UserId}
							onChange={onText}
						/>
						<button className={styles.IdCheckBtn}>중복검사</button>
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
					<div className={styles.TextDiv}>
						<input
							className={styles.TextInput}
							type="password"
							placeholder="비밀번호를 한번 더 입력해 주세요."
							value={CheckPassword}
							onChange={setCheckPassword}
						/>
					</div>
				</div>
				<div className={styles.SignupSubForm}>
					<label className={styles.FormTitle}>닉네임 *</label>
					<div className={styles.TextDiv}>
						<input
							className={styles.TextInput}
							placeholder="닉네임을 입력해주세요"
							value={NickName}
							onChange={setNickName}
						/>
						<button className={styles.IdCheckBtn}>중복검사</button>
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
				<button className={styles.NomalSusseceBtn} onClick={onsubmit}>
					일반회원으로 가입하기
				</button>
				<button className={styles.SusseceBtn}>모델회원으로 가입하기</button>
				<button className={styles.SusseceBtn}>사진작가회원으로 가입하기</button>
			</div>
		</div>
	);
}
