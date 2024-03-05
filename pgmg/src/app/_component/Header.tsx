import layout from '@/app/styles/_layout.module.scss';
import style from '@/app/_component/header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import BlueLogo from '@/app/common/img/bluelogo.png';
import BlackCalendar from '@/app/common/img/Blackcalender.png';
import BlackChat from '@/app/common/img/BlackChat.png';
import Profile from '@/app/common/img/BlackProfile.png';

export default function Header() {
	return (
		<header className={style.header}>
			<div className={layout.container}>
				<div className={style.headerInner}>
					<h1 className={style.logo}>
						<Link href={'/'}>
							<Image src={BlueLogo} alt="logo" priority={true} />
						</Link>
					</h1>
					<ul className={style.headerList}>
						<li>
							<Link href={'/hot'}>
								<Image src={BlackCalendar} alt="캘린더" />
							</Link>
						</li>
						<li>
							<Link href={'/modal'}>
								<Image src={BlackChat} alt="채팅" />
							</Link>
						</li>
						<li>
							<Link href={'/photo'}>
								<Image src={Profile} alt="캘린더" />
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</header>
	);
}
