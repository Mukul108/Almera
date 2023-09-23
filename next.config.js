/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    reactStrictMode: true,
    // experimental:{appDir: true},
    images:{
        remotePatterns:[
            {
                //Has to be updated
                // protocol: 'https:',
                hostname: 'dev.updg8.com'
                // port: '',
                // pathname: '/account123/**',
            }
        ]
    }
}
// nextConfig
