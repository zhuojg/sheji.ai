import React from 'react'
import styles from './index.module.less'
import NavCircles from '../../components/HomeCircles'

const Index = () => (
  <div className={styles.home_wrap}>
    <div className={styles.home_bg}></div>
    <div className={styles.home_logo}></div>
    <div className={styles.home_title}>TONGJI DESIGN AI LAB</div>
    <div className={styles.home_content}>
      <NavCircles />
    </div>
    <div className={styles.home_nav}>
      <div className={styles.home_nav_item}>About Us</div>
      <div className={styles.home_nav_item}>Join Us</div>
    </div>
    <div className={styles.home_intro}>
      ##
      <br />
      同济大学设计人工智能实验室
      <br />
      tongji university design ai lab tongji university design ai lab tongji university design ai
      lab tongji university design ai lab tongji university design ai lab
    </div>
  </div>
)

export default Index
