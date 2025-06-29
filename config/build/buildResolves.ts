import type { Configuration } from 'webpack'

import type { BuildPaths } from './types.ts'

export default (paths: BuildPaths): Configuration['resolve'] => {
  return {
    alias: {
      '@': paths.src,
      '@components': paths.components,
      '@pages': paths.pages,
    },
    extensions: ['.ts', '.tsx', '.js']
  }
}