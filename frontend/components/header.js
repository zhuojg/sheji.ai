import { Menu, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import { useState } from 'react'

const navigation = [
  { name: '关于我们', href: '/about' },
  { name: '研究项目', href: '/research' },
  { name: '论文出版', href: '/publication' },
  { name: '设计人工智能报告', href: '/report' },
  { name: '运算力和想象力阅读', href: '/reading' },
  { name: '申请加入', href: '/join' },
]

export const Header = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-black w-full h-16 flex flex-col justify-center text-white">
      <div className="p-2 sm:hidden">
        <div
          className="h-8 w-8 cursor-pointer relative z-50"
          onClick={() => {
            setOpen(!open)
          }}
        >
          {open ? (
            <XIcon className="h-8 w-8 cursor-pointer" />
          ) : (
            <MenuIcon className="h-8 w-8 cursor-pointer" />
          )}
        </div>

        <div
          className={clsx(
            'fixed h-screen w-screen',
            'bg-black top-0 left-0 right-0',
            'flex flex-col justify-center',
            'transition-all duration-150 ease-in-out',
            open ? 'z-40' : 'z-0',
            open ? 'opacity-100' : 'opacity-0',
          )}
        >
          <div className="flex flex-col space-y-2">
            {navigation.map((item) => (
              <span
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
                  setOpen(false)
                }}
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>
      </div>

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
