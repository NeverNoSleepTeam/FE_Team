import layout from '@/app/styles/_layout.module.scss';
import style from '@/app/_component/banner.module.scss';

export default function Banner() {
	return (
		<div className={layout.container}>
			<div className={style.banner}></div>
		</div>
	);
}
