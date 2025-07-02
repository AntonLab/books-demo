import { Form, type ModalProps } from 'antd'
import { type FC } from 'react'

import LoginFields from './LoginFields'
import ModalWithForm from '@components/ModalWithForm'

const MenuModal: FC<ModalProps> = ({
  open,
  onCancel
}) => {
  const [form] = Form.useForm()

  const onFinish = (values: any) => {
    console.log('Form submitted:', values)
  }

  return(
    <ModalWithForm
      formProps={{
        form,
        name: 'login-modal',
        onFinish
      }}
      modalProps={{
        okText: 'Login',
        open,
        title: 'Login',
        onCancel
      }}
    >
      <LoginFields />
    </ModalWithForm>
  )
}

export default MenuModal