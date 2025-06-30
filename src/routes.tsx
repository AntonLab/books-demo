import { createBrowserRouter } from 'react-router'

import Template from '@components/Template'
import { Home } from '@/pages/Home'

export const publicRoutes = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'main',
        element: <Template title="Main" />
      },
      {
        path: 'about',
        element: <Template title="About" />
      }
    ]
  }
])

export const privateRoutes = createBrowserRouter([
  {
    path: 'admin',
    element: <Template title="Admin" />
  },
  {
    path: 'reports',
    element: <Template title="Reports" />
  }
])