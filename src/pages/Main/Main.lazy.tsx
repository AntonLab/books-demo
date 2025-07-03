import { type FC, lazy } from 'react'

import PageWrapper from '@components/PageWrapper'

const MainLazy = lazy(() => import('./Main'))

const MainLazyWrapper: FC = () => (
  <PageWrapper>
    <MainLazy />
  </PageWrapper>
)

export default MainLazyWrapper
