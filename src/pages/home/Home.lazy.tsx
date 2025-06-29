import { lazy } from 'react'
import SuspenseWrapper from '@components/SuspenseWrapper'

const HomeLazy = lazy(() => import('./Home'))

export default () => <SuspenseWrapper><HomeLazy /></SuspenseWrapper>