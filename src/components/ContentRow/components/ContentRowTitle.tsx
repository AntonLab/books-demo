import { type FC } from 'react'
import { Flex, Typography } from 'antd'

interface ContentRowTitleProps {
  title?: string
  subTitle?: string
}

const ContentRowTitle: FC<ContentRowTitleProps> = ({ title, subTitle }) => (
  <Flex vertical>
    <Typography.Text>{title}</Typography.Text>
    <Typography.Text type="secondary">{subTitle}</Typography.Text>
  </Flex>
)

export default ContentRowTitle