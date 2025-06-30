import type { EnvVariables } from './types.ts'

export default (env: EnvVariables) => {
  return {
    historyApiFallback: true,
    hot: true,
    port: env.port ?? 3000,
    open: true
  }
}