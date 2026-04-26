/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*",
            }
        ]
    },
    
    experimental: {
    reactCompiler: false,
  },
  transpilePackages: ['sanity'],
}

module.exports = nextConfig
