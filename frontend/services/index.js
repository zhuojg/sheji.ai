import axios from 'axios'

export const fetchHomepage = async () => {
  const result = await axios.get(`${process.env.SERVICE_URL}/homepage`)

  return result
}

export const fetchSinglePageData = async (type) => {
  const result = await axios.get(`${process.env.SERVICE_URL}/${type}`)

  if (result && result.data) {
    return result.data
  }

  return {
    error: true,
  }
}

export const fetchListData = async (type) => {
  const result = await axios.get(`${process.env.SERVICE_URL}/${type}`)

  if (result && result.data) {
    return result.data
  }

  return {
    error: true,
  }
}

export const fetchItemData = async (type, id) => {
  const result = await axios.get(`${process.env.SERVICE_URL}/${type}/${id}`)

  if (result && result.data) {
    return result.data
  }

  return {
    error: true,
  }
}
