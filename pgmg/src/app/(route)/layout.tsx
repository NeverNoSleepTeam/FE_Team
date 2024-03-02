import { ReactNode } from 'react';

type Props = { children: ReactNode };

export default function Layout({ children }: Props) {
	return (
		<div>
			레이아웃
			<main>{children}</main>
		</div>
	);
}
