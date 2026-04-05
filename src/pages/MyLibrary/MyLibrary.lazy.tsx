import { type ReactNode, lazy } from 'react'

import PageWrapper from '@components/PageWrapper'

const MyLibraryLazy = lazy(() => import('./MyLibrary'))

const MyLibraryLazyWrapper = (): ReactNode => (
  <PageWrapper>
    <MyLibraryLazy />
  </PageWrapper>
)

export default MyLibraryLazyWrapper
