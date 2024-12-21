import {fileURLToPath} from 'node:url'
import {dirname, join} from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
export const location = join(__dirname, 'legion-win32-x64.exe')
