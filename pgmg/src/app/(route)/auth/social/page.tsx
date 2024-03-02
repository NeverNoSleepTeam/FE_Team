'use client';

import styles from './social.module.scss';
import Image from 'next/image';
import Kakaologo from '@/app/common/img/kakao.png';
import Googlelogo from '@/app/common/img/google.png';
import Link from 'next/link';
import { signIn } from 'next-auth/react';

export default function social() {
	const ClickKaKao = () => {
		signIn('kakao');
	};
	const ClickGoogle = () => {
		signIn('google');
	};
	return (
		<div className={styles.Container}>
			<h1 className={styles.Title}>어떤 방법으로 로그인 할까요?</h1>
			<span className={styles.subTitle}>
				포글모글에서는 여러분을 위한 다양한 로그인 방식을 제공합니다.
			</span>
			<div className={styles.BtnList}>
				<button className={styles.kakaoBtn} onClick={ClickKaKao}>
					<Image src={Kakaologo} alt="카카오로그인버튼" />
					<span>카카오로 빠른 시작하기</span>
				</button>
				<button className={styles.GoogleBtn} onClick={ClickGoogle}>
					<Image src={Googlelogo} alt="구글로그인버튼" />
					<span>Google 계정으로 시작하기</span>
				</button>
				<Link className={styles.LoginBtn} href="login">
					<span>이메일로 시작하기</span>
				</Link>
				<Link className={styles.SignupBtn} href="signup">
					회원가입 하러가기
				</Link>
			</div>
		</div>
	);
}
