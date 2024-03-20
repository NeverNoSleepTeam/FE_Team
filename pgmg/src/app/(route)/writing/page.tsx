'use client';

import classNames from 'classnames';
import style from '@/app/(route)/writing/page.module.scss';
import Image from 'next/image';
import images from '@/app/common/img/add-photo-alternate.png';
import n_Arrow from '@/app/common/img/chevron_right.png';
import { useRef, useState } from 'react';

import dayjs from 'dayjs';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '@/app/(route)/_component/calendarCustom.css';

import ReactQuill from 'react-quill';
import QuillNoSSR from '@/app/(route)/_component/Editor';
import '@/app/(route)/_component/editorCustom.css';
import { faker } from '@faker-js/faker';

type DayPiece = Date | null | string;
type DaySelet = DayPiece | [DayPiece, DayPiece];

export default function Writing() {
	const [startValue, onStartChange] = useState<DaySelet>(new Date());
	const [endValue, onEndChange] = useState<DaySelet>(new Date());

	const quillInstance = useRef<ReactQuill>(null);
	const [content, setContent] = useState<string>('');

	const hour = () => {
		for (let i = 1; i <= 12; i++) {
			console.log(i);
			return <option>{i}</option>;
		}
	};

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
				<input
					type="text"
					className={style.input}
					// disabled
					placeholder="카테고리를 선택해주세요."
				/>
				<select
					name="category"
					className={classNames(style.selectBox, style.selectBoxCategory)}
					size={4}
					multiple
				>
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
							<input className={style.calendar} value={'2024.03.01 금요일'} type="text" />
							<Calendar
								locale="ko"
								formatDay={(locale, date) => dayjs(date).format('D')}
								calendarType="gregory"
								next2Label={null}
								prev2Label={null}
								showNeighboringMonth={false}
								onChange={onStartChange}
								value={startValue}
							/>
						</div>
						<div className={style.timeBox}>
							<input className={style.timeValue} value={'오후 12 : 00'} />
							<select
								name="am_pm"
								className={classNames(style.selectBox, style.selectBoxAmPm)}
								size={2}
								multiple
							>
								<option defaultValue="am">오전</option>
								<option value="pm">오후</option>
							</select>
							<select
								name="hour"
								className={classNames(style.selectBox, style.selectBoxHour)}
								size={6}
								multiple
							>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option defaultValue="12">12</option>
							</select>
							<select
								name="minute"
								className={classNames(style.selectBox, style.selectBoxMinute)}
								size={6}
								multiple
							>
								<option defaultValue="00">00</option>
								<option value="05">05</option>
								<option value="10">10</option>
								<option value="15">15</option>
								<option value="20">20</option>
								<option value="25">25</option>
								<option value="30">30</option>
								<option value="35">35</option>
								<option value="40">40</option>
								<option value="45">45</option>
								<option value="50">50</option>
								<option value="55">55</option>
								<option value="60">60</option>
							</select>
						</div>
					</div>
					<span className={style.wave}>~</span>
					<div className={style.dataTime}>
						<div className={style.calendarBox}>
							<input className={style.calendar} value={'2024.03.01 금요일'} type="text" />
							<Calendar
								locale="ko"
								formatDay={(locale, date) => dayjs(date).format('D')}
								calendarType="gregory"
								next2Label={null}
								prev2Label={null}
								showNeighboringMonth={false}
								onChange={onEndChange}
								value={endValue}
							/>
						</div>
						<div className={style.timeBox}>
							<input className={style.timeValue} value={'오후 12 : 00'} />
							<select
								name="am_pm"
								className={classNames(style.selectBox, style.selectBoxAmPm)}
								size={2}
								multiple
							>
								<option defaultValue="am">오전</option>
								<option value="pm">오후</option>
							</select>
							<select
								name="hour"
								className={classNames(style.selectBox, style.selectBoxHour)}
								size={6}
								multiple
							>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
								<option value="5">5</option>
								<option value="6">6</option>
								<option value="7">7</option>
								<option value="8">8</option>
								<option value="9">9</option>
								<option value="10">10</option>
								<option value="11">11</option>
								<option defaultValue="12">12</option>
							</select>
							<select
								name="minute"
								className={classNames(style.selectBox, style.selectBoxMinute)}
								size={6}
								multiple
							>
								<option defaultValue="00">00</option>
								<option value="05">05</option>
								<option value="10">10</option>
								<option value="15">15</option>
								<option value="20">20</option>
								<option value="25">25</option>
								<option value="30">30</option>
								<option value="35">35</option>
								<option value="40">40</option>
								<option value="45">45</option>
								<option value="50">50</option>
								<option value="55">55</option>
								<option value="60">60</option>
							</select>
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
			<div className={style.inputBox} style={{ height: '38dvh' }}>
				<label htmlFor="" className={style.label}>
					내용
				</label>
				<QuillNoSSR
					forwardedRef={quillInstance}
					value={content}
					onChange={setContent}
					theme="snow"
					placeholder="상세내용을 입력해주세요."
				/>
			</div>
			<div className={style.imageUploadWrap}>
				<div className={style.imageUploadBox}>
					<div className={style.imageDot}>
						<span>0</span> / 1
					</div>
					<div className={style.labelTitle}>메인이미지 등록(필수)</div>
					<div className={style.imageBox}>
						<Image src={images} alt="메인 이미지" />
					</div>
				</div>
				<div className={style.imageUploadBox}>
					<div className={style.imageDot}>
						<span>0</span> / 10
					</div>
					<div className={style.labelTitle}>상세이미지 등록</div>
					{/* <div className={style.imageBox}>
						<Image src={images} alt="상세 이미지" />
					</div> */}
					<div className={style.imageBoxSort}>
						<img src={faker.image.avatar()} alt="images" />
						<img src={faker.image.avatar()} alt="images" />
						<img src={faker.image.avatar()} alt="images" />
						<img src={faker.image.avatar()} alt="images" />
						<img src={faker.image.avatar()} alt="images" />
						<img src={faker.image.avatar()} alt="images" />
						<img src={faker.image.avatar()} alt="images" />
						<img src={faker.image.avatar()} alt="images" />
						<img src={faker.image.avatar()} alt="images" />
						<img src={faker.image.avatar()} alt="images" />
					</div>
				</div>
			</div>
		</form>
	);
}

// 모델, 기사의 경우 카테고리 변경
// 포토샵 - 지역 X
// 재능기부 - 가격 X
