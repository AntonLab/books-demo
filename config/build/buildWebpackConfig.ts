import type { Configuration } from 'webpack'

import buildDevServer from './buildDevServer.ts'
import buildLoaders from './buildLoaders.ts'
import buildPlugins from './buildPlugins.ts'
import buildResolves from './buildResolves.ts'

import type { BuildOptions } from './types.ts'

export default (env: BuildOptions): Configuration => {
  const { mode, paths } = env
  const isDev = mode === 'development'
  const config: Configuration = {
    mode: mode ?? 'development',
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[name].[contenthash:8].js',
      clean: true
    },
    plugins: buildPlugins(paths.html, env.analyzer, isDev),
    resolve: buildResolves(paths),
    module: {
      rules: buildLoaders(isDev)
    }
  }

  if (isDev) {
    config.devtool = 'inline-source-map'
    config.devServer = buildDevServer(env)
  }

  return config
}