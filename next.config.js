/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true
    },
    // basePath removed for SEO-friendly URLs in production
    // If deploying to subdirectory, configure server redirect instead
    trailingSlash: true,
}

module.exports = nextConfig
