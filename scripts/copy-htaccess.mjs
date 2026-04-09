import { copyFile, mkdir } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const sourcePath = path.join(rootDir, 'public', '.htaccess')
const targetDir = path.join(rootDir, 'dist')
const targetPath = path.join(targetDir, '.htaccess')

await mkdir(targetDir, { recursive: true })
await copyFile(sourcePath, targetPath)