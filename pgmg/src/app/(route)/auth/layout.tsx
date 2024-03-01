import layout from '@/app/styles/_layout.module.scss';
import { ReactNode } from "react";
type Props = { children: ReactNode };

export default function Layout({ children} : Props) {
    return (
        <div>
            <main className={layout.container}>
                {children}
            </main>
        </div>
    );
}
