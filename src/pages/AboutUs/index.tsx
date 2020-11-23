import React, { useState, useEffect } from 'react'
import styles from './index.module.less'
import { getAboutUsInfo, IAboutUsInfo } from '@/services/aboutUsService'
import classnames from 'classnames'
import quote from '@/assets/quote.svg'

const AboutUs = () => {
  const [info, setInfo] = useState<IAboutUsInfo>()

  useEffect(() => {
    async function getData() {
      const data = await getAboutUsInfo()
      setInfo(data)
    }

    getData()
  }, [])

  return (
    <div className={styles.about_wrap}>
      <div className={styles.about_bg} />
      <div className={styles.about_teacher}>
        {info?.teacher.map((item) => (
          <div key={item.name} className={styles.about_single}>
            <img src={item.image} />
            <div
              className={classnames([styles.about_single_name, styles.about_single_name_teacher])}
            >
              {item.name}
            </div>
            <div className={styles.about_single_quote}>
              <img src={quote} />
            </div>
            <div className={styles.about_single_sec}>职务：</div>
            <div className={styles.about_single_title}>
              {item.title.map((obj) => (
                <div>{obj}</div>
              ))}
            </div>
            <div className={styles.about_single_sec}>研究方向：</div>
            <div
              className={classnames([
                styles.about_single_research,
                styles.about_single_research_teacher
              ])}
            >
              {item.research.map((obj) => (
                <div>{obj}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className={styles.about_title}>【博士研究生】</div>
      <div className={styles.about_list}>
        {info?.doctor.map((item) => (
          <div key={item.name} className={styles.about_single}>
            <img src={item.image} />
            <div className={styles.about_single_name}>{item.name}</div>
            <div className={styles.about_single_research}>{item.research}</div>
          </div>
        ))}
      </div>
      <div className={styles.about_title}>【硕士研究生】</div>
      <div className={styles.about_list}>
        {info?.master.map((item) => (
          <div key={item.name} className={styles.about_single}>
            <img src={item.image} />
            <div className={styles.about_single_name}>{item.name}</div>
            <div className={styles.about_single_research}>{item.research}</div>
          </div>
        ))}
      </div>
      <div className={styles.about_title}>【毕业生】</div>
      <div className={styles.about_list}>
        {info?.graduate.map((item) => (
          <div key={item.name} className={styles.about_single}>
            <img src={item.image} />
            <div className={styles.about_single_name}>{item.name}</div>
            <div className={styles.about_single_research}>{item.research}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AboutUs
