import type { FC } from 'react'
import { Link } from 'react-router'

const Navigation: FC = () => {
  return (
    <nav
      style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem',
      }}
    >
      <Link to="/main">Main</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}

export default Navigation