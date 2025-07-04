import { type Configuration } from 'webpack'

import { type BuildPaths } from './types.ts'

const buildResolves = (paths: BuildPaths): Configuration['resolve'] => ({
  alias: {
    '@': paths.src,
    '@assets': paths.assets,
    '@components': paths.components,
    '@constants': paths.constants,
    '@customTypes': paths.customTypes,
    '@functions': paths.functions,
    '@pages': paths.pages
  },
  extensions: ['.ts', '.tsx', '.js']
})

export default buildResolves
