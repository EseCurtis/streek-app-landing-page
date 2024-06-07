/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'ventt-io.netlify.app',
            },
          ],
    }
};

export default nextConfig;
