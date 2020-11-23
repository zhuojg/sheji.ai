import React, { useState, useEffect } from 'react'
import styles from './index.module.less'
import { Row, Col } from 'antd'
import classnames from 'classnames'

interface HomeSlidesProps {
  selected: number
}

const HomeSlides = (props: HomeSlidesProps) => {
  const { selected } = props

  return (
    <div
      className={classnames({
        [styles.home_slide]: true,
        [styles.offset_0]: selected === 0,
        [styles.offset_1]: selected === 1,
        [styles.offset_2]: selected === 2,
        [styles.offset_3]: selected === 3,
        [styles.offset_4]: selected === 4,
      })}
    >
      <Row style={{ margin: 'auto' }}>
        <Col span={4} className={classnames({ [styles.home_slide_item_move]: selected === 0 })}>
          <div
            className={classnames({
              [styles.home_slide_item]: true,
              [styles.home_slide_news]: true,
              [styles.home_slide_news_hover]: selected === 0
            })}
          ></div>
        </Col>
        <Col span={4} className={classnames({ [styles.home_slide_item_move]: selected === 1 })}>
          <div
            className={classnames({
              [styles.home_slide_item]: true,
              [styles.home_slide_projects]: true,
              [styles.home_slide_projects_hover]: selected === 1
            })}
          ></div>
        </Col>
        <Col span={4} className={classnames({ [styles.home_slide_item_move]: selected === 2 })}>
          <div
            className={classnames({
              [styles.home_slide_item]: true,
              [styles.home_slide_teaching]: true,
              [styles.home_slide_teaching_hover]: selected === 2
            })}
          ></div>
        </Col>
        <Col span={4} className={classnames({ [styles.home_slide_item_move]: selected === 3 })}>
          <div
            className={classnames({
              [styles.home_slide_item]: true,
              [styles.home_slide_about]: true,
              [styles.home_slide_about_hover]: selected === 3
            })}
          ></div>
        </Col>
        <Col span={4} className={classnames({ [styles.home_slide_item_move]: selected === 4 })}>
          <div
            className={classnames({
              [styles.home_slide_item]: true,
              [styles.home_slide_join]: true,
              [styles.home_slide_join_hover]: selected === 4
            })}
          ></div>
        </Col>
      </Row>
    </div>
  )
}

export default HomeSlides
