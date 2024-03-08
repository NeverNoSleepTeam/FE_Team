import style from '@/app/common/elements/title.module.scss';

type Props = { title: string; colorTitle: string };

export default function Title({ title, colorTitle }: Props) {
	return (
		<h3 className={style.title}>
			{title} <span>{colorTitle}</span>
		</h3>
	);
}
