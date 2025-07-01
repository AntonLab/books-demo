import { type FC } from 'react'
import { Form, Input } from 'antd'

import {SHORT_STRING_REQUIRED_RULES } from '@constants/form'

const LoginFields: FC = () => (
  <>
    <Form.Item
      name="email"
      label="Email"
      rules={[{ ...SHORT_STRING_REQUIRED_RULES, }, { type: 'email' }]}
    >
      <Input placeholder="Enter your email" />
    </Form.Item>

    <Form.Item
      name="password"
      label="Password"
      rules={[{ ...SHORT_STRING_REQUIRED_RULES, min: 8, max: 15 }]}
    >
      <Input type="password" placeholder="Enter your password" />
    </Form.Item>
  </>
)

export default LoginFields