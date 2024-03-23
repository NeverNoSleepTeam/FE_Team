'use client';

import layout from '@/app/(route)/mypage/[username]/styles/layout.module.scss';
import style from '../styles/edit_profile.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import OpenBtn from '@/../public/openbtn.svg';
import CloseBtn from '@/../public/closebtn.svg';
import { useCallback, useState } from 'react';
import useInput from '@/app/Hooks/useInput';
import styles from '@/app/(auth)/auth/styles/step2.module.scss';
import { useRouter } from 'next/navigation';
export default function EditProfile() {
	const [PasswordStateOne, SetPasswordStateOne] = useState(false);
	const [GenderStateOne, SetGenderStateOne] = useState(false);
	const [GlobalStateOne, SetGlobalStateOne] = useState(false);
	const [LocalStateOne, SetLocalStateOne] = useState(false);
	const [GenderStateTwo, SetGenderStateTwo] = useState(false);
	const [GlobalStateTwo, SetGlobalStateTwo] = useState(false);
	const [LocalStateTwo, SetLocalStateTwo] = useState(false);
	const [PasswordValue, SetPasswordValue] = useInput('');
	const [GenderValue, SetGenderValue] = useState('');
	const [GlobalValue, SetGlobalValue] = useState('');
	const [LocalValue, SetLocalValue] = useState('');
	const Gender = ['남자', '여자', 'MTF', 'FTM'];
	const Global = ['내국인', '외국인'];
	const router = useRouter();
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
	const HandleGender = useCallback(() => {
		SetGenderStateTwo(prev => !prev);
	}, []);

	const HandleGlobal = useCallback(() => {
		SetGlobalStateTwo(prev => !prev);
	}, []);

	const HandleLocal = useCallback(() => {
		SetLocalStateTwo(prev => !prev);
	}, []);
	const onClickGender = useCallback(() => {
		SetGenderStateTwo(false);
	}, []);
	const onClickGlobal = useCallback(() => {
		SetGlobalStateTwo(false);
	}, []);
	const onClickLocal = useCallback(() => {
		SetLocalStateTwo(false);
	}, []);

	const onSubmit = useCallback(() => {
		router.replace('/mypage/flow/error');
	}, []);

	return (
		<div className={layout.rightContent}>
			<div className={layout.rightInner}>
				<div className={layout.controllBar}>
					<ul className={`${layout.tabList} + ${layout.active}`}>
						<li className={layout.active}>
							<Link href={'edit-my-profile'}>내 프로필</Link>
						</li>
						<li>
							<Link href={'edit-my-image'}>등록이미지</Link>
						</li>
					</ul>
				</div>
				<div className={style.formDiv}>
					<div className={style.InfoDiv}>
						<span className={style.title}>이메일</span>
						<div className={style.inputDiv}>
							<span>test@naver.com</span>
						</div>
					</div>
					<div className={style.InfoDiv}>
						<span className={style.title}>닉네임</span>
						<div className={style.inputDiv}>
							<span>일이삼사오육칠팔구십</span>
						</div>
					</div>
					<div className={style.InfoDiv}>
						<span className={style.title}>비밀번호</span>
						<div className={style.editButton}>
							<div className={style.inputDiv}>
								{PasswordStateOne ? (
									<input className={style.changeInput} />
								) : (
									<span>일이삼사오육칠팔구십</span>
								)}
							</div>
							<button
								onClick={() => SetPasswordStateOne(prev => !prev)}
								className={style.modifyButton}
							>
								수정
							</button>
						</div>
					</div>
					<div className={style.InfoDiv}>
						<span className={style.title}>성별</span>
						<div className={style.editButton}>
							<div className={style.inputDiv}>
								{GenderStateOne ? (
									<button className={style.changeButton} onClick={HandleGender}>
										데이터 나오면 수정해야함
										{GenderStateTwo ? (
											<Image src={OpenBtn} alt="리스트버튼" />
										) : (
											<Image src={CloseBtn} alt="버튼" />
										)}
									</button>
								) : (
									<>
										<span>남자</span>
										<Image src={OpenBtn} alt="버튼" />
									</>
								)}
							</div>
							<button
								onClick={() => SetGenderStateOne(prev => !prev)}
								className={style.modifyButton}
							>
								수정
							</button>
						</div>
						{GenderStateTwo ? (
							<div className={style.ListSelect}>
								<ul>
									{Gender.map(element => {
										return (
											<li>
												<button type="button" value={element} onClick={onClickGlobal}>
													{element}
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
					<div className={style.InfoDiv}>
						<span className={style.title}>국적</span>
						<div className={style.editButton}>
							<div className={style.inputDiv}>
								{GlobalStateOne ? (
									<button type="button" className={style.changeButton} onClick={HandleGlobal}>
										데이터 나오면 수정해야함
										{GlobalStateTwo ? (
											<Image src={OpenBtn} alt="리스트버튼" />
										) : (
											<Image src={CloseBtn} alt="버튼" />
										)}
									</button>
								) : (
									<>
										<span>내국인</span>
										<Image src={OpenBtn} alt="리스트버튼" />
									</>
								)}
							</div>
							<button
								onClick={() => SetGlobalStateOne(prev => !prev)}
								className={style.modifyButton}
							>
								수정
							</button>
						</div>
						{GlobalStateTwo ? (
							<div className={style.ListSelect}>
								<ul>
									{Global.map(element => {
										return (
											<li>
												<button type="button" value={element} onClick={onClickGender}>
													{element}
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
					<div className={style.InfoDiv}>
						<span className={style.title}>지역</span>
						<div className={style.editButton}>
							<div className={style.inputDiv}>
								{LocalStateOne ? (
									<button type="button" className={style.changeButton} onClick={HandleLocal}>
										데이터 나오면 수정해야함
										{GlobalStateTwo ? (
											<Image src={OpenBtn} alt="리스트버튼" />
										) : (
											<Image src={CloseBtn} alt="버튼" />
										)}
									</button>
								) : (
									<>
										<span>지역</span>
										<Image src={OpenBtn} alt="리스트버튼" />
									</>
								)}
							</div>
							<button
								onClick={() => SetLocalStateOne(prev => !prev)}
								className={style.modifyButton}
							>
								수정
							</button>
						</div>
						{LocalStateTwo ? (
							<div className={style.ListSelect}>
								<ul>
									{locations.map(element => {
										return (
											<li>
												<button type="button" value={element} onClick={onClickLocal}>
													{element}
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
					<div className={style.InfoDiv}>
						<span className={style.title}>지기소개</span>
						<div className={style.editButton}>
							<div className={style.inputDiv}>
								<span>자기소개</span>
							</div>
							<button className={style.modifyButton}>수정</button>
						</div>
					</div>
				</div>
				<div className={style.applyDiv}>
					<button className={style.applyButton} onClick={onSubmit}>
						모두 적용하기
					</button>
					<span className={style.applyText}>* 수정한 부분 전체가 내 프로필에 모두 적용됩니다.</span>
				</div>
			</div>
		</div>
	);
}
