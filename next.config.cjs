/** @type {import('next').NextConfig} */
const path = require('path');
module.exports = {
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['https://firebasestorage.googleapis.com'],
  },
  experimental: {
    esmExternals: true
  }
}