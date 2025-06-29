import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import type { ModuleOptions } from 'webpack'

const createStylesLoader = (isDev = false) => {
  const cssLoader = {
    loader: 'css-loader',
    options: {
      modules: {
        localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
        namedExport: false
      }
    }
  }
  const stylesLoader = {
    exclude: /node_modules/,
    test: /\.s[ac]ss$/i,
    use: [isDev ? 'style-loader' : MiniCssExtractPlugin.loader, cssLoader, 'sass-loader']
  }

  return stylesLoader
}

export default (isDev = false): ModuleOptions['rules'] => {
  const stylesLoader = createStylesLoader(isDev)
  const tsLoader = {
    exclude: /node_modules/,
    test: /\.tsx?$/,
    use: 'ts-loader'
  }

  return [stylesLoader, tsLoader]
}