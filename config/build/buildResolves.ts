import { type Configuration } from 'webpack'

import { type BuildPaths } from './types.ts'

const buildResolves = (paths: BuildPaths): Configuration['resolve'] => {
  return {
    alias: {
      '@': paths.src,
      '@assets': paths.assets,
      '@components': paths.components,
      '@constants': paths.constants,
      '@functions': paths.functions,
      '@pages': paths.pages
    },
    extensions: ['.ts', '.tsx', '.js']
  }
}

export default buildResolves
