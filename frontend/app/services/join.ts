import axios from 'axios'

export interface Join {
  content: string
}

export const getJoinInfo = async () => {
  const result = await axios.get<Join>(`${process.env.SERVICE_URL}/join`)
  return result.data
}
