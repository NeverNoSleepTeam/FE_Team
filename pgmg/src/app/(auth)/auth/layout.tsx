'use client';

import { ReactNode } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import layout from '@/app/styles/_layout.module.scss';
import style from '@/app/(auth)/auth/styles/authLayout.module.scss';
import Header from '@/app/_component/Header';

type Props = { children: ReactNode; modal: ReactNode };

export default function Layout({ children, modal }: Props) {
	const { data: session } = useSession();
	if (session) {
		const getToken = async () => {
			const response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/social`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					email: session?.user?.email,
				}),
			});
			const data = await response.text(); // 응답 데이터를 JSON 형식으로 파싱합니다.
			if (response.ok) {
				// 로그인 성공 처리
				console.log('로그인 성공:');
				localStorage.setItem('token', data);
				redirect('/');
				return data; // 사용자 정보를 반환합니다.
			} else {
				// 로그인 실패 처리
				console.log('로그인 실패:');
				return null; // 로그인 실패로 처리합니다.
			}
		};
		getToken();
	}
	return (
		<>
			<Header />
			<main>
				<div className={layout.container}>
					<div className={style.authLayout}>
						{children}
						{modal}
					</div>
				</div>
			</main>
		</>
	);
}
