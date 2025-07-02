import {
  type ButtonProps,
  Form,
  type FormProps,
  Modal,
  type ModalProps
} from 'antd'
import { type FC, type ReactNode } from 'react'

import { VALIDATE_MESSAGES } from '@constants/form'

const okButtonProps: ButtonProps = { autoFocus: true, htmlType: 'submit' }

const modalRender = (dom: ReactNode, formProps: FormProps) => (
  <Form
    clearOnDestroy
    layout="vertical"
    validateMessages={VALIDATE_MESSAGES}
    {...formProps}
  >
    {dom}
  </Form>
)

interface ModalWithFormProps {
  children: ReactNode
  formProps: FormProps
  modalProps: ModalProps
}

const ModalWithForm: FC<ModalWithFormProps> = ({
  children,
  formProps,
  modalProps
}) => (
  <Modal
    destroyOnHidden
    width={400}
    okButtonProps={okButtonProps}
    {...modalProps}
    modalRender={(dom) => modalRender(dom, formProps)}
  >
    {children}
  </Modal>
)

export default ModalWithForm
