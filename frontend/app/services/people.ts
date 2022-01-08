import axios from 'axios'
import type { Image } from '~/types/image'

export interface Professor {
  avatar: Image
  id: string
  introduction: string
  name: string
  order: number
}

export interface Student {
  avatar: Image
  graduated: boolean
  id: string
  major: string
  name: string
  type: 'phd' | 'master' | 'intern'
  year: number
}

export const getProfessorsList = async () => {
  const result = await axios.get<Professor[]>(
    `${process.env.SERVICE_URL}/professors`,
  )
  return result.data
}

export const getStudentsList = async () => {
  const result = await axios.get<Student[]>(
    `${process.env.SERVICE_URL}/students`,
  )
  return result.data
}
