import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserEmailStore = {
	memo: string;
	setMemo: (text: string) => void;
	level: string;
	setLevel: (text: string) => void;
};
const EmailMemoStore = create(
	persist<UserEmailStore>(
		set => ({
			memo: '',
			setMemo: (text: string) => set({ memo: text }),
			level: '',
			setLevel: (text: string) => set({ level: text }),
		}),
		{
			name: 'userEmailStorage',
		},
	),
);
export default EmailMemoStore;
