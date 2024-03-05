import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import KakaoProvider from 'next-auth/providers/kakao';
import CredentialsProvider from 'next-auth/providers/credentials';
export const handler = NextAuth({
	pages: {
		signIn: '/auth/login',
	},
	providers: [
		GoogleProvider({
			clientId: `${process.env.google_clientId}`,
			clientSecret: `${process.env.google_clientSecret}`,
		}),
		KakaoProvider({
			clientId: `${process.env.kakao_clientId}`,
			clientSecret: `${process.env.kakao_clientSecret}`,
		}),
		CredentialsProvider({
			async authorize(credentials: Record<string, string>) {
				const response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/basic-login`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						email: credentials.email,
						passwd: credentials.password,
					}),
				});
				const data = await response.text(); // 응답 데이터를 JSON 형식으로 파싱합니다.
				console.log(response.text());
				if (response.ok) {
					// 로그인 성공 처리
					console.log('로그인 성공:', data);
					return data; // 사용자 정보를 반환합니다.
				} else {
					// 로그인 실패 처리
					console.log('로그인 실패:', data);
					return null; // 로그인 실패로 처리합니다.
				}
			},
		}),
	],
	secret: `${process.env.NEXTAUTH_URL}`,
});

export { handler as GET, handler as POST };

//
