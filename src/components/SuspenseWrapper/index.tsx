import { Spin } from 'antd'
import { type FC, Suspense } from 'react'

import classes from './SuspenseWrapper.module.scss'
import { type ComponentProps } from '@customTypes/component'

const SuspenseWrapper: FC<ComponentProps> = ({ children }) => (
  <Suspense fallback={<Spin className={classes.spinner} />}>
    {children}
  </Suspense>
)

export default SuspenseWrapper
