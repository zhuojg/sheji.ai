import { useState } from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'

const navigation = [
  { name: '关于我们', href: '/about' },
  { name: '研究项目', href: '/research' },
  { name: '论文出版', href: '/publication' },
  { name: '申请加入', href: '/join' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Header = () => {
  const router = useRouter()

  return (
    <Disclosure as="nav" className="bg-black relative">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-grow flex items-center justify-center">
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          router.pathname === item.href
                            ? 'font-bold text-white'
                            : 'text-gray-300 hover:bg-white hover:bg-opacity-20 hover:text-white',
                          'px-3 py-2 rounded-md text-sm font-medium',
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden absolute w-full z-50 bg-black">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-white hover:bg-opacity-20 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

const Footer = () => {
  return (
    <div className="w-full h-16 flex flex-col justify-center text-center bg-black text-gray-300 text-sm">
      © 2021 从无限运算力到无限想象力. 沪ICP备17015556号-1
    </div>
  )
}

const Layout = (props) => {
  const { children } = props

  return (
    <div className="w-full min-h-screen flex flex-col">
      <Header />
      <div className="w-full flex-grow flex flex-col bg-black">{children}</div>
      <Footer />
    </div>
  )
}

export default Layout
