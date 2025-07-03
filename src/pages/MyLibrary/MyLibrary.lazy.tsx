import { type FC, lazy } from 'react'

import PageWrapper from '@components/PageWrapper'

const MyLibraryLazy = lazy(() => import('./MyLibrary'))

const MyLibraryLazyWrapper: FC = () => (
  <PageWrapper>
    <MyLibraryLazy />
  </PageWrapper>
)

export default MyLibraryLazyWrapper
