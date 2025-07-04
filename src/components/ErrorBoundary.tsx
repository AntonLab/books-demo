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

    if (hasError) {
      return <h1>Something went wrong.</h1>
    }

    return children
  }
}

export default ErrorBoundary
