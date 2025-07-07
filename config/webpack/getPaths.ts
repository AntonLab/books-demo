import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const getPaths = (localPrefix = '', metaUrl = '') => {
  const __filename = fileURLToPath(metaUrl)
  const __dirname = dirname(__filename)
  const projectPath = localPrefix ?? __dirname
  const publicPath = path.resolve(projectPath, 'public')
  const src = path.resolve(projectPath, 'src')
  const paths = {
    assets: path.resolve(src, 'assets'),
    components: path.resolve(src, 'components'),
    constants: path.resolve(src, 'constants'),
    customTypes: path.resolve(src, 'customTypes'),
    entry: path.resolve(src, 'index.tsx'),
    functions: path.resolve(src, 'functions'),
    html: path.resolve(publicPath, 'index.html'),
    output: path.resolve(projectPath, 'build'),
    pages: path.resolve(src, 'pages'),
    public: publicPath,
    src
  }

  return paths
}

export default getPaths
