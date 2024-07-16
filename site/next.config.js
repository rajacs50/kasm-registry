/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Maltego Technologies',
    description: 'The official store for Kasm supported workspaces for Maltego Developers.',
    icon: 'https://www.maltego.com/img/Social%20Profile%20Pic@4x.png',
    listUrl: 'https://rajacs50.github.io/kasm-registry/',
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
