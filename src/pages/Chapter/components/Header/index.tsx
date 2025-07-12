import {
  faBookOpen,
  faHouseChimney,
  faUpRightAndDownLeftFromCenter
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Flex, Layout, Tooltip } from 'antd'
import { type Dispatch, type FC, type SetStateAction } from 'react'
import { Link } from 'react-router'

import { ROUTES } from '@constants/common'

import { Book } from '@/types'

import { ChapterSettings } from '../../types'
import BookDrawer from './BookDrawer'
import SettingsModal from './SettingsModal'

const toggleFullScreen = () => {
  const element = document.getElementById('root')
  const isFullScreen = document.fullscreenElement

  if (isFullScreen) {
    document.exitFullscreen()
  } else {
    element?.requestFullscreen()
  }
}

interface HeaderProps {
  book: Book
  pageStyle: ChapterSettings
  setPageStyle: Dispatch<SetStateAction<ChapterSettings>>
}

const Header: FC<HeaderProps> = ({ book, pageStyle, setPageStyle }) => (
  <Layout.Header>
    <Flex style={{ height: '100%' }} align="center" justify="space-between">
      <Flex gap={10}>
        <BookDrawer book={book} />

        <Link to={`${ROUTES.books}/${book.id}`}>
          <Button icon={<FontAwesomeIcon icon={faHouseChimney} />}>
            Back to book
          </Button>
        </Link>
      </Flex>

      <Flex gap={10}>
        {/* TODO: Add orientation switch */}
        <Tooltip title="Switch orientation">
          <Button icon={<FontAwesomeIcon icon={faBookOpen} />} />
        </Tooltip>

        <Tooltip title="Full screen">
          <Button
            icon={<FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />}
            onClick={toggleFullScreen}
          />
        </Tooltip>

        <SettingsModal pageStyle={pageStyle} setPageStyle={setPageStyle} />
      </Flex>
    </Flex>
  </Layout.Header>
)

export default Header
