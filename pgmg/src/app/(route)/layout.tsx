import { ReactNode } from 'react';
import layout from '@/app/styles/_layout.module.scss';
import style from '@/app/_component/mainLayout.module.scss';

import Header from '@/app/_component/Header';
import Banner from '@/app/_component/Banner';
import NavMenu from '@/app/_component/NavMenu';
import Contents from '@/app/_component/Contents';
import WritingButton from './_component/WritingButton';
import { usePathname } from 'next/navigation';

type Props = { children: ReactNode };

export default function MainLayout({ children }: Props) {
	return (
		<>
			<Header />
			<main>
				<div className={style.wrapper}>
					<Banner />
					<div className={style.mainWrapper}>
						<div className={layout.container}>
							<div className={style.inner}>
								<section className={style.leftSection}>
									<div className={style.leftSectionInner}>
										<nav>
											<NavMenu />
										</nav>
										<WritingButton />
									</div>
								</section>
								<section className={style.contentSection}>
									<div className={style.contentLayout}>
										<Contents children={children} />
									</div>
								</section>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
