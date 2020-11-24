import React, { useEffect, useState, FC } from 'react'
import styles from './index.module.less'
import { IArticleList, getList } from '@/services/articleService'
import { getMediaUrl } from '@/services/mediaService'
import classnames from 'classnames'

interface ArticlesProps {
  type: string
  background: string
}

interface ArticleItemInfo extends IArticleList {
  media_url: string
}

const Articles = (props: ArticlesProps) => {
  const { type, background } = props

  const [articleList, setArticleList] = useState<ArticleItemInfo[]>()
  const [hoverItem, setHoverItem] = useState<number>(-1)

  useEffect(() => {
    async function getArticleList() {
      const data = await getList(type)
      // 由于wordpress的设置，获取的list中posts对应的图片是media的id
      // 因此需要再根据这个id获取url
      const content = data.map(async (item) => {
        const media_url = await getMediaUrl(item['featured_media'])

        return { media_url, ...item }
      })

      // 使用await Promise.all的原因是
      // map是一个异步函数，始终返回Promise[]
      setArticleList(await Promise.all(content))
    }

    getArticleList()
  }, [])

  return (
    <div className={styles.article_wrap}>
      <div className={styles.article_bg} />
      {articleList?.map((item, idx) => {
        return (
          <div
            className={styles.article_item}
            key={item.id}
            onMouseOver={() => {
              setHoverItem(idx)
            }}
            onMouseOut={() => {
              setHoverItem(-1)
            }}
            onClick={() => {
              window.location.href=`/${type}/${item.id}`
            }}
          >
            <div className={styles.article_item_img}>
              <img src={item.media_url} />
            </div>

            <div className={styles.article_item_title}>
              <div>{item.title.rendered}</div>
            </div>
            <div className={styles.article_item_mask_wrap}>
              <div
                className={classnames({
                  [styles.article_item_img_mask]: true,
                  [styles.article_item_img_mask_hover]: hoverItem === idx
                })}
              />
              <div
                className={classnames({
                  [styles.article_item_title_mask]: true,
                  [styles.article_item_title_mask_hover]: hoverItem === idx
                })}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Articles
