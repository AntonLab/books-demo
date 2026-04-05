import { type FC } from 'react'

import ErrorBoundary from '@components/ErrorBoundary'
import SuspenseWrapper from '@components/SuspenseWrapper'

import { type FunctionComponent } from '@customTypes/component'

const PageWrapper: FC<FunctionComponent> = ({ children }) => (
  <ErrorBoundary>
    <SuspenseWrapper>{children}</SuspenseWrapper>
  </ErrorBoundary>
)

export default PageWrapper
