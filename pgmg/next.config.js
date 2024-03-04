const path = require('path');
/** @type {import('next').NextConfig} */

const nextConfig = {
	reactStrictMode: true,
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
	env: {
		NEXT_PUBLIC_ENDPOINT: process.env.NEXT_PUBLIC_ENDPOINT,
	},
};

module.exports = nextConfig;
