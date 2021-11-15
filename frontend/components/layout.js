import { useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { useRouter } from 'next/router'
import clsx from 'clsx'

const navigation = [
  { name: '关于我们', href: '/about' },
  { name: '研究项目', href: '/research' },
  { name: '论文出版', href: '/publication' },
  { name: '申请加入', href: '/join' },
]

const Header = () => {
  const router = useRouter()

  return (
    <div className="bg-black w-full h-16 flex flex-col justify-center text-white">
      <Menu as="div" className="block sm:hidden">
        {({ open }) => (
          <div className="relative">
            <Menu.Button className="relative block sm:hidden p-2 z-20">
              {open ? (
                <XIcon className="block h-8 w-8" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-8 w-8" aria-hidden="true" />
              )}
            </Menu.Button>

            <Transition
              show={open}
              enter="transition-opacity duration-150 ease-in-out"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity duration-150 ease-in-out"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed h-screen w-screen z-10 bg-black top-0 flex flex-col justify-center">
                <Menu.Items static className={clsx('w-full absolute')}>
                  <div className="flex flex-col space-y-2">
                    {navigation.map((item) => (
                      <Menu.Item
                        as="span"
                        className={clsx(
                          'mx-auto text-white block px-3 py-2 font-medium',
                          'border-b-2 border-white border-opacity-0',
                          'transition-all duration-200 ease-in-out',
                          'hover:border-opacity-100',
                          {
                            'border-opacity-100': router.pathname.startsWith(item.href),
                          },
                        )}
                        key={item.name}
                        href={item.href}
                        onClick={() => {
                          router.push(item.href)
                        }}
                      >
                        {item.name}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </div>
            </Transition>
          </div>
        )}
      </Menu>

      <div className="hidden sm:flex flex-grow flex-center items-center justify-center">
        <div className="w-full flex items-center">
          <div className="mx-auto flex space-x-4">
            {navigation.map((item) => (
              <span
                key={item.name}
                onClick={() => {
                  router.push(item.href)
                }}
                className={clsx(
                  'px-3 py-2 text-sm font-medium text-white border-white border-b-2 border-opacity-0',
                  'hover:border-opacity-100',
                  'cursor-pointer',
                  'transition-all duration-200 ease-in-out',
                  {
                    'border-opacity-100': router.pathname.startsWith(item.href),
                  },
                )}
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const Footer = () => {
  return (
    <div className="w-full h-16 flex flex-col justify-center text-center bg-black text-gray-300 text-sm">
      <span>© {new Date().getFullYear()} 从无限运算力到无限想象力.</span>
      <span>沪ICP备17015556号-1</span>
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
