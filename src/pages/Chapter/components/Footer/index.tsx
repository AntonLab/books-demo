import { Flex, Layout } from 'antd'
import { type FC } from 'react'

import { type IdName } from '@/types'

import NavItem from './NavItem'

interface FooterProps {
  bookId: string
  neighbors: (IdName | null)[]
}

const Footer: FC<FooterProps> = ({ bookId = '', neighbors = [] }) => (
  <Layout.Footer>
    <Flex justify="space-between">
      {neighbors.map((neighbor, index = 0) =>
        neighbor ? (
          <NavItem
            key={`footer-navigation_${index}`}
            bookId={bookId}
            isLeft={index % 2 == 0}
            {...neighbor}
          />
        ) : (
          <span key={`footer-navigation_${index}`} />
        )
      )}
    </Flex>
  </Layout.Footer>
)

export default Footer
