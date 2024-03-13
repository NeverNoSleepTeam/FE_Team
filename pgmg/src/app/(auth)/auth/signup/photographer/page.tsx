'use client';
import styles from '@/app/(auth)/auth/styles/photographer.module.scss';
import { ChangeEvent, FormEvent, useCallback, useRef, useState } from 'react';
import Image from 'next/image';
import CloseBtn from '../../../../../../public/closebtn.svg';
import OpenBtn from '../../../../../../public/openbtn.svg';
import Upload from '@/app/common/img/upload.svg';
import EmailMemoStore from '@/app/store/memo';
import useInput from '@/app/Hooks/useInput';
export default function photographer() {
	const [Business, setBusiness] = useState('출장 여부 선택해 주세요.');
	const [BusinessState, setBusinessState] = useState(false);
	const [Correction, setCorrection] = useState('보정 여부 선택해 주세요.');
	const [CorrectionState, setCorrectionState] = useState(false);
	const [Production, setProduction] = useState('연출 여부 선택해 주세요.');
	const [ProductionState, setProductionState] = useState(false);
	const [file, setFile] = useState<Blob | null>(null);
	const [portfolioURL, setPortfolioURL] = useInput('');
	const imageInput = useRef<HTMLInputElement>(null);
	const { memo } = EmailMemoStore();
	const onChangeBusiness = useCallback((e: any) => {
		setBusiness(e.target.value);
		setBusinessState(false);
	}, []);
	const onChangeCorrection = useCallback((e: any) => {
		setCorrection(e.target.value);
		setCorrectionState(false);
	}, []);
	const onChangeProduction = useCallback((e: any) => {
		setProduction(e.target.value);
		setProductionState(false);
	}, []);
	const HandleRef = () => {
		imageInput.current.click();
	};
	const HandleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			const selectedFile = e.target.files[0];
			console.log(selectedFile);
			// Basic file validation (optional)
			if (!selectedFile.type.match('application/pdf')) {
				alert('Please select a PDF file.');
				return;
			}

			setFile(selectedFile); // Update state with the selected file
		} else {
			setFile(null); // Set file to null if no file is selected
		}
	};

	const onsubmit = useCallback(
		async (e: FormEvent<HTMLFormElement>) => {
			e.preventDefault();
			const formData = new FormData();
			formData.append('file', file!);
			// console.log(formData.get('file'));
			// await fetch(
			// 	`${process.env.NEXT_PUBLIC_ENDPOINT}/auth/prophoto-register?email=qwe&businessTrip=a&correction=a&production=a&portfolioURL=${portfolioURL}`,
			// 	{
			// 		method: 'POST',
			// 		headers: {
			// 			'Content-Type': 'multipart/form-data',
			// 		},
			// 		body: formData,
			// 	},
			// );

			const apiUrl = `${process.env.NEXT_PUBLIC_ENDPOINT}/auth/prophoto-register`;
			const queryParams = new URLSearchParams({
				email: 'qwe',
				businessTrip: 'a',
				correction: 'a',
				production: 'a',
				portfolioURL: portfolioURL,
			});

			const finalUrl = `${apiUrl}?${queryParams.toString()}`;

			await fetch(finalUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'multipart/form-data',
				},
				body: formData,
			});
		},
		[BusinessState, Correction, Production, memo, portfolioURL, file],
	);
	return (
		<div className={styles.Container}>
			<span className={styles.subTitle}>step2.</span>
			<h1 className={styles.Title}>회원정보를 입력해주세요.</h1>
			<div className={styles.SignUpForm}>
				<div className={styles.SignupSubForm}>
					<label className={styles.FormTitle}>출장 가능 여부 *</label>
					<div className={styles.TextDiv}>
						<button
							className={styles.ListButtonForm}
							onClick={() => setBusinessState(prev => !prev)}
						>
							{Business}
							{BusinessState ? (
								<Image src={CloseBtn} alt="버튼" />
							) : (
								<Image src={OpenBtn} alt="버튼" />
							)}
						</button>
					</div>
					{BusinessState ? (
						<div className={styles.ListForm}>
							<ul>
								<li>
									<button value="가능" onClick={onChangeBusiness}>
										가능
									</button>
								</li>
								<li>
									<button value="불가능" onClick={onChangeBusiness}>
										불가능
									</button>
								</li>
								<li>
									<button value="협의 후 진행" onClick={onChangeBusiness}>
										협의 후 진행
									</button>
								</li>
							</ul>
						</div>
					) : (
						''
					)}
				</div>
				<div className={styles.SignupSubForm}>
					<label className={styles.FormTitle}>보정 가능 여부 *</label>
					<div className={styles.TextDiv}>
						<button
							className={styles.ListButtonForm}
							onClick={() => setCorrectionState(prev => !prev)}
						>
							{Correction}
							{CorrectionState ? (
								<Image src={CloseBtn} alt="버튼" />
							) : (
								<Image src={OpenBtn} alt="버튼" />
							)}
						</button>
					</div>
					{CorrectionState ? (
						<div className={styles.ListForm}>
							<ul>
								<li>
									<button value="가능" onClick={onChangeCorrection}>
										가능
									</button>
								</li>
								<li>
									<button value="불가능" onClick={onChangeCorrection}>
										불가능
									</button>
								</li>
								<li>
									<button value="협의 후 진행" onClick={onChangeCorrection}>
										협의 후 진행
									</button>
								</li>
							</ul>
						</div>
					) : (
						''
					)}
				</div>
				<div className={styles.SignupSubForm}>
					<label className={styles.FormTitle}>연출 가능 여부 *</label>
					<div className={styles.TextDiv}>
						<button
							className={styles.ListButtonForm}
							onClick={() => setProductionState(prev => !prev)}
						>
							{Production}
							{ProductionState ? (
								<Image src={CloseBtn} alt="버튼" />
							) : (
								<Image src={OpenBtn} alt="버튼" />
							)}
						</button>
					</div>
					{ProductionState ? (
						<div className={styles.ListForm}>
							<ul>
								<li>
									<button value="가능" onClick={onChangeProduction}>
										가능
									</button>
								</li>
								<li>
									<button value="불가능" onClick={onChangeProduction}>
										불가능
									</button>
								</li>
								<li>
									<button value="협의 후 진행" onClick={onChangeProduction}>
										협의 후 진행
									</button>
								</li>
							</ul>
						</div>
					) : (
						''
					)}
				</div>
				<div className={styles.SignupSubForm}>
					<label className={styles.FormTitle}>포토폴리오*</label>
					<div className={styles.TextDiv}>
						<input
							className={styles.TextInput}
							placeholder="URL을 입력해주세요."
							value={portfolioURL}
							onChange={setPortfolioURL}
						/>
					</div>
					<div>
						<div className={styles.TextDiv}>
							<input
								className={styles.fileInput}
								type="file"
								accept="application/pdf"
								ref={imageInput}
								onChange={HandleFileChange}
							/>
							<button className={styles.ListButtonForm} onClick={HandleRef}>
								PDF 파일을 업로드 해주세요
								<Image src={Upload} alt="업 로드" />
							</button>
						</div>
						<span className={styles.fileInfo}>* 파일업로드 용량제한 500MB, (PDF파일만 가능)</span>
					</div>
				</div>
				<button className={styles.NomalSusseceBtn} onClick={onsubmit}>
					사진작가회원으로 가입 완료하기
				</button>
			</div>
		</div>
	);
}
