import QuillNoSSR from '@/app/(route)/_component/Editor';
import style from './page.module.scss';
import Image from 'next/image';
import images from '@/app/common/img/add-photo-alternate.png';

export default function writing() {
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
			<div className={style.inputBoxDate}>
				<label htmlFor="" className={style.label}>
					날짜/시간
				</label>
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
				<div>
					<QuillNoSSR
						className={style.editorStyle}
						theme="snow"
						placeholder="상세내용을 입력해주세요."
					/>
				</div>
			</div>
			<div className={style.inputWrap}>
				<div className={style.inputBox}>
					<div className={style.label}>메인이미지 등록(필수)</div>
					<Image src={images} alt="메인 이미지" />
				</div>
				<div className={style.inputBox}>
					<div className={style.label}>상세이미지 등록</div>
					<Image src={images} alt="상세 이미지" />
				</div>
			</div>
		</form>
	);
}

// 모델, 기사의 경우 카테고리 변경
// 포토샵 - 지역 X
// 재능기부 - 가격 X
