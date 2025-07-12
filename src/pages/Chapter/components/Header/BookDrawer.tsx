import { faList } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button, Drawer, Flex, List, Statistic, Tag, Typography } from 'antd'
import { type FC, useState } from 'react'
import { Link } from 'react-router'

import LabelWithText from '@components/LabelWithText'

import { Book } from '@/types'

interface BookDrawerProps {
  book: Book
}

const BookDrawer: FC<BookDrawerProps> = ({ book }) => {
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      <Button
        icon={<FontAwesomeIcon icon={faList} />}
        onClick={() => setDrawerOpen(true)}
      >
        Content
      </Button>

      <Drawer
        closeIcon={null}
        open={drawerOpen}
        placement="left"
        onClose={() => setDrawerOpen(false)}
      >
        <Flex gap={5} vertical>
          <Flex gap={5}>
            <span>Image Placeholder</span>

            <Flex vertical>
              <Typography.Title level={4}>{book.name}</Typography.Title>

              <LabelWithText label="Size" text={`${book.size} symbols`} />

              <LabelWithText label="Last update" text={book.lastUpdate} />

              <LabelWithText
                label="Series"
                text={<Link to={book.series.name} />}
              />

              <LabelWithText label="Status" text={book.status} />

              {/* TODO: Make tags as link */}
              <Flex gap={1} wrap>
                {book.tags.map((tag, index) => (
                  <Tag key={`book-tag_${index}`}>{tag}</Tag>
                ))}
              </Flex>
            </Flex>
          </Flex>

          <Flex justify="space-between">
            <Statistic title="Views" value={book.views} />

            <Statistic title="Likes" value={book.likes} />

            <Statistic title="Comments" value={book.comments} />

            <Statistic title="Review" value={book.review} />
          </Flex>

          <Typography.Title>Content</Typography.Title>

          {/* TODO: Add isActive mark */}
          <List
            dataSource={book.chapters}
            itemLayout="vertical"
            renderItem={({ id, name }) => (
              <List.Item>
                <Link to={`${id}`}>{name}</Link>
              </List.Item>
            )}
          />
        </Flex>
      </Drawer>
    </>
  )
}

export default BookDrawer
