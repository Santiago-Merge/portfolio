/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',              // ⬅️ reemplaza a `next export`
  images: {
    unoptimized: true,           // necesario si usás <Image> en export estático
  },
};

export default nextConfig;