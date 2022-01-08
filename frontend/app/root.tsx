import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from 'remix'
import type { LinksFunction } from 'remix'
import tailwindStyleUrl from '~/tailwind.css'
import { Navigation } from '~/components/navigation'
import { Footer } from '~/components/footer'
import { useRef } from 'react'
import { useOnScreen } from '~/hooks/onScreen'

export const loader = () => {
  return {
    staticUrl: process.env.STATIC_URL,
  }
}

export const links: LinksFunction = () => {
  return [
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css?family=Noto+Sans+SC:100,200,300,400,500,600,700&display=swap',
    },
    {
      rel: 'stylesheet',
      href: tailwindStyleUrl,
    },
    {
      rel: 'icon',
      href: '/favicon.ico',
      type: 'image/x-icon',
    },
  ]
}

export default function App() {
  const topRef = useRef<HTMLDivElement>(null)
  const isTopVisible = useOnScreen(topRef)

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <div className="flex flex-col min-h-screen w-screen bg-black relative">
          <div className="h-0" ref={topRef} />
          <Navigation isBig={isTopVisible} />
          <div className="absolute w-full h-auto top-0 inset-x-0 z-0 hidden md:block">
            <img className="w-full h-auto" src="images/deco.png" alt="deco" />
          </div>
          <div className="flex-grow mt-40 z-10 px-4 sm:px-6 flex">
            <Outlet />
          </div>
          <Footer />
        </div>
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  )
}
