import { type FC } from 'react'
import { Card, type CardProps } from 'antd'

import ContentRowTitle from './components/ContentRowTitle'

interface ContentRowProps extends CardProps {
  title?: string
  subTitle?: string
}

const ContentRow: FC<ContentRowProps> = ({ children, ...cardProps }) => (
  <Card
    {...cardProps}
    title={<ContentRowTitle title={cardProps.title} subTitle={cardProps.subTitle} />}
  >
    {children}
  </Card>
)

export default ContentRow