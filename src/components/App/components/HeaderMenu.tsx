import { Flex, Menu } from 'antd'
import { type FC } from 'react'
import { Link } from 'react-router'

import { ROUTES } from '@constants/common'

import RightMenu from './RightMenu'

const navLeft = [
  {
    key: 'home',
    label: <Link to={ROUTES.home}>Home</Link>
  },
  {
    key: 'my-library',
    label: <Link to={ROUTES.myLibrary}>My Library</Link>
  }
]

const HeaderMenu: FC = () => (
  <Flex justify="space-between">
    <Menu items={navLeft} mode="horizontal" theme="dark" />

    <RightMenu />
  </Flex>
)

export default HeaderMenu
