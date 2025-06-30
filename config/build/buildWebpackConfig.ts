import type { Configuration } from 'webpack'
import 'webpack-dev-server'

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
    plugins: buildPlugins(env),
    resolve: buildResolves(paths),
    module: {
      rules: buildLoaders(isDev)
    },
    devtool: isDev ? 'eval-cheap-source-map' : 'source-map'
  }

  if (isDev) {
    config.devServer = buildDevServer(env)
  }

  return config
}