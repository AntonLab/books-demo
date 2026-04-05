import { type ReactNode, lazy } from 'react'

import PageWrapper from '@components/PageWrapper'

const MainLazy = lazy(() => import('./Main'))

const MainLazyWrapper = (): ReactNode => (
  <PageWrapper>
    <MainLazy />
  </PageWrapper>
)

export default MainLazyWrapper
