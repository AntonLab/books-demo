import { faGear } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Form, Tooltip } from 'antd'
import {
  type Dispatch,
  type FC,
  type SetStateAction,
  useCallback,
  useState
} from 'react'

import ModalWithForm from '@components/ModalWithForm'

import { ChapterSettings } from '../../types'
import ChapterSettingsFields from './ChapterSettingsFields'

interface SettingsModalProps {
  pageStyle: ChapterSettings
  setPageStyle: Dispatch<SetStateAction<ChapterSettings>>
}

const SettingsModal: FC<SettingsModalProps> = ({ pageStyle, setPageStyle }) => {
  const [modalOpen, setModalOpen] = useState(false)
  const [form] = Form.useForm()

  const onFinish = (value: ChapterSettings) => {
    setPageStyle(value)
  }
  const onCancel = useCallback(() => setModalOpen(false), [])

  return (
    <>
      <Tooltip title="Settings">
        <Button
          icon={<FontAwesomeIcon icon={faGear} />}
          onClick={() => setModalOpen(true)}
        />
      </Tooltip>

      <ModalWithForm
        formProps={{
          form,
          initialValues: pageStyle,
          name: 'chapter-settings-modal',
          onFinish
        }}
        modalProps={{
          open: modalOpen,
          title: 'Settings',
          onCancel
        }}
      >
        <ChapterSettingsFields />
      </ModalWithForm>
    </>
  )
}

export default SettingsModal
