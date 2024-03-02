import type { Metadata } from 'next';
import './globals.scss';
import AuthSession from '@/app/_component/AuthSession';

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ko">
			<body>
				<AuthSession>{children}</AuthSession>
			</body>
		</html>
	);
}
