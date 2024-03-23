import style from './profileStyle.module.scss';

export const ModelProfileInfoType = () => {
	return (
		<div className={style.userInfoBundle}>
			<span className={style.userInfoTitle}>모델정보</span>
			<div className={style.userInfo}>
				<span>성별</span>
				<p>여성</p>
			</div>
			<div className={style.userInfo}>
				<span>키</span>
				<p>169</p>
			</div>
			<div className={style.userInfo}>
				<span>몸무게</span>
				<p>57</p>
			</div>
			<div className={style.userInfo}>
				<span>상의</span>
				<p>FREE, 44~55</p>
			</div>
			<div className={style.userInfo}>
				<span>하의</span>
				<p>24</p>
			</div>
			<div className={style.userInfo}>
				<span>국적</span>
				<p>내국인</p>
			</div>
			<div className={style.userInfo}>
				<span>지역</span>
				<p>서울</p>
			</div>
		</div>
	);
};

export const PhotoProfileInfoType = () => {
	return (
		<div className={style.userInfoBundle}>
			<span className={style.userInfoTitle}>사진작가정보</span>
			<div className={style.userInfo}>
				<span>성별</span>
				<p>여성</p>
			</div>
			<div className={style.userInfo}>
				<span>국적</span>
				<p>내국인</p>
			</div>
			<div className={style.userInfo}>
				<span>지역</span>
				<p>서울</p>
			</div>
			<div className={style.userInfo}>
				<span>출장</span>
				<p>가능</p>
			</div>
			<div className={style.userInfo}>
				<span>보정</span>
				<p>불가능</p>
			</div>
			<div className={style.userInfo}>
				<span>연출</span>
				<p>협의 후 진행</p>
			</div>
			<div className={style.userInfo}>
				<span>URL</span>
				<p>-</p>
			</div>
			<div className={style.userInfo}>
				<span>PDF</span>
				<p>2024_촬영_포트폴리오.pdf</p>
			</div>
		</div>
	);
};
