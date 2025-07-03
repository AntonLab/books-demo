import { type FC, type ReactNode } from 'react'

import ErrorBoundary from '@components/ErrorBoundary'
import SuspenseWrapper from '@components/SuspenseWrapper'

interface PageWrapperProps {
  children: ReactNode
}

const PageWrapper: FC<PageWrapperProps> = ({ children }) => (
  <ErrorBoundary>
    <SuspenseWrapper>
      {children}
    </SuspenseWrapper>
  </ErrorBoundary>
)

export default PageWrapper
