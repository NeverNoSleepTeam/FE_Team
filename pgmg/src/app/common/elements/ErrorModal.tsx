'use client';

import styles from './ErrorModal.module.scss';
import { useRouter } from 'next/navigation';
type Props = {
	title: string;
	content: string;
};
export default function ErrorModal({ title, content }: Props) {
	const router = useRouter();
	return (
		<div className={styles.modalBackground}>
			<div className={styles.modal}>
				<h1 className={styles.title}>{title}</h1>
				<div className={styles.subtitle}>
					<span>사진작가로 회원가입을 하실 경우, URL 또는 PDF 파일을</span>

					<span>업로드를 해주셔야 회원가입을 하실 수 있습니다.</span>
				</div>
				<button className={styles.OkButton} onClick={() => router.back()}>
					확인
				</button>
			</div>
		</div>
	);
}
