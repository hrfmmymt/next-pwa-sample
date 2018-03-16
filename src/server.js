const { createServer } = require('http')
const path = require('path')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const PORT = process.env.PORT || 3000
const app = next({ dir: path.join(__dirname, './'), dev })
const handle = app.getRequestHandler()

app.prepare().then(_ => {
  const server = createServer((req, res) => {
    if (req.url === '/sw.js') {
      app.serveStatic(req, res, path.resolve('./src/static/sw.js'))
    } else {
      handle(req, res)
    }
  })

  server.listen(PORT, err => {
    if (err) throw err

    console.log(`> Ready on http://localhost:${PORT}`)
  })
})
