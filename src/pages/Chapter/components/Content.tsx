import { FloatButton, Layout, Typography } from 'antd'
import { type FC } from 'react'

interface ChapterProps {
  name: string
  text: string
}

const Chapter: FC<ChapterProps> = ({ name, text }) => (
  <Layout.Content>
    <Typography.Title style={{ textAlign: 'center' }}>{name}</Typography.Title>

    <Typography.Text>{text}</Typography.Text>

    <FloatButton.BackTop />
  </Layout.Content>
)

export default Chapter
