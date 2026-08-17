/** @type {import('next').NextConfig} */
const nextConfig = {
  // Cloudflare Pages serves the static export from out/.
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
