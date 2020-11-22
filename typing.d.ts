declare module '*.css'
declare module '*.less'
declare module '*.scss'
declare module '*.png'
declare module '*.jpg'
declare module '*.svg' {
  export function ReactComponent(props: React.SVGProps<SVGSVGElement>): React.ReactElement
  const url: string
  export default url
}

declare module 'js-cookie'
declare module 'classnames'
declare module 'react-lazyload'
declare module 'commons.js/*'
