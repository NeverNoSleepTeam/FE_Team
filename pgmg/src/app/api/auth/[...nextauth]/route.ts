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
				// 1. API 호출 준비
				const requestBody = JSON.stringify({
					email: credentials.email,
					password: credentials.password,
				});
				const options = {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json; charset=utf-8',
					},
					body: requestBody,
				};

				// 2. API 호출 및 응답 처리
				const response = await fetch(`${process.env.NEXT_PUBLIC_ENDPOINT}/login`, options);
				const data = await response.json();
				console.log(response);

				// 3. 응답 결과에 따라 처리
				if (response.ok) {
					// 로그인 성공 처리
					console.log('로그인 성공:', data);
					return data; // 사용자 정보를 반환합니다.
				} else {
					// 로그인 실패 처리
					const errorMessage = data.message || '알 수 없는 오류';
					console.error('로그인 실패:', errorMessage);
					throw new Error(errorMessage); // 에러를 발생시켜 로그인 실패 처리합니다.
				}
			},
		}),
	],
	secret: `${process.env.NEXTAUTH_URL}`,
});

export { handler as GET, handler as POST };

//
