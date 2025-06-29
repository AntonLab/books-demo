import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

import buildWebpackConfig from './config/build/buildWebpackConfig.ts'
import type { EnvVariables } from './config/build/types.ts'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default (env: EnvVariables) => {
  const config = {
    analyzer: env.analyzer ?? false,
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths: {
      components: path.resolve(__dirname, 'src', 'components'),
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      output: path.resolve(__dirname, 'build'),
      pages: path.resolve(__dirname, 'src', 'pages'),
      public: path.resolve(__dirname, 'public'),
      src: path.resolve(__dirname, 'src')
    }
  }

  return buildWebpackConfig(config)
}