import { Spin } from 'antd'
import { type FC, Suspense } from 'react'

import { type FunctionComponent } from '@customTypes/component'

import classes from './SuspenseWrapper.module.scss'

const SuspenseWrapper: FC<FunctionComponent> = ({ children }) => (
  <Suspense fallback={<Spin className={classes.spinner} size="large" />}>
    {children}
  </Suspense>
)

export default SuspenseWrapper
