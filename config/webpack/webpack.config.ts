import buildWebpackConfig from './buildWebpackConfig.ts'
import getPaths from './getPaths.ts'
import { type EnvVariables } from './types.ts'

const createWebpackConfig = (env: EnvVariables) => {
  const localPrefix = process.env.npm_config_local_prefix ?? ''
  const config = {
    analyzer: env.analyzer ?? false,
    mode: env.mode ?? 'development',
    paths: getPaths(localPrefix, import.meta.url),
    platform: env.platform ?? 'desktop',
    port: env.port ?? 3000,
    version: process.env.npm_package_version ?? '1.0.0'
  }

  return buildWebpackConfig(config)
}

export default createWebpackConfig
