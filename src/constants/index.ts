export const API_ORIGIN = 'http://localhost:8080/wp-json/wp/v2'

export const CATEGORY_ID: { [key: string]: number } = {
  news: 2,
  teaching: 3,
  projects: 4
}

export const NAV_MENU = [
  {
    name: 'News',
    link: '/news'
  },
  {
    name: 'Projects',
    link: '/projects'
  },
  {
    name: 'Teaching',
    link: '/teaching'
  },
  {
    name: 'About Us',
    link: '/about'
  },
  {
    name: 'Join Us',
    link: '/join'
  }
]