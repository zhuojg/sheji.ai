import React, { useState } from 'react'
import styles from './index.module.less'
import { Row } from 'antd'
import { Link } from 'react-router-dom'
import logo from '@/assets/logo-light.png'
import classnames from 'classnames'
import HomeSlides from '@/components/HomeSlides'

const Index = () => {
  const [selectedItem, setSelectedItem] = useState<number>(0)

  const navMenu = [
    {
      name: 'News',
      link: '/news'
    },
    {
      name: 'Projects',
      link: '/projects'
    },
    {
      name: 'Teaching',
      link: '/teaching'
    },
    {
      name: 'About Us',
      link: '/about'
    },
    {
      name: 'Join Us',
      link: '/join'
    }
  ]

  return (
    <div className={styles.home_wrap}>
      <div className={styles.home_header}>
        <div className={styles.home_logo}>
          <img src={logo} />
        </div>
        <div className={styles.home_title}>同济大学设计人工智能实验室</div>
      </div>

      <div className={styles.home_content}>
        <div className={styles.home_nav}>
          {navMenu.map((item, idx) => (
            <Row key={item.name}>
              <Link to={item.link}>
                <div
                  className={styles.home_nav_item}
                  onMouseOver={() => {
                    setSelectedItem(idx)
                  }}
                >
                  {item.name}
                </div>
              </Link>
            </Row>
          ))}
          <HomeSlides selected={selectedItem} />
        </div>
        <div className={styles.home_intro}>
          <div className={styles.home_intro_title}>同济大学设计人工智能实验室</div>
          <div className={styles.home_intro_content}>
            欢迎加入欢迎加入欢迎加入欢迎加入欢迎加入欢迎加入欢迎加入欢迎加入
            <br />
            欢迎加入欢迎加入欢迎加入欢迎加入欢迎加入欢迎加入欢迎加入欢迎加入
          </div>
        </div>
      </div>

      <div className={styles.home_info}>© 2020 从无限运算力到无限想象力. 沪ICP备17015556号-1</div>
    </div>
  )
}

export default Index
