const path = require('path')
const routes = require('./src/routes')

module.exports = {
  async exportPathMap() {
    return routes
  },
  webpack(config, { dev }) {
    const oldEntry = config.entry

    config.entry = () =>
      oldEntry().then(entry => {
        entry['main.js'] && entry['main.js'].push(path.resolve('./src/utils/offline'))
        return entry
      })
    return config
  }
}
