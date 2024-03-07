import create from 'zustand';

const EmailMemoStore = create(set => ({
	memo: '',
	setMemo: (text: string) => set({ memo: text }),
}));

export default EmailMemoStore;
