import { type ReactNode, lazy } from 'react'

import PageWrapper from '@components/PageWrapper'

const ChapterLazy = lazy(() => import('./Chapter'))

const ChapterLazyWrapper = (): ReactNode => (
  <PageWrapper>
    <ChapterLazy />
  </PageWrapper>
)

export default ChapterLazyWrapper
