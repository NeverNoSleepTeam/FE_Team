import dynamic from 'next/dynamic';
import ReactQuill, { ReactQuillProps } from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface ForwardedQuillComponent extends ReactQuillProps {
	forwardedRef: React.Ref<ReactQuill>;
}

const QuillNoSSR = dynamic(
	async () => {
		const { default: QuillComponent } = await import('react-quill');
		const Quill = ({ forwardedRef, ...props }: ForwardedQuillComponent) => (
			<QuillComponent ref={forwardedRef} {...props} />
		);
		return Quill;
	},
	{
		loading: () => <p>...loading</p>,
		ssr: false,
	},
);
export default QuillNoSSR;
