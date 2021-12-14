import { MenuIcon, XIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { Footer } from './footer'
import { Header } from './header'

const Breadcrumbs = () => {
  const router = useRouter()

  return (
    <div
      className={clsx('w-full h-8 my-4 flex flex-col justify-center', {
        hidden: router.pathname === '/',
      })}
    >
      <span
        className="text-gray-200 text-xs cursor-pointer"
        onClick={() => {
          router.push('/')
        }}
      >
        返回首页
      </span>
    </div>
  )
}

const Layout = (props) => {
  const { children } = props
  return (
    <div className="w-full min-h-screen flex flex-col bg-black">
      <Header />
      <div
        className={clsx(
          'w-full max-w-screen-xl mx-auto',
          'flex-grow flex flex-col',
          'py-32',
        )}
      >
        <Breadcrumbs />
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
