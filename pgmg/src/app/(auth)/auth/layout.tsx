'use client';

import { ReactNode } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import layout from '@/app/styles/_layout.module.scss';
import style from '@/app/(auth)/auth/styles/authLayout.module.scss';
import Header from '@/app/_component/Header';

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
	const { data: session } = useSession();
	if (session) {
		redirect('/');
	}
	return (
		<>
			<Header />
			<main>
				<div className={layout.container}>
					<div className={style.authLayout}>{children}</div>
				</div>
			</main>
		</>
	);
}
