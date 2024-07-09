/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Maltego Technologies',
    description: 'The official store for Kasm supported workspaces for Maltego Developers.',
    icon: '/img/logo.svg',
    listUrl: 'https://github.com/rajacs50/kasm-registry/',
    contactUrl: 'https://github.com/rajacs50/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
