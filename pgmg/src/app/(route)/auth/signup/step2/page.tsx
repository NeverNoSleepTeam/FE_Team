'use client';

import styles from './step2.module.scss';
import TextareaAutosize from 'react-textarea-autosize';
export default function step2() {
	return (
		<div className={styles.Container}>
			<span className={styles.subTitle}>step2.</span>
			<h1 className={styles.Title}>회원정보를 입력해주세요.</h1>
			<form className={styles.SignUpForm}>
				<div className={styles.SignupSubForm}>
					<label className={styles.FormTitle}>이메일 *</label>
					<div className={styles.TextDiv}>
						<input className={styles.TextInput} placeholder="이메일을 입력해주세요" />
						<button className={styles.IdCheckBtn}>중복검사</button>
					</div>
				</div>
				<div className={styles.SignupSubForm}>
					<label className={styles.FormTitle}>비밀번호</label>
					<div className={styles.TextDiv}>
						<input
							className={styles.TextInput}
							type="password"
							placeholder="비밀번호를 입력해주세요 (8자리 이상)"
						/>
					</div>
				</div>
				<div className={styles.SignupSubForm}>
					<label className={styles.FormTitle}>비밀번호 확인</label>
					<div className={styles.TextDiv}>
						<input
							className={styles.TextInput}
							type="password"
							placeholder="비밀번호를 한번 더 입력해 주세요."
						/>
					</div>
				</div>
				<div className={styles.SignupSubForm}>
					<label className={styles.FormTitle}>닉네임 *</label>
					<div className={styles.TextDiv}>
						<input className={styles.TextInput} placeholder="닉네임을 입력해주세요" />
						<button className={styles.IdCheckBtn}>중복검사</button>
					</div>
				</div>
				<div className={styles.SignupSubForm}>
					<label className={styles.FormTitle}>성별 *</label>
					<div className={styles.TextDiv}>
						<select className={styles.GenderList}>
							<option disabled selected>
								성별을 선택해주세요.
							</option>
							<option>남성</option>
							<option>여성</option>
							<option>MTF</option>
							<option>FTM</option>
						</select>
					</div>
				</div>
				<div className={styles.SignupSubForm}>
					<label className={styles.FormTitle}>자기소개</label>
					<div className={styles.TextDiv}>
						<TextareaAutosize className={styles.IntroduceTextarea} />
					</div>
				</div>
			</form>
		</div>
	);
}
