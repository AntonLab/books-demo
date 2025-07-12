import { createBrowserRouter } from 'react-router'

import { App } from '@components/App'
import Template from '@components/Template'

import { ROUTES } from '@constants/common'

import { Chapter } from '@pages/Chapter'
import { Main } from '@pages/Main'
import { MyLibrary } from '@pages/MyLibrary'

export const publicRoutes = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <App />,
    children: [
      {
        path: '',
        element: <Main />
      },
      {
        path: ROUTES.myLibrary,
        element: <MyLibrary />
      },
      {
        path: ROUTES.search,
        element: <Template title="Search" />
      }
    ]
  },
  {
    path: ROUTES.chapters,
    element: <Chapter />
  }
])

/* export const privateRoutes = createBrowserRouter([
  {
    path: 'admin',
    element: <Template title="Admin" />
  },
  {
    path: 'reports',
    element: <Template title="Reports" />
  }
]) */
