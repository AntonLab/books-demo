import { Card, type CardProps } from 'antd'
import { type ReactNode } from 'react'

import ContentRowTitle from './components/ContentRowTitle'

interface ContentRowProps extends CardProps {
  title?: string
  subTitle?: string
}

const ContentRow = ({ children, ...cardProps }: ContentRowProps): ReactNode => (
  <Card
    {...cardProps}
    title={
      <ContentRowTitle title={cardProps.title} subTitle={cardProps.subTitle} />
    }
  >
    {children}
  </Card>
)

export default ContentRow
