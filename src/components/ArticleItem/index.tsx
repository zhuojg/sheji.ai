import React, { useEffect, useState, FC } from 'react'
import styles from './index.module.less'
import { IArticleList, IArticleItem, getItem } from '@/services/articleService'
import { useParams } from 'react-router-dom'

interface ArticleItemProps {
  type: string
  background: string
}

const ArticleItem = (props: ArticleItemProps) => {
  const { type, background } = props
  const { id } = useParams<{ id: string }>()

  const [articleContent, setArticleContent] = useState<{ title: string; content: string }>()

  useEffect(() => {
    async function getArticle() {
      const data = await getItem(parseInt(id))

      const result = {
        title: data['title']['rendered'],
        content: data['content']['rendered']
      }

      setArticleContent(result)
    }

    getArticle()
  }, [])

  return (
    <div>
      <h1>{articleContent?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: articleContent?.content ?? '' }}></div>
    </div>
  )
}

export default ArticleItem
