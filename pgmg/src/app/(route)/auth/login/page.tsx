import styles from './login.module.scss';
export default function local() {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>이메일로 로그인하기</h1>
			<div className={styles.loginForm}>
				<label className={styles.subTitle}>이메일</label>
				<input className={styles.loginInput} type="text" />
				<label className={styles.subTitle}>비밀번호</label>
				<input className={styles.loginInput} type="password" />
				<div className={styles.submit}>
					<button className={styles.closeBtn}>취소</button>
					<button className={styles.loginBtn}>로그인</button>
				</div>
			</div>
		</div>
	);
}
