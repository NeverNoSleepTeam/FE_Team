import layout from '@/app/styles/_layout.module.scss';
import style from '@/app/styles/mainLayout.module.scss';
import Banner from './_component/Banner';
import Header from './_component/Header';
import NavMenu from './_component/NavMenu';
import React from 'react';

type Props = { children: React.ReactNode };

export default function Home({ children }: Props) {
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
										{/* <AccordionDemo /> */}
									</div>
								</section>
								<section className={style.contentSection}>{children}컨텐츠 섹션</section>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
