import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router'

import { publicRoutes } from './routes'

const root = document.getElementById('root')

if (!root) {
  throw new Error('Root not found.')
}

const container = createRoot(root)

container.render(<RouterProvider router={publicRoutes} />)
