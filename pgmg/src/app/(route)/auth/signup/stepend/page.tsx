import styles from './stepend.module.scss';
export default function stepend() {
	return (
		<div className={styles.container}>
			<span className={styles.subTitle}>지금바로 포글모글의 다양한 서비스를 이용해보세요.</span>
			<div>
				<h1 className={styles.title}>
					<span className={styles.User}>일반회원</span> 으로
				</h1>
				<h1 className={styles.title}>가입이 완료되었습니다!</h1>
			</div>
			<div className={styles.submit}>
				<button className={styles.gomain}>메인으로 돌아가기</button>
				<button className={styles.gomypage}>마이페이지 둘러보기</button>
			</div>
		</div>
	);
}
