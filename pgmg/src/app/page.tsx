import layout from '@/app/styles/_layout.module.scss';
import style from '@/app/styles/mainLayout.module.scss';
import Banner from './_component/Banner';
import Header from './_component/Header';

export default function Home() {
	return (
		<>
			<Header />
			<main>
				<Banner />
				<div>
					<div className={layout.container}>
						<div className={style.wrap}>
							<section className={style.leftSection}></section>
							<section className={style.contentSection}></section>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
