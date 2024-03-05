'use client';

import React from 'react';
import Link from 'next/link';
import style from '@/app/_component/navMenu.module.scss';
import { Accordion, AccordionItem } from '@nextui-org/react';

export default function NavMenu() {
	return (
		<>
			<li>
				<Link href={'/'}>
					<div className={style.navPill}>
						<span>❤️ 포글모글 추천</span>
					</div>
				</Link>
			</li>
			<li>
				<span>💎 모델</span>
				<ul>
					<li>
						<Link href={'/model/help'}>모델 필요해</Link>
					</li>
					<li>
						<Link href={'/model/doit'}>모델 해줄게</Link>
					</li>
				</ul>
			</li>
			<li>
				<span>📸 사진 촬영</span>
				<ul>
					<li>
						<Link href={'/photol/help'}>사진작가 필요해</Link>
					</li>
					<li>
						<Link href={'/photo/doit'}>사진작가 해줄게</Link>
					</li>
				</ul>
			</li>
			<li>
				<Link href={'/photoshop'}>
					<div className={style.navPill}>
						<span>🎨 포토샵</span>
					</div>
				</Link>
			</li>
			<li>
				<Link href={'/free'}>
					<div className={style.navPill}>
						<span>✨ 재능기부</span>
					</div>
				</Link>
			</li>
			<br />
			<br />
			<Link href={'/'}>❤️ 포글모글 추천</Link>
			<Accordion>
				<AccordionItem key="2" aria-label="Accordion 2" title="💎 모델">
					<Link href={'/model/help'}>모델 필요해</Link>
					<Link href={'/model/doit'}>모델 해줄게</Link>
				</AccordionItem>
				<AccordionItem key="3" aria-label="Accordion 3" title="📸 사진 촬영">
					<Link href={'/photol/help'}>사진작가 필요해</Link>
					<Link href={'/photo/doit'}>사진작가 해줄게</Link>
				</AccordionItem>
			</Accordion>
			<Link href={'/photoshop'}>🎨 포토샵</Link>
			<Link href={'/free'}>✨ 재능기부</Link>
		</>
	);
}
