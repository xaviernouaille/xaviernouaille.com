// Prévention MIM Security
const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
]

module.exports = {
  images: {
    loader: 'imgix',
    path: ['https://xaviernouaille.com'],
    domains: ['xaviernouaille.com'],
  },
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  trailingSlash: true,
}
