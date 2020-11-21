import React, { useEffect, useState } from 'react'
import styles from './index.module.scss'
import { Layout, Menu } from 'antd'
import AboutUs from '../pages/AboutUs'
import News from '../pages/News'
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
            <Menu mode="horizontal" theme="dark" selectedKeys={[selectedMenu]} onClick={(event) => {
                // console.log(event.key)
                setSelectedMenu(event.key.toString())
            }}>
              <Menu.Item key="news">
                <Link to="/news">News</Link>
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
            <Route path="/news">
              <News />
            </Route>
          </Content>
          <Footer className={styles.footer}>© 2020 从无限运算力到无限想象力. 沪ICP备17015556号-1</Footer>
        </Layout>
      </Router>
    </div>
  )
}

export default PageLayout
