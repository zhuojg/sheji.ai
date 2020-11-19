import React from 'react'
import styles from './index.module.scss'

const NavCircles = () => (
  <div className={styles.circle_wrap}>
    <div className={styles.circle_teaching}>
      <div className={styles.circle_teaching_small}></div>
    </div>
    <div className={styles.circle_projects}>
      <div className={styles.circle_projects_small}></div>
    </div>
    <div className={styles.circle_news}>
      <div className={styles.circle_news_small}></div>
    </div>
  </div>
)

export default NavCircles
