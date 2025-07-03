import { type FC } from 'react'

import PageWrapper from '@components/PageWrapper'

interface TemplateProps {
  title: string
}

const Template: FC<TemplateProps> = ({ title = '' }) => (
  <PageWrapper>
    <h1>{title}</h1>
  </PageWrapper>
)

export default Template
