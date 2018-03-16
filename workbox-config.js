module.exports = {
  globDirectory: 'src/out',
  globPatterns: ['index.html', '_next/**/*.{js,html,css}'],
  swDest: 'src/out/sw.js',
  clientsClaim: true,
  skipWaiting: true
}
