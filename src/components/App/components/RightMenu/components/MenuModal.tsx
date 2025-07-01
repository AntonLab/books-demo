import { type ButtonProps, Form, Modal } from 'antd'
import { type FC, type ReactNode } from 'react'

import { VALIDATE_MESSAGES } from '@constants/form'

import LoginFields from './LoginFields'
import { type ModalFormProps } from './types'

const okButtonProps: ButtonProps = { autoFocus: true, htmlType: 'submit' }

const MenuModal: FC<ModalFormProps> = ({
  open,
  handleOnCancel
}) => {
  const [form] = Form.useForm()

  const handleOnFinish = (values: any) => {
    console.log('Form submitted:', values)
  }

  const modalRender = (dom: ReactNode) => (
    <Form
      clearOnDestroy
      form={form}
      layout="vertical"
      name="login-modal"
      validateMessages={VALIDATE_MESSAGES}
      onFinish={handleOnFinish}
    >
      {dom}
    </Form>
  )

  return(
    <Modal
      destroyOnHidden
      okText="Login"
      open={open}
      title="Login"
      width={400}
      okButtonProps={okButtonProps}
      onCancel={handleOnCancel}
      modalRender={modalRender}>
      <LoginFields />
    </Modal>
  )
}

export default MenuModal