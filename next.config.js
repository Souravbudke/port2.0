/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.sanity.io"],
    },
    basePath: '/portfolio2.0',
    assetPrefix: '/portfolio2.0/',
    output: 'export',
}

module.exports = nextConfig;