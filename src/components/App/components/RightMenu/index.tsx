import { Menu } from 'antd'
import { type FC, useCallback, useMemo, useState } from 'react'
import { Link } from 'react-router'

import { ROUTES } from '@constants/common'

import MenuModal from './components/MenuModal'

const RightMenu: FC = () => {
  const [open, setOpen] = useState(false)

  const navRight = useMemo(
    () => [
      {
        key: 'search',
        label: <Link to={ROUTES.search}>Search</Link>
      },
      {
        key: 'login',
        label: 'Login',
        onClick: () => setOpen(true)
      }
    ],
    [setOpen]
  )

  const onCancel = useCallback(() => {
    setOpen(false)
  }, [setOpen])

  return (
    <>
      <Menu items={navRight} mode="horizontal" theme="dark" />

      <MenuModal open={open} onCancel={onCancel} />
    </>
  )
}

export default RightMenu
