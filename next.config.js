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
  after: true,
},
  

  transpilePackages: ['sanity'],
}

module.exports = nextConfig
