import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import KakaoProvider from 'next-auth/providers/kakao';
import CredentialsProvider from 'next-auth/providers/credentials';
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
		CredentialsProvider({
			name: 'Credentials',
			credentials: {
				username: { label: 'Username', type: 'text', placeholder: 'jsmith' },
				password: { label: 'Password', type: 'password' },
			},
			async authorize(credentials, req) {
				const authResponse = await fetch(`${process.env.AUTH_URL}/api/login`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						id: credentials.username,
						password: credentials.password,
					}),
				});
				if (!authResponse.ok) {
					return null;
				}

				const user = await authResponse.json();
				console.log('user', user);
				return {
					email: user.id,
					name: user.nickname,
					image: user.image,
					...user,
				};
			},
		}),
	],
	secert: `${process.env.NEXTAUTH_URL}`,
});

export { handler as GET, handler as POST };
