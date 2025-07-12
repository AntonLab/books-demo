import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from 'antd'
import { type FC } from 'react'
import { Link } from 'react-router'

import { ROUTES } from '@/constants/common'
import { type IdName } from '@/types'

interface NavItemProps extends IdName {
  bookId: string
  isLeft: boolean
}

const NavItem: FC<NavItemProps> = ({
  bookId = '',
  id = '',
  isLeft = false,
  name = ''
}) => (
  <Button
    icon={<FontAwesomeIcon icon={isLeft ? faArrowLeft : faArrowRight} />}
    iconPosition={isLeft ? 'start' : 'end'}
    shape="round"
  >
    <Link to={`${ROUTES.chapters}/${bookId}/${id}`}>{name}</Link>
  </Button>
)

export default NavItem
