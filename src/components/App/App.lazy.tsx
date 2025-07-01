import { type FC, lazy } from 'react'
import SuspenseWrapper from '@components/SuspenseWrapper'

const AppLazy = lazy(() => import('./App'))

const WrappedAppLazy: FC = () => <SuspenseWrapper><AppLazy /></SuspenseWrapper>

export default WrappedAppLazy