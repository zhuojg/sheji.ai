import React, { useState } from 'react'
import styles from './index.module.less'
import { Row } from 'antd'
import { Link } from 'react-router-dom'
import logo from '@/assets/logo-light.png'
import HomeSlides from '@/components/HomeSlides'
import HomeStart from '@/components/HomeStart'
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
              <div
                className={styles.home_nav_item}
                onMouseOver={() => {
                  setSelectedItem(idx)
                  setHover(true)
                }}
                onMouseOut={() => {
                  setHover(false)
                }}
                onClick={() => {
                  window.location.href = item.link
                }}
              >
                {item.name}
              </div>
            </Row>
          ))}
          <HomeSlides selected={selectedItem} hover={hover} />
        </div>
        <HomeStart />
        <div className={styles.home_intro}>
          设计人工智能实验室（Design A.I. Lab）
          <br />
          由同济大学设计创意学院和特赞信息科技联合发起成立
          <br />
          致力于数据、计算、网络和人工智能与设计学的交叉学科应用研究
          <br />
          培养人工智能和设计创意领域的交叉学科博士生、硕士生
          <br />
          并实现产、学、研、创的转化
        </div>
      </div>

      <div className={styles.home_info}>
        © {new Date().getFullYear()} 从无限运算力到无限想象力.
        <br />
        沪ICP备17015556号-1
      </div>
    </div>
  )
}

export default Index
