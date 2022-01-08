import axios from 'axios'

export interface Introduction {
  name: string
  name_en: string
  content: string
  project_themes: Record<
    string,
    { name: string; name_en: string; media: string }
  >
  visions: {
    title: string
    content: string
  }[]
  introduction_video: string
  vision_media: string
}

export const getIntroduction = async () => {
  const result = await axios.get<Introduction>(
    `${process.env.SERVICE_URL}/introduction`,
  )
  return result.data
}
