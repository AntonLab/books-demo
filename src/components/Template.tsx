import { type ReactNode } from 'react'

import PageWrapper from '@components/PageWrapper'

interface TemplateProps {
  title: string
}

const Template = ({ title = '' }: TemplateProps): ReactNode => (
  <PageWrapper>
    <h1>{title}</h1>
  </PageWrapper>
)

export default Template
