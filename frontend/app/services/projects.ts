import axios from 'axios'
import type { Image } from '~/types/image'

export interface Project {
  id: string
  category: string
  content: string
  cover: Image
  external_link: string
  name: string
  introduction: string
  published_at: string
  published_date: string
  tag: string
  order?: number
}

export const getProjectsList = async () => {
  const result = await axios.get<Project[]>(
    `${process.env.SERVICE_URL}/projects`,
  )
  return result.data
}

export const getProjectItem = async (id: string) => {
  const result = await axios.get<Project>(
    `${process.env.SERVICE_URL}/projects/${id}`,
  )
  return result.data
}
