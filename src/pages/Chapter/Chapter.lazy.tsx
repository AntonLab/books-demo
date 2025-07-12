import { type FC, lazy } from 'react'

import PageWrapper from '@components/PageWrapper'

const ChapterLazy = lazy(() => import('./Chapter'))

const ChapterLazyWrapper: FC = () => (
  <PageWrapper>
    <ChapterLazy />
  </PageWrapper>
)

export default ChapterLazyWrapper
