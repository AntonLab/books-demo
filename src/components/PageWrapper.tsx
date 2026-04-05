import { type ReactNode } from 'react'

import ErrorBoundary from '@components/ErrorBoundary'
import SuspenseWrapper from '@components/SuspenseWrapper'

import { type FunctionComponent } from '@customTypes/component'

const PageWrapper = ({ children }: FunctionComponent): ReactNode => (
  <ErrorBoundary>
    <SuspenseWrapper>{children}</SuspenseWrapper>
  </ErrorBoundary>
)

export default PageWrapper
