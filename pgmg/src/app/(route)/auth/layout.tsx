'use client';

import { ReactNode } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import layout from '@/app/styles/_layout.module.scss';
import style from '@/app/(route)/auth/styles/authLayout.module.scss';

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
	const { data: session } = useSession();
	if (session) {
		redirect('/');
	}
	return (
		<div className={layout.container}>
			<div className={style.authLayout}>{children}</div>
		</div>
	);
}
