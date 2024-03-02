import layout from '@/app/styles/_layout.module.scss';
import { ReactNode } from 'react';
type Props = { children: ReactNode };

export default function AuthLayout({ children }: Props) {
	return <div className={layout.container}>{children}</div>;
}
