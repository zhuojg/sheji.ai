import axios, { AxiosResponse } from 'axios'
import { API_ORIGIN, CATEGORY_ID } from '@/constants'

export interface IArticleList {
  id: number
  date: string
  title: {
    rendered: string
  }
  featured_media: number
  featured_media_url?: string
}

export interface IArticleItem {
  id: number
  date: string
  content: {
    rendered: string
  }
  title: {
    rendered: string
  }
}

export async function getList(type: string, page?: number) {
  const url: string = `${API_ORIGIN}/posts?categories=${CATEGORY_ID[type]}${
    page ? `?_page=${page}` : ''
  }`

  const result: Promise<IArticleList[]> = axios
    .get(url)
    .then((res) => res.data)
    .catch((err) => err)

  return result
}

export async function getItem(id: number) {
  const url: string = `${API_ORIGIN}/posts/${id}`

  const result: Promise<IArticleItem> = axios
    .get(url)
    .then((res) => res.data)
    .catch((err) => err)

  return result
}
