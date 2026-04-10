import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import contactHandler from './api/contact.js'

function attachResponseHelpers(res) {
  res.status = (statusCode) => {
    res.statusCode = statusCode
    return res
  }

  res.json = (payload) => {
    if (!res.headersSent) {
      res.setHeader('Content-Type', 'application/json; charset=utf-8')
    }

    res.end(JSON.stringify(payload))
    return res
  }

  return res
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let rawBody = ''

    req.on('data', (chunk) => {
      rawBody += chunk
    })

    req.on('end', () => {
      if (!rawBody) {
        resolve({})
        return
      }

      try {
        resolve(JSON.parse(rawBody))
      } catch (error) {
        reject(error)
      }
    })

    req.on('error', reject)
  })
}

function devContactApiPlugin() {
  return {
    name: 'dev-contact-api',
    configureServer(server) {
      server.middlewares.use('/api/contact', async (req, res, next) => {
        if (req.url !== '/' && req.url !== '') {
          next()
          return
        }

        const response = attachResponseHelpers(res)

        try {
          req.body = req.method === 'POST' ? await readJsonBody(req) : {}
        } catch {
          response.status(400).json({ message: 'Invalid JSON payload.' })
          return
        }

        try {
          await contactHandler(req, response)
        } catch (error) {
          response.status(500).json({ message: 'Unable to process contact request.' })
        }
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  Object.assign(process.env, env)

  return {
    plugins: [react(), tailwindcss(), devContactApiPlugin()],
  }
})
