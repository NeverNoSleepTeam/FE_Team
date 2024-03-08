import style from '@/app/common/elements/title.module.scss';

type Props = { title: string; colorTitle: string; title2?: string };

export const Title1 = ({ title, colorTitle }: Props) => {
	return (
		<h3 className={style.title}>
			{title} <span>{colorTitle}</span>
		</h3>
	);
};

export const Title2 = ({ title, colorTitle }: Props) => {
	return (
		<h3 className={style.title2}>
			{colorTitle} <span>{title}</span>
		</h3>
	);
};

export const Title3 = ({ title, colorTitle, title2 }: Props) => {
	return (
		<h3 className={style.title}>
			{title} <span>{colorTitle}</span> {title2}
		</h3>
	);
};
