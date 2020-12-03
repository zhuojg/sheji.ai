import React, { useState, useEffect } from 'react'
import styles from './index.module.less'
import { Row, Col } from 'antd'
import classnames from 'classnames'

interface HomeSlidesProps {
  selected: number
  hover: boolean
}

const HomeSlides = (props: HomeSlidesProps) => {
  const { selected, hover } = props

  return (
    <div
      className={classnames({
        [styles.home_slide]: true,
        [styles.offset_0]: selected === 0,
        [styles.offset_1]: selected === 1,
        [styles.offset_2]: selected === 2,
        [styles.offset_3]: selected === 3,
        [styles.offset_4]: selected === 4,
        [styles.offset_5]: selected === 5,
      })}
    >
      <Row style={{ margin: 'auto' }}>
        <Col span={3} className={classnames({ [styles.home_slide_item_move]: selected === 0 })}>
          <div
            className={classnames({
              [styles.home_slide_item]: true,
              [styles.home_slide_news]: true,
              [styles.home_slide_news_hover]: selected === 0 && hover
            })}
          ></div>
        </Col>
        <Col span={3} className={classnames({ [styles.home_slide_item_move]: selected === 1 })}>
          <div
            className={classnames({
              [styles.home_slide_item]: true,
              [styles.home_slide_about]: true,
              [styles.home_slide_about_hover]: selected === 1 && hover
            })}
          ></div>
        </Col>
        <Col span={3} className={classnames({ [styles.home_slide_item_move]: selected === 2 })}>
          <div
            className={classnames({
              [styles.home_slide_item]: true,
              [styles.home_slide_research]: true,
              [styles.home_slide_research_hover]: selected === 2 && hover
            })}
          ></div>
        </Col>
        <Col span={3} className={classnames({ [styles.home_slide_item_move]: selected === 3 })}>
          <div
            className={classnames({
              [styles.home_slide_item]: true,
              [styles.home_slide_press]: true,
              [styles.home_slide_press_hover]: selected === 3 && hover
            })}
          ></div>
        </Col>
        <Col span={3} className={classnames({ [styles.home_slide_item_move]: selected === 4 })}>
          <div
            className={classnames({
              [styles.home_slide_item]: true,
              [styles.home_slide_us]: true,
              [styles.home_slide_us_hover]: selected === 4 && hover
            })}
          ></div>
        </Col>
        <Col span={3} className={classnames({ [styles.home_slide_item_move]: selected === 5 })}>
          <div
            className={classnames({
              [styles.home_slide_item]: true,
              [styles.home_slide_join]: true,
              [styles.home_slide_join_hover]: selected === 5 && hover
            })}
          ></div>
        </Col>
      </Row>
    </div>
  )
}

export default HomeSlides
