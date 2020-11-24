export const API_ORIGIN = 'http://localhost:8080/wp-json/wp/v2'

export const CATEGORY_ID: { [key: string]: number } = {
  news: 2,
  teaching: 3,
  projects: 4
}

export const NAV_MENU = [
  {
    name: '新 闻',
    link: '/news'
  },
  {
    name: '项 目',
    link: '/projects'
  },
  {
    name: '教 学',
    link: '/teaching'
  },
  {
    name: '我 们',
    link: '/about'
  },
  {
    name: '加 入',
    link: '/join'
  }
]