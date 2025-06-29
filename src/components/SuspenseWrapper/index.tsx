import type { FC, ReactNode } from 'react'
import { Suspense } from 'react'
import { Spin } from 'antd'

import classes from './SuspenseWrapper.module.scss'

interface SuspenseWrapperProps {
  children: ReactNode | ReactNode[]
}

const SuspenseWrapper: FC<SuspenseWrapperProps> = ({ children }) => (
  <Suspense fallback={<Spin className={classes.spinner} />}>{children}</Suspense>
)

export default SuspenseWrapper