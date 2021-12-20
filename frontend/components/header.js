import { NAVIGATION } from '@/constants'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useCallback, useState } from 'react'

export const Header = () => {
  const router = useRouter()
  const [open, setOpen] = useState(false)

  const isCurrentPath = useCallback(
    (href) => {
      const { pathname } = router
      return pathname.startsWith(href)
    },
    [router],
  )

  return (
    <div
      className={clsx(
        'fixed lg:relative z-20 lg:z-0 left-0 top-0',
        'bg-black w-full h-16 flex flex-col justify-center text-white',
      )}
    >
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
            {
              hidden: !open,
            },
            open ? 'opacity-100' : 'opacity-0',
          )}
        >
          <div className="absolute top-16 w-full mx-auto">
            <div className="h-8 w-32 mx-auto relative">
              <Image
                className="object-contain cursor-pointer"
                src={`${process.env.NEXT_PUBLIC_URL}/logo.png`}
                layout="fill"
                alt="logo"
                onClick={() => {
                  router.push('/')
                }}
              />
            </div>
          </div>

          <div className="flex flex-col space-y-2">
            {NAVIGATION.map((item) => (
              <span
                className={clsx(
                  'mx-auto text-white block px-3 py-2 font-medium',
                  'border-b-2 border-white border-opacity-0',
                  'transition-all duration-200 ease-in-out',
                  'hover:border-opacity-100',
                  {
                    'border-opacity-100': isCurrentPath(item.href),
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
        <div className="w-full flex items-center z-50 relative">
          <div className="absolute left-0 h-8 w-32">
            <Image
              className="object-contain cursor-pointer"
              src={`${process.env.NEXT_PUBLIC_URL}/logo.png`}
              layout="fill"
              alt="logo"
              onClick={() => {
                router.push('/')
              }}
            />
          </div>
          <div className="mx-auto flex space-x-4">
            {NAVIGATION.map((item) => (
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
                    'border-opacity-100': isCurrentPath(item.href),
                  },
                )}
              >
                {item.name}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute top-0 left-0 right-0 h-screen">
          <Image
            className="object-cover object-top"
            src="/deco.png"
            layout="fill"
            alt="deco"
          />
        </div>
      </div>
    </div>
  )
}
