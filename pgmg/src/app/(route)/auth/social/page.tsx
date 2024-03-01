import styles from './social.module.scss';
import layout from '@/app/styles/_layout.module.scss';
export default function social() {
	return (
		<>
			<h1 className={styles.Title}>어떤 방법으로 로그인 할까요?</h1>
			<span className={styles.subTitle}>
				포글모글에서는 여러분을 위한 다양한 로그인 방식을 제공합니다.
			</span>
			<div>
				<div>카카오로 빠른 시작하기</div>
				<div>Google 계정으로 시작하기</div>
				<div>이메일로 시작하기/</div>
			</div>
		</>
	);
}
