import { Menu } from 'antd'
import { type FC } from 'react'
import { Link } from 'react-router'

import { ROUTES } from '@constants/common'

const items = [
  {
    key: 'home',
    label: <Link to={ROUTES.home}>Home</Link>
  },
  {
    key: 'my-library',
    label: <Link to={ROUTES.myLibrary}>My Library</Link>
  },
  {
    key: 'search',
    label: <Link to={ROUTES.search}>Search</Link>
  }
]

const HeaderMenu: FC = () => {
  return (
    <Menu
      items={items}
      mode="horizontal"
      theme="dark"
    />
  )
}

export default HeaderMenu