const fs = require('fs')
const path = require('path')

const manifest = {
  name: 'next-pwa-sample',
  short_name: 'nps',
  start_url: '/',
  display: 'standalone',
  background_color: '#fafafa',
  theme_color: '#673ab7',
  display: 'standalone',
  orientation: 'portrait',
  icons: [
    {
      "src": "static/icons/android-chrome-192x192.png",
      "type": "image/png",
      "sizes": "192x192"
    },
    {
      "src": "static/icons/android-chrome-512x512.png",
      "type": "image/png",
      "sizes": "512x512"
    }
  ]
}

fs.writeFileSync(
  path.join(__dirname, 'static/manifest.json'),
  JSON.stringify(manifest)
)

console.log('> generate manifest')