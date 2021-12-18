import clsx from 'clsx'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { Footer } from './footer'
import { Header } from './header'


const Layout = (props) => {
  const { children } = props
  return (
    <div className="w-full min-h-screen flex flex-col bg-black">
      <Header />
      <div
        className={clsx(
          'w-full max-w-screen-xl mx-auto',
          'flex-grow flex flex-col',
          'px-8 py-32 z-10',
        )}
      >
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
