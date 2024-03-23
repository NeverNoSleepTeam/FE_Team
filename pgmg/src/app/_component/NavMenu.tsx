'use client';

import React from 'react';
import Link from 'next/link';
import style from '@/app/_component/navMenu.module.scss';

export default function NavMenu() {
	return (
		<ul className={style.navMenu}>
			<li>
				<Link href={'/'}>
					<span className={style.navText}>❤️ 포글모글 추천</span>
				</Link>
			</li>
			<li>
				<span className={style.navText}>💎 모델</span>
				<ul className={style.subNavMenu}>
					<li>
						<Link href={'/post/modelmember/wantit'}>
							<span>모델 필요해</span>
						</Link>
					</li>
					<li>
						<Link href={'/post/modelmember/doit'}>
							<span>모델 해줄게</span>
						</Link>
					</li>
				</ul>
			</li>
			<li>
				<span className={style.navText}>📸 사진 촬영</span>
				<ul className={style.subNavMenu}>
					<li>
						<Link href={'/post/photographer/wantit'}>
							<span>사진작가 필요해</span>
						</Link>
					</li>
					<li>
						<Link href={'/post/photographer/doit'}>
							<span>사진작가 해줄게</span>
						</Link>
					</li>
				</ul>
			</li>
			<li>
				<Link href={'/post/photoshop'}>
					<span className={style.navText}>🎨 포토샵</span>
				</Link>
			</li>
			<li>
				<Link href={'/post/free'}>
					<span className={style.navText}>✨ 재능기부</span>
				</Link>
			</li>
		</ul>
	);
}
