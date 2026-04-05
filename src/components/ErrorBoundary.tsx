import { Result } from 'antd'
import { Component, ErrorInfo } from 'react'

import { type FunctionComponent } from '@customTypes/component'

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<FunctionComponent, ErrorBoundaryState> {
  constructor(props: FunctionComponent) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    if (!__DEV_MODE__) return

    // eslint-disable-next-line no-console
    console.error('ErrorBoundary caught an error:', error, errorInfo)
  }

  render() {
    const { hasError } = this.state

    // TODO: Fix main page redirect

    if (hasError) {
      return (
        <Result
          status="500"
          title="500"
          subTitle="Sorry, something went wrong."
          // extra={<Button type="primary">Back Home</Button>}
        />
      )
    }

    const { children } = this.props

    return children
  }
}

export default ErrorBoundary
