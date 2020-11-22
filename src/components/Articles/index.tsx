import React, { useEffect, useState, FC } from 'react'
import styles from './index.module.less'
import { IArticleList, getList } from '@/services/articleService'
import { getMediaUrl } from '@/services/mediaService'

interface ArticlesProps {
  type: string
  background: string
}

const Articles = (props: ArticlesProps) => {
  const { type, background } = props

  //   const [articleList, setArticleList] = useState<ArticleList []>()
  const [articleListContent, setArticleListContent] = useState<any>()

  useEffect(() => {
    async function getArticleList() {
      const data = await getList(type)
      // 由于wordpress的设置，获取的list中posts对应的图片是media的id
      // 因此需要再根据这个id获取url
      const content = data.map(async (item) => {
        const media_url = await getMediaUrl(item['featured_media'])

        return (
          <div key={item['title']['rendered']}>
            <img src={media_url} />
            <div>{item['title']['rendered']}</div>
            <div>{item['date']}</div>
          </div>
        )
      })
      
      // 使用await Promise.all的原因是
      // map是一个异步函数，始终返回Promise[]
      setArticleListContent(await Promise.all(content))
    }

    getArticleList()
  }, [])

  return <div>{articleListContent}</div>
}

export default Articles
