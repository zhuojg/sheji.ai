export const API_ORIGIN = 'http://localhost:8080/wp-json/wp/v2'

export const CATEGORY_ID: { [key: string]: number } = {
  news: 2,
  teaching: 3,
  projects: 4
}

export const NAV_MENU = [
  {
    name: '新闻',
    link: '/news'
  },
  {
    name: '项目',
    link: '/projects'
  },
  {
    name: '教学',
    link: '/teaching'
  },
  {
    name: '我们',
    link: '/about'
  },
  {
    name: '加入我们',
    link: '/join'
  }
]