import { type FC, lazy } from 'react'

import SuspenseWrapper from '@components/SuspenseWrapper'

const MyLibraryLazy = lazy(() => import('./MyLibrary'))

const WrappedMyLibraryLazy: FC = () => (
  <SuspenseWrapper>
    <MyLibraryLazy />
  </SuspenseWrapper>
)

export default WrappedMyLibraryLazy
