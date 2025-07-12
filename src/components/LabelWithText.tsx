import { Flex, Typography } from 'antd'
import { type FC, type ReactNode } from 'react'

interface LabelWithTextProps {
  label: string
  text: string | number | ReactNode
}

const LabelWithText: FC<LabelWithTextProps> = ({ label, text }) => (
  <Flex gap={5}>
    <Typography.Text type="secondary">{label}:</Typography.Text>

    <Typography.Text>{text}</Typography.Text>
  </Flex>
)

export default LabelWithText
