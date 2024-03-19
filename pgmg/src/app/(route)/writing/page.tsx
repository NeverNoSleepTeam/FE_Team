'use client';

import style from '@/app/(route)/writing/page.module.scss';
import Image from 'next/image';
import images from '@/app/common/img/add-photo-alternate.png';
import { useRef, useState } from 'react';

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import ReactQuill from 'react-quill';
import QuillNoSSR from '@/app/(route)/_component/Editor';

type ValuePiece = Date | null | string;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function Writing() {
	const [startValue, onStartChange] = useState<Value>(new Date());
	const [endValue, onEndChange] = useState<Value>(new Date());

	const quillInstance = useRef<ReactQuill>(null);
	const [content, setContent] = useState<string>('');

	console.log(content);

	return (
		<form className={style.formContainer}>
			<div className={style.inputBox}>
				<label htmlFor="" className={style.label}>
					제목
				</label>
				<input type="text" className={style.input} placeholder="제목을 입력해주세요." />
			</div>
			<div className={style.inputBox}>
				<label htmlFor="" className={style.label}>
					카테고리
				</label>
				<input type="text" className={style.input} placeholder="카테고리를 선택해주세요." />
				<select name="category" className={style.selectBox} size={6} multiple>
					<option value="hand">손</option>
					<option value="hair">헤어</option>
					<option value="fitting">피팅</option>
					<option value="face">얼굴</option>
					<option value="body">전신</option>
					<option value="etc">기타</option>
				</select>
			</div>
			<div className={style.dataTimeWrap}>
				<label htmlFor="" className={style.label}>
					날짜/시간
				</label>
				<div className={style.dataTimeInner}>
					<div className={style.dataTime}>
						<div className={style.calendarBox}>
							<input className={style.calendar} type="text" />
							<Calendar locale="ko" onChange={onStartChange} value={startValue} />
						</div>
						<div className={style.timeBox}>
							<input type="text" />
							<select name="am_pm" className={style.selectBox} size={6} multiple>
								<option value="am">오전</option>
								<option value="pm">오후</option>
							</select>
							<select name="hour" className={style.selectBox} size={6} multiple>
								<option value="hand">손</option>
								<option value="hair">헤어</option>
								<option value="fitting">피팅</option>
								<option value="face">얼굴</option>
								<option value="body">전신</option>
								<option value="etc">기타</option>
							</select>
							<select name="minute" className={style.selectBox} size={6} multiple>
								<option value="hand">손</option>
								<option value="hair">헤어</option>
								<option value="fitting">피팅</option>
								<option value="face">얼굴</option>
								<option value="body">전신</option>
								<option value="etc">기타</option>
							</select>
						</div>
					</div>
					<span className={style.wave}>~</span>
					<div className={style.dataTime}>
						<div className={style.calendarBox}>
							<input className={style.calendar} type="text" />
							<Calendar locale="ko" onChange={onEndChange} value={endValue} />
							<div className={style.calendar}>{}</div>
						</div>
						<div className={style.timeBox}>
							<input type="text" />
						</div>
					</div>
				</div>
			</div>
			<div className={style.inputBox}>
				<label htmlFor="" className={style.label}>
					지역
				</label>
				<input type="text" className={style.input} placeholder="지역을 입력해주세요." />
			</div>
			<div className={style.inputBox}>
				<label htmlFor="" className={style.label}>
					가격
				</label>
				<input
					type="number"
					className={style.input}
					placeholder="가격을 입력해주세요. (ex : 30000)"
				/>
			</div>
			<div className={style.inputBox} style={{ height: '40dvh' }}>
				<label htmlFor="" className={style.label}>
					내용
				</label>
				<QuillNoSSR
					className={style.editorStyle}
					forwardedRef={quillInstance}
					value={content}
					onChange={setContent}
					theme="snow"
					placeholder="상세내용을 입력해주세요."
				/>
			</div>
			<div className={style.inputWrap}>
				<div className={style.inputBox}>
					<div className={style.label}>메인이미지 등록(필수)</div>
					<div className={style.imageBox}>
						<Image src={images} alt="메인 이미지" />
					</div>
				</div>
				<div className={style.inputBox}>
					<div className={style.label}>상세이미지 등록</div>
					<div className={style.imageBox}>
						<Image src={images} alt="상세 이미지" />
					</div>
				</div>
			</div>
		</form>
	);
}

// 모델, 기사의 경우 카테고리 변경
// 포토샵 - 지역 X
// 재능기부 - 가격 X
