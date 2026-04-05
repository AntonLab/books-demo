import { Flex, Typography } from 'antd'
import { type ReactNode } from 'react'

interface ContentRowTitleProps {
  title?: string
  subTitle?: string
}

const ContentRowTitle = ({
  title,
  subTitle
}: ContentRowTitleProps): ReactNode => (
  <Flex vertical>
    <Typography.Text>{title}</Typography.Text>
    <Typography.Text type="secondary">{subTitle}</Typography.Text>
  </Flex>
)

export default ContentRowTitle
