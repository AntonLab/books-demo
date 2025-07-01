import { type FC } from 'react'
import { Outlet } from 'react-router'
import { Layout } from 'antd'

import HeaderMenu from './components/HeaderMenu'
import classes from './App.module.scss'

const todayYear = new Date().getFullYear()

// TODO: Add prettier, eslint, husky
// TODO: Add error boundary
// TODO: Add antd theme provider

const App: FC = () => (
  <Layout>
    <Layout.Header>
      <HeaderMenu />
    </Layout.Header>
    
    <Layout.Content>
      <Outlet />
    </Layout.Content>

    <Layout.Footer className={classes.footer}>
      Demo project {todayYear}
    </Layout.Footer>
  </Layout>
)

export default App