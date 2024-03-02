import layout from '@/app/styles/_layout.module.scss';
import Link from 'next/link';

export default function Header() {
	return (
		<header>
			<div className={layout.headerContainer}>
				<h1>
					<Link href={'/'}>
						로고 이미지
						<img />
					</Link>
				</h1>
				<ul>
					<li>
						<Link href={'/hot'}>추천모델</Link>
					</li>
					<li>
						<Link href={'/modal'}>modal</Link>
					</li>
					<li>
						<Link href={'/photo'}>photo</Link>
					</li>
					<li>
						<Link href={'/free'}>free</Link>
					</li>
				</ul>
			</div>
		</header>
	);
}
