import { type FC } from 'react'

import ErrorBoundary from '@components/ErrorBoundary'
import SuspenseWrapper from '@components/SuspenseWrapper'

import { type ComponentProps } from '@customTypes/component'

const PageWrapper: FC<ComponentProps> = ({ children }) => (
  <ErrorBoundary>
    <SuspenseWrapper>{children}</SuspenseWrapper>
  </ErrorBoundary>
)

export default PageWrapper
