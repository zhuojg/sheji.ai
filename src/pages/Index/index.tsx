import React, { useState } from 'react'
import styles from './index.module.less'
import { Row } from 'antd'
import { Link } from 'react-router-dom'
import logo from '@/assets/logo-light.png'
import HomeSlides from '@/components/HomeSlides'
import { NAV_MENU } from '@/constants'

const Index = () => {
  const [selectedItem, setSelectedItem] = useState<number>(0)
  const [hover, setHover] = useState<boolean>(false)

  return (
    <div className={styles.home_wrap}>
      <div className={styles.home_bg}></div>
      <div
        className={styles.home_header}
        onClick={() => {
          window.location.href = '/'
        }}
      >
        <div className={styles.home_logo}>
          <img src={logo} />
        </div>
        <div className={styles.home_title}>
          <div className={styles.home_title_divider}>同济大学设计人工智能实验室</div>
          <div>Tongji Design AI Lab</div>
        </div>
      </div>

      <div className={styles.home_content}>
        <div className={styles.home_nav}>
          {NAV_MENU.map((item, idx) => (
            <Row key={item.name}>
              <Link to={item.link}>
                <div
                  className={styles.home_nav_item}
                  onMouseOver={() => {
                    setSelectedItem(idx)
                    setHover(true)
                  }}
                  onMouseOut={() => {
                    setHover(false)
                  }}
                >
                  {item.name}
                </div>
              </Link>
            </Row>
          ))}
          <HomeSlides selected={selectedItem} hover={hover} />
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

      <div className={styles.home_info}>
        © {new Date().getFullYear()} 从无限运算力到无限想象力. 沪ICP备17015556号-1
      </div>
    </div>
  )
}

export default Index
