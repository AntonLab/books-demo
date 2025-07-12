import { Layout } from 'antd'
import { type FC, useState } from 'react'

import book from '@/tempData/book.json'
import chapter from '@/tempData/chapter.json'

import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import { ChapterSettings } from './types'

const Chapter: FC = () => {
  const [pageStyle, setPageStyle] = useState<ChapterSettings>(() => ({
    brightness: 5,
    fontSize: 15,
    lineHeight: 1,
    padding: 0
  }))

  return (
    <Layout>
      <Header book={book} pageStyle={pageStyle} setPageStyle={setPageStyle} />

      <Content name={chapter.name} text={chapter.text} />

      <Footer bookId={chapter.bookId} neighbors={chapter.neighbors} />
    </Layout>
  )
}

export default Chapter
