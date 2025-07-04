import { Spin } from 'antd'
import { type FC, type ReactNode, Suspense } from 'react'

import classes from './SuspenseWrapper.module.scss'

interface SuspenseWrapperProps {
  children: ReactNode | ReactNode[]
}

const SuspenseWrapper: FC<SuspenseWrapperProps> = ({ children }) => (
  <Suspense fallback={<Spin className={classes.spinner} />}>
    {children}
  </Suspense>
)

export default SuspenseWrapper
