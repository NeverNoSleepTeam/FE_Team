import Link from 'next/link';
import Image from 'next/image';

import layout from '@/app/styles/_layout.module.scss';
import style from '@/app/_component/header.module.scss';

import bluelogo from '@/app/common/img/bluelogo.png';
import blackcalendar from '@/app/common/img/black_calender.png';
import blackchat from '@/app/common/img/black_chat.png';
import profile from '@/app/common/img/blac_profile.png';

export default function Header() {
	return (
		<header className={style.header}>
			<div className={layout.container}>
				<div className={style.headerInner}>
					<h1 className={style.logo}>
						<Link href={'/'}>
							<Image src={bluelogo} alt="logo" priority={true} />
						</Link>
					</h1>
					<ul className={style.headerList}>
						<li>
							<Link href={'/hot'}>
								<Image src={blackcalendar} alt="캘린더" />
							</Link>
						</li>
						<li>
							<Link href={'/modal'}>
								<Image src={blackchat} alt="채팅" />
							</Link>
						</li>
						<li>
							<Link href={'/photo'}>
								<Image src={profile} alt="캘린더" />
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}
