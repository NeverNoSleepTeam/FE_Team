import ErrorModal from '@/app/common/elements/ErrorModal';

export default function ApplyModal() {
	return (
		<ErrorModal
			title={'회원정보 수정완료'}
			content={'입력하신 회원정보가 정상적으로 변경되었습니다.'}
		/>
	);
}
