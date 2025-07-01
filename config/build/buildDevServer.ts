import { type EnvVariables } from './types.ts'

const buildDevServer = (env: EnvVariables) => {
  return {
    historyApiFallback: true,
    hot: true,
    port: env.port ?? 3000,
    open: true
  }
}

export default buildDevServer