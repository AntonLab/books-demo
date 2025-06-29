import { FC } from 'react'
import { Outlet } from 'react-router'

import classes from './Home.module.scss'
import Navigation from './components/Navigation'

const Home: FC = () => {
  return (
    <div className={classes.test}>
      <h1>Welcome to Books Demo!</h1>

      <Navigation />

      <Outlet />
    </div>
  )
}

export default Home