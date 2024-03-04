'use client';
import styles from './login.module.scss';
import useInput from '@/app/Hooks/useInput';
export default function local() {
	const [UserEmail, setEmail] = useInput('');
	const [UserPassword, setPassword] = useInput('');
	const onSubmit = async (e: any) => {
		await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/basic-login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email: UserEmail,
				passwd: UserPassword,
			}),
		});
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
					<button className={styles.closeBtn}>취소</button>
					<button className={styles.loginBtn} onClick={onSubmit}>
						로그인
					</button>
				</div>
			</div>
		</div>
	);
}
