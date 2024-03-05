import type { Metadata } from 'next';
import './globals.scss';
import AuthSession from '@/app/_component/AuthSession';

export const metadata: Metadata = {
	title: '포글모글',
	description: '사진기사 & 모델 연결해주는 중계서비스',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko" className="dark">
			<body>
				<AuthSession>{children}</AuthSession>
			</body>
		</html>
	);
}
