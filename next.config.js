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
    

  

  transpilePackages: ['sanity'],
}

module.exports = nextConfig
