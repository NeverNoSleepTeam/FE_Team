import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type UserEmailStore = { memo: string; setMemo: (text: string) => void };
const EmailMemoStore = create(
	persist<UserEmailStore>(
		set => ({
			memo: '',
			setMemo: (text: string) => set({ memo: text }),
		}),
		{
			name: 'userIdStorage',
		},
	),
);
export default EmailMemoStore;
