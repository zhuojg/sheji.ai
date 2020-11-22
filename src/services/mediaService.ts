import axios, { AxiosResponse } from 'axios'
import { API_ORIGIN, CATEGORY_ID } from '@/constants'

export async function getMediaUrl(id: number) {
  const url: string = `${API_ORIGIN}/media/${id}`

  const result = await axios
    .get(url)
    .then((res) => res.data['guid']['rendered'])
    .catch((err) => err)

  return result
}
