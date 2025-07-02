import { type FC } from 'react'
import { Form, Input } from 'antd'

import {SHORT_STRING_REQUIRED_RULES } from '@constants/form'
import { PASSWORD_REGEX } from '@constants/common'
import RulesList from '@components/RulesList'

// TODO: Recheck password regex
// TODO: make password rules view more dynamic

const LoginFields: FC = () => (
  <>
    <Form.Item
      label="Email"
      name="email"
      rules={[{ ...SHORT_STRING_REQUIRED_RULES, }, { type: 'email' }]}
    >
      <Input placeholder="Enter your email" />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[ { required: true, pattern: PASSWORD_REGEX, message: <RulesList /> }]}
    >
      <Input.Password allowClear placeholder="Enter your password" />
    </Form.Item>
  </>
)

export default LoginFields