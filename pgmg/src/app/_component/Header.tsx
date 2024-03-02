import layout from '@/app/styles/_layout.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import BlueLogo from '@/../public/bluelogo.png';
import BlackCalendar from '@/../public/Blackcalender.png';
import BlackChat from '@/../public/BlackChat.png';
import Profile from '@/../public/BlackProfile.png';
export default function Header() {
	return (
		<header>
			<div className={layout.headerContainer}>
				<h1>
					<Link href={'/'}>
						<Image src={BlueLogo} alt="로고" />
					</Link>
				</h1>
				<ul className={layout.headerList}>
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
					{/*<li>*/}
					{/*	<Link href={'/free'}>free</Link>*/}
					{/*</li>*/}
				</ul>
			</div>
		</header>
	);
}
