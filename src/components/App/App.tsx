import { Layout } from 'antd'
import { type FC } from 'react'
import { Outlet } from 'react-router'

import classes from './App.module.scss'
import HeaderMenu from './components/HeaderMenu'

// TODO: Add prettier, eslint, husky
// TODO: Add error boundary
// TODO: Add antd theme provider
// TODO: Check bundle size warnings
// TODO: Replace husky and lint-staged with pre-commit git hook

const footerText = `Demo project ${new Date().getFullYear()}. Version ${__VERSION__}`

const App: FC = () => (
  <Layout>
    <Layout.Header>
      <HeaderMenu />
    </Layout.Header>

    <Layout.Content>
      <Outlet />
    </Layout.Content>

    <Layout.Footer className={classes.footer}>{footerText}</Layout.Footer>
  </Layout>
)

export default App
