import { Result } from 'antd'
import { Component } from 'react'

import { type ComponentProps } from '@customTypes/component'

interface ErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends Component<ComponentProps, ErrorBoundaryState> {
  constructor(props: ComponentProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    const { hasError } = this.state
    const { children } = this.props

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

    return children
  }
}

export default ErrorBoundary
