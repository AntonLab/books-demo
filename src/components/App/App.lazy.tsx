import { type FC, lazy } from 'react'

import PageWrapper from '@components/PageWrapper'

const AppLazy = lazy(() => import('./App'))

const AppLazyWrapper: FC = () => (
  <PageWrapper>
    <AppLazy />
  </PageWrapper>
)

export default AppLazyWrapper
