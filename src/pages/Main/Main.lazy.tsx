import { type FC, lazy } from 'react'
import SuspenseWrapper from '@components/SuspenseWrapper'

const MainLazy = lazy(() => import('./Main'))

const WrappedMainLazy: FC = () => <SuspenseWrapper><MainLazy /></SuspenseWrapper>

export default WrappedMainLazy