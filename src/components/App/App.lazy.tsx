import { type ReactNode, lazy } from 'react'

import PageWrapper from '@components/PageWrapper'

const AppLazy = lazy(() => import('./App'))

const AppLazyWrapper = (): ReactNode => (
  <PageWrapper>
    <AppLazy />
  </PageWrapper>
)

export default AppLazyWrapper
