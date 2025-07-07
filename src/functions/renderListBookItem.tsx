import { Card, Flex, List, Typography } from 'antd'
import { type JSX } from 'react'
import { Link } from 'react-router'

interface BookItemProps {
  link: string
  title: string
  author: {
    fullName: string
    link: string
  }
}

const renderListBookItem = (item: BookItemProps): JSX.Element => (
  <List.Item>
    <Card hoverable>
      <Flex vertical align="center">
        <Link to={item.link}>
          <Typography.Text>{item.title}</Typography.Text>
        </Link>

        <Link to={item.author.link}>
          <Typography.Text type="secondary">
            {item.author.fullName}
          </Typography.Text>
        </Link>
      </Flex>
    </Card>
  </List.Item>
)

export default renderListBookItem
