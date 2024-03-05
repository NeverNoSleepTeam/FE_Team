import layout from '@/app/styles/_layout.module.scss';
import style from '@/app/styles/mainLayout.module.scss';
import Banner from './_component/Banner';
import Header from './_component/Header';
import NavMenu from './_component/NavMenu';
// import * as Accordion from '@radix-ui/react-accordion';
// import AccordionDemo from './_component/NavMenu';

export default function Home() {
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
											<ul>
												<NavMenu />
											</ul>
										</nav>
										{/* <AccordionDemo /> */}
									</div>
								</section>
								<section className={style.contentSection}>컨텐츠 섹션</section>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
