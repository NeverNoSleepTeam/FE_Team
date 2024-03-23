import { ReactNode } from 'react';

type Props = { children: ReactNode };

export default function PostPage({ children }: Props) {
	return <>{children}</>;
}
