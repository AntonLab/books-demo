import { Layout } from 'antd'
import { type FC } from 'react'

const { Header, Content, Footer } = Layout
const todayYear = new Date().getFullYear()

const MyLibrary: FC = () => (
  <Layout>
    <h1>My Library page</h1>
  </Layout>
)

export default MyLibrary
