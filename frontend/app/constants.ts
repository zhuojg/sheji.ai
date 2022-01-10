export interface Navigation {
  name: string
  url: string
}

export const NAVIGATION: Navigation[] = [
  { name: '关于 | About', url: '/about' },
  { name: '研究 | Research', url: '/research' },
  { name: '出版 | Publication', url: '/publication' },
  { name: '加入 | Join Us', url: '/join' },
]

export interface Footer {
  title: string
  content: string
  media: string
}

export const FOOTER: Footer[] = [
  {
    title: '微信公众号',
    content: '设计人工智能网络',
    media: 'https://sheji.ai/uploads/qrcode_sheji_ai_1_e5a3437c03.jpg',
  },
  {
    title: '设计科技播客',
    content: '特有想象力',
    media: 'https://sheji.ai/uploads/tyxxl_qr_code_6b8fdf220b.jpeg',
  },
]

export const LOGO_URL = '/uploads/logo_light_c7fc3bf7_17d9bda4f2.png'

export const styles = {
  h1: 'text-xl md:text-3xl',
  h2: 'text-md md:text-xl',
  p: 'text-sm md:text-base font-light leading-loose',
  link: 'text-sm text-white py-2 border-b border-white transition-all duration-200 ease-in-out border-opacity-0 hover:border-opacity-100',
  linkPrimary: 'text-blue-600 border-blue-600',
  container: 'bg-white bg-opacity-10 rounded-lg backdrop-blur-lg',
  containerPaddingSmall: 'p-3 md:p-4',
  containerPadding: 'p-4 md:p-8',
  animate: 'transition-all duration-200 ease-in-out',
}

export const MARKDOWN_STYLE = [
  'max-w-none prose prose-blue prose-sm text-white',
  'prose-headings:text-white',
  'prose-p:text-sm prose-p:leading-6 text-white prose-p:font-light',
  'prose-p:md:text-base prose-p:lg:leading-8',
  'prose-li:text-sm prose-li:leading-6 text-white prose-li:font-light',
  'prose-li:md:text-base prose-li:lg:leading-8',
]
