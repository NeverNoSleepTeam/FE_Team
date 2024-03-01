'use client';

import layout from '@/app/styles/_layout.module.scss';
import { ReactNode } from 'react';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
	const { data: session } = useSession();
	if (session) {
		redirect('/');
	}
	return (
		<div>
			<main className={layout.container}>{children}</main>
		</div>
	);
}
