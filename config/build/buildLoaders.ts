import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshTypeScript from 'react-refresh-typescript'
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
  const assetsLoader = {
    exclude: /node_modules/,
    test: /\.(png|jpe?g|gif|woff2?|eot|ttf)$/i,
    type: 'asset/resource'
  }
  const stylesLoader = createStylesLoader(isDev)
  const svgrLoader = {
    exclude: /node_modules/,
    test: /\.svg$/,
    use: [{ loader: '@svgr/webpack', options: { icon: true } }]
  }
  const tsLoader = {
    exclude: /node_modules/,
    test: /\.tsx?$/,
    use: [{
      loader: 'ts-loader',
      options: {
        transpileOnly: true,
        compilerOptions: {
          sourceMap: isDev
        },
        getCustomTransformers: () => ({
          before: [isDev && ReactRefreshTypeScript()].filter(Boolean)
        })
      }
    }]
  }

  return [assetsLoader, stylesLoader, svgrLoader, tsLoader]
}