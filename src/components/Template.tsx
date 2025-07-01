import { type FC } from 'react'

import SuspenseWrapper from '@components/SuspenseWrapper'

interface TemplateProps {
  title: string
}

const Template: FC<TemplateProps> = ({ title = '' }) => (
  <SuspenseWrapper>
    <div>
      <h1>{title}</h1>
    </div>
  </SuspenseWrapper>
)

export default Template