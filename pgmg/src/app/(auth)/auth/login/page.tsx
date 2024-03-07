'use client';
import useInput from '@/app/hooks/useInput';
import styles from './login.module.scss';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
export default function local() {
	const [UserEmail, setEmail] = useInput('');
	const [UserPassword, setPassword] = useInput('');
	const router = useRouter();
	const BackBtn = () => {
		router.back();
	};
	const onSubmit = async (e: any) => {
		e.preventDefault();
		const result = await signIn('credentials', {
			email: UserEmail,
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
	};
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>이메일로 로그인하기</h1>
			<div className={styles.loginForm}>
				<label className={styles.subTitle}>이메일</label>
				<input className={styles.loginInput} type="text" value={UserEmail} onChange={setEmail} />
				<label className={styles.subTitle}>비밀번호</label>
				<input
					className={styles.loginInput}
					type="password"
					value={UserPassword}
					onChange={setPassword}
				/>
				<div className={styles.submit}>
					<button className={styles.closeBtn} onClick={BackBtn}>
						취소
					</button>
					<button className={styles.loginBtn} onClick={onSubmit}>
						로그인
					</button>
				</div>
			</div>
		</div>
	);
}
