import axios, { AxiosResponse } from 'axios'
import { API_ORIGIN } from '@/constants'

export interface IAboutUsInfo {
  teacher: {
    name: string
    image: string
    title: string[]
    research: string[]
  }[]
  doctor: {
    name: string
    image: string
    research: string
  }[]
  master: {
    name: string
    image: string
    research: string
  }[]
  graduate: {
    name: string
    image: string
    research: string
  }[]
}

export async function getAboutUsInfo() {
  // 筛选出slug为about的页面
  const url = `${API_ORIGIN}/posts?slug=about`

  const result = axios
    .get(url)
    .then((res) => {
      let data = res.data[0]['content']['rendered']

      // 将结果中的unicode编码转换为字符
      data = data.replaceAll('<p>', '')
      data = data.replaceAll('</p>', '')
      data = data.replaceAll('<br />', '')
      data = data.replaceAll('&#8220;', '"')
      data = data.replaceAll('&#8221;', '"')

      data = JSON.parse(data)

      return data
    })
    .catch((err) => err)
  return result
}
