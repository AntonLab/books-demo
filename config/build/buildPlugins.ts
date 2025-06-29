import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

export default (htmlPath = '', isAnalyzer = false, isDev = false): webpack.Configuration['plugins'] => {
  const plugins: webpack.Configuration['plugins'] = [
    new HtmlWebpackPlugin({ template: htmlPath })
  ]

  if (isDev) {
    plugins.push(new webpack.ProgressPlugin())
  } else {
    plugins.push(new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }))
  }

  if (isAnalyzer) {
    plugins.push(new BundleAnalyzerPlugin())
  }

  return plugins
}