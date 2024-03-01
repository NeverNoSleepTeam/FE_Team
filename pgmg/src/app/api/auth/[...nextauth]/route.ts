import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import KakaoProvider from 'next-auth/providers/kakao';
export const handler = NextAuth({
	providers: [
		GoogleProvider({
			clientId: `${process.env.google_clientId}`,
			clientSecret: `${process.env.google_clientSecret}`,
		}),
		KakaoProvider({
			clientId: `${process.env.kakao_clientId}`,
			clientSecret: `${process.env.kakao_clientSecret}`,
		}),
	],
	secert: `${process.env.NEXTAUTH_URL}`,
});

export { handler as GET, handler as POST };
