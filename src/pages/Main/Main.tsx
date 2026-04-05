import { Layout, List } from 'antd'
import { type ReactNode } from 'react'
import { Link } from 'react-router'

import renderListBookItem from '@functions/renderListBookItem'

import ContentRow from '@components/ContentRow'

import { ROUTES } from '@constants/common'

import data from '@/tempData/data.json'

import classes from './Main.module.scss'

const Main = (): ReactNode => (
  <Layout className={classes.layoutMain}>
    <ContentRow
      title="Popular Books"
      subTitle="The most popular books today. The list is updated every hour"
      extra={<Link to={ROUTES.search}>Search</Link>}
    >
      <List
        bordered={false}
        dataSource={data}
        rowKey="id"
        renderItem={renderListBookItem}
      />
    </ContentRow>

    <ContentRow
      title="Popular Books"
      subTitle="The most popular books today. The list is updated every hour"
      extra={<Link to={ROUTES.search}>Search</Link>}
    >
      <List
        bordered={false}
        dataSource={data}
        rowKey="id"
        renderItem={renderListBookItem}
      />
    </ContentRow>
  </Layout>
)

export default Main
