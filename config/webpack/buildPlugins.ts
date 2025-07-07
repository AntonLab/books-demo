import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import path from 'path'
import webpack from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

import { type BuildOptions } from './types.ts'

const buildPlugins = (env: BuildOptions): webpack.Configuration['plugins'] => {
  const htmlPath = env.paths.html
  const publicPath = env.paths.public
  const isAnalyzer = Boolean(env.analyzer)
  const isDev = env.mode === 'development'
  const version = env.version

  const plugins: webpack.Configuration['plugins'] = [
    new webpack.DefinePlugin({
      __VERSION__: JSON.stringify(version)
    }),
    new HtmlWebpackPlugin({
      template: htmlPath,
      favicon: path.resolve(publicPath, 'favicon.ico')
    })
  ]

  if (isDev) {
    plugins.push(new ForkTsCheckerWebpackPlugin())
    plugins.push(new ReactRefreshWebpackPlugin())
    plugins.push(new webpack.ProgressPlugin())
  } else {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: 'css/[name].[contenthash:8].css',
        chunkFilename: 'css/[name].[contenthash:8].css'
      })
    )
  }

  if (isAnalyzer) {
    plugins.push(new BundleAnalyzerPlugin())
  }

  return plugins
}

export default buildPlugins
