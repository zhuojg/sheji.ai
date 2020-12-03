import React, { useState } from 'react'
import { SwapRightOutlined } from '@ant-design/icons'
import styles from './index.module.less'
import { Button } from 'antd'
import classnames from 'classnames'

const HomeStartMobile = () => (
  <div className={styles.mobile_wrap}>
    <div className={styles.content_wrap}>
      <div className={styles.title}>每一次技术革命都引发了一次设计的机遇</div>
      <div className={styles.list}>
        <div className={styles.list_item}>
          第一次工业革命带来了机械化，在英国催生了工艺美术运动；
        </div>
        <div className={styles.list_item}>第二次工业革命带来了工业化，在德国催生了包豪斯；</div>
        <div className={styles.list_item}>第三次工业革命带来了信息化，在美国催生了媒体实验室；</div>
        <div className={styles.list_item}>
          第四次工业革命带来了智能化，中国没有成为追赶者而有机会成为领先者，
          <br />
          在中国将催生怎样的设计机遇呢？
          <br />
          2017年设计人工智能实验室在同济大学成立
          <br />
          “设计人工智能”不是我们的答案，而是问题的开始
          <br />
          我们期待和更多年轻人一起深度求索
        </div>
      </div>
      <div className={styles.footer}>
        —— 范凌，同济大学设计人工智能实验室主任 / 特赞信息科技创始人&CEO
      </div>
    </div>
  </div>
)

const HomeStart = () => {
  const [visible, setVisible] = useState(true)

  return (
    <>
      <div className={classnames({ [styles.start_wrap]: true, [styles.invisible]: !visible })}>
        <div className={styles.content_wrap}>
          <div className={styles.title}>每一次技术革命都引发了一次设计的机遇</div>
          <div className={styles.list}>
            <div className={styles.list_item}>
              第一次工业革命带来了机械化，在英国催生了工艺美术运动；
            </div>
            <div className={styles.list_item}>第二次工业革命带来了工业化，在德国催生了包豪斯；</div>
            <div className={styles.list_item}>
              第三次工业革命带来了信息化，在美国催生了媒体实验室；
            </div>
            <div className={styles.list_item}>
              第四次工业革命带来了智能化，中国没有成为追赶者而有机会成为领先者，
              <br />
              在中国将催生怎样的设计机遇呢？
              <br />
              <br />
              2017年设计人工智能实验室在同济大学成立
              <br />
              “设计人工智能”不是我们的答案，而是问题的开始
              <br />
              我们期待和更多年轻人一起深度求索
            </div>
          </div>
          <div className={styles.footer}>
            —— 范凌，同济大学设计人工智能实验室主任 / 特赞信息科技创始人&CEO
          </div>
          <div className={styles.button}>
            <SwapRightOutlined
              className={styles.button_icon}
              onClick={() => {
                setVisible(false)
              }}
            />
          </div>
        </div>
      </div>
      <HomeStartMobile />
    </>
  )
}

export default HomeStart
