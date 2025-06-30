import { FC } from 'react'
import { Outlet } from 'react-router'

import Navigation from './components/Navigation'
import classes from './Home.module.scss'

const Home: FC = () => {
  return (
    <div className={classes.test}>
      <h1>Welcome to Books Demo!</h1>
      <span>Platform: {__PLATFORM__}</span>

      <Navigation />

      <Outlet />
    </div>
  )
}

export default Home