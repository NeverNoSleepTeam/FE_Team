'use client';

import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const QuillNoSSR = dynamic(() => import('react-quill'), {
	ssr: false,
	loading: () => <p>Loading...</p>,
});
export default QuillNoSSR;
