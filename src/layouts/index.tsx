import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { Layout, Menu } from 'antd'
import AboutUs from '@/pages/AboutUs'
import Articles from '@/components/Articles'
import ArticleItem from '@/components/ArticleItem'
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from 'react-router-dom'

const PageLayout = () => {
  const { Header, Footer, Content } = Layout
  const { SubMenu } = Menu
  const [selectedMenu, setSelectedMenu] = useState(useLocation().pathname.replace('/', ''))

  return (
    <div>
      <Router>
        <Layout className={styles.layout}>
          <Header className={styles.header}>
            <Menu mode="horizontal" selectedKeys={[selectedMenu]} onClick={(event) => {
                // console.log(event.key)
                setSelectedMenu(event.key.toString())
            }}>
              <Menu.Item key="news">
                <Link to="/news">News</Link>
              </Menu.Item>
              <Menu.Item key="teaching">
                <Link to="/teaching">Teaching</Link>
              </Menu.Item>
              <Menu.Item key="projects">
                <Link to="/projects">Projects</Link>
              </Menu.Item>
              <Menu.Item key="members">
                <Link to="/members">Members</Link>
              </Menu.Item>
              <Menu.Item key="about">
                <Link to="/about">About Us</Link>
              </Menu.Item>
            </Menu>
          </Header>
          <Content className={styles.content}>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route exact path="/news">
              <Articles type='news' background='#ffffff' />
            </Route>
            <Route path="/news/:id">
              <ArticleItem type='news' background='#ffffff' />
            </Route>
            <Route exact path="/teaching">
              <Articles type='teaching' background='#ffffff' />
            </Route>
            <Route path="/teaching/:id">
              <Articles type='teaching' background='#ffffff' />
            </Route>
            <Route exact path="/projects">
              <Articles type='projects' background='#ffffff' />
            </Route>
            <Route path="/projects/:id">
              <Articles type='projects' background='#ffffff' />
            </Route>
          </Content>
          <Footer className={styles.footer}>© 2020 从无限运算力到无限想象力. 沪ICP备17015556号-1</Footer>
        </Layout>
      </Router>
    </div>
  )
}

export default PageLayout
