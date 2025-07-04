import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

import buildWebpackConfig from './config/build/buildWebpackConfig.ts'
import { type EnvVariables } from './config/build/types.ts'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const createWebpackConfig = (env: EnvVariables) => {
  const config = {
    analyzer: env.analyzer ?? false,
    platform: env.platform ?? 'desktop',
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths: {
      assets: path.resolve(__dirname, 'src', 'assets'),
      components: path.resolve(__dirname, 'src', 'components'),
      constants: path.resolve(__dirname, 'src', 'constants'),
      entry: path.resolve(__dirname, 'src', 'index.tsx'),
      functions: path.resolve(__dirname, 'src', 'functions'),
      html: path.resolve(__dirname, 'public', 'index.html'),
      output: path.resolve(__dirname, 'build'),
      pages: path.resolve(__dirname, 'src', 'pages'),
      public: path.resolve(__dirname, 'public'),
      src: path.resolve(__dirname, 'src')
    }
  }

  return buildWebpackConfig(config)
}

export default createWebpackConfig
