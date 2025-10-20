import type { NextConfig } from 'next'

const nextConfig: NextConfig = { experimental: { optimizePackageImports: ['react-icons'] } }

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

export default withBundleAnalyzer(nextConfig)
