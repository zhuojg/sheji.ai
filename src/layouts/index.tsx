import React, { useEffect, useState } from 'react'
import styles from './index.module.less'
import { Layout, Menu } from 'antd'
import AboutUs from '@/pages/AboutUs'
import JoinUs from '@/pages/JoinUs'
import NavMenu from '@/components/NavMenu'
import Articles from '@/components/Articles'
import ArticleItem from '@/components/ArticleItem'
import { BrowserRouter as Router, Switch, Route, Link, useLocation } from 'react-router-dom'
import logo from '@/assets/logo-light.png'
import { NAV_MENU } from '@/constants'

const PageLayout = () => {
  const { Header, Footer, Content, Sider } = Layout
  const [selectedMenu, setSelectedMenu] = useState(useLocation().pathname)

  return (
    <div className={styles.layout_wrap}>
      <div className={styles.layout_bg} />
      <div className={styles.layout_header}>
        <div className={styles.layout_logo}>
          <img src={logo} />
        </div>
        <div className={styles.layout_title}>
          <div className={styles.layout_title_divider}>同济大学设计人工智能实验室</div>
          <div>Tongji Design AI Lab</div>
        </div>
      </div>
      <div className={styles.layout_body}>
        <Router>
          <div className={styles.layout_nav}>
            <NavMenu selected={selectedMenu} setSelected={setSelectedMenu} />
          </div>
          <div className={styles.layout_content}>
            <Route path="/about">
              <AboutUs />
            </Route>
            <Route path="/join">
              <JoinUs />
            </Route>
            <Route exact path="/news">
              <Articles type="news" background="#ffffff" />
            </Route>
            <Route path="/news/:id">
              <ArticleItem type="news" background="#ffffff" />
            </Route>
            <Route exact path="/teaching">
              <Articles type="teaching" background="#ffffff" />
            </Route>
            <Route path="/teaching/:id">
              <Articles type="teaching" background="#ffffff" />
            </Route>
            <Route exact path="/projects">
              <Articles type="projects" background="#ffffff" />
            </Route>
            <Route path="/projects/:id">
              <Articles type="projects" background="#ffffff" />
            </Route>
          </div>
        </Router>
      </div>
      <div className={styles.layout_footer}>
        © {new Date().getFullYear()} 从无限运算力到无限想象力. 沪ICP备17015556号-1
      </div>
    </div>
  )
}

export default PageLayout
