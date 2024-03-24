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
					<span>{content}</span>
				</div>
				<button className={styles.OkButton} onClick={() => router.back()}>
					확인
				</button>
			</div>
		</div>
	);
}
