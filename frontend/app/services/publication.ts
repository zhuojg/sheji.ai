import axios from 'axios'
import type { Image } from '~/types/image'

export interface Paper {
  author: string
  id: string
  link: Record<string, string>
  reference: string
  order: number
}

export interface Report {
  author: string
  id: string
  image: Image
  link: Record<string, string>
  title: string
  year: string
}

export interface Book {
  id: string
  link: Record<string, string>
  reference: string
  title: string
}

export interface Reading {
  id: string
  title: string
  link: string
  date: string
}

export interface Podcast {
  image: Image
  link: string
}

export const getPapersList = async () => {
  const result = await axios.get<Paper[]>(`${process.env.SERVICE_URL}/papers`)
  return result.data
}

export const getReportsList = async () => {
  const result = await axios.get<Report[]>(`${process.env.SERVICE_URL}/reports`)
  return result.data
}

export const getBooksList = async () => {
  const result = await axios.get<Book[]>(`${process.env.SERVICE_URL}/books`)
  return result.data
}

export const getReadingsList = async () => {
  const result = await axios.get<Reading[]>(
    `${process.env.SERVICE_URL}/readings`,
  )
  return result.data
}

export const getPodcastsList = async () => {
  const result = await axios.get<Podcast[]>(`${process.env.SERVICE_URL}/podcasts`)
  return result.data
}
