import { Fragment, FC } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import { LOGO_URL, NAVIGATION } from '~/constants'
import { Link, useLoaderData, NavLink } from 'remix'

const Logo: FC<{ isBig: boolean }> = ({ isBig }) => {
  const { staticUrl } = useLoaderData()

  return (
    <div className="absolute left-0 flex justify-start">
      <Link to="/">
        <img
          className="h-8 w-auto"
          src={`${staticUrl}${LOGO_URL}`}
          alt="logo"
        />
        {isBig && (
          <div className={clsx('flex flex-col', 'text-white text-xs', 'mt-2')}>
            <div>同济大学</div>
            <div>设计人工智能实验室</div>
          </div>
        )}
      </Link>
    </div>
  )
}

const MobileMenuButton: FC = () => (
  <div className="-mr-2 -my-2 md:hidden">
    <Popover.Button
      className={clsx(
        'bg-black rounded-md p-2',
        'inline-flex items-center justify-end',
        'text-gray-100 hover:text-gray-300',
        'focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300',
      )}
    >
      <MenuIcon className="h-6 w-6" aria-hidden="true" />
    </Popover.Button>
  </div>
)

const MobileMenuPopover: FC = () => (
  <Transition
    as={Fragment}
    enter="duration-200 ease-out"
    enterFrom="opacity-0 scale-95"
    enterTo="opacity-100 scale-100"
    leave="duration-100 ease-in"
    leaveFrom="opacity-100 scale-100"
    leaveTo="opacity-0 scale-95"
  >
    <Popover.Panel
      focus
      className={clsx(
        'absolute h-screen w-screen bg-black',
        'top-0 inset-x-0',
        'transition transform origin-top-right md:hidden',
        'flex flex-col justify-center',
      )}
    >
      <div className="py-6 px-5 space-y-6">
        <div className="flex items-center absolute top-10 right-2">
          <Popover.Button className="bg-black rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300">
            <XIcon className="h-6 w-6" aria-hidden="true" />
          </Popover.Button>
        </div>

        <div className="flex flex-col space-y-8 mt-4 w-full">
          {NAVIGATION.map((item) => (
            <Popover.Button className="mx-auto" key={item.name}>
              <NavLink
                key={item.name}
                className={({ isActive }) =>
                  clsx(
                    'w-full text-base font-medium',
                    'text-gray-100 hover:text-gray-300',
                    'p-2 border-b-2',
                    isActive
                      ? 'border-opacity-100'
                      : ' border-opacity-0 hover:border-opacity-100',
                  )
                }
                to={item.url}
              >
                {item.name}
              </NavLink>
            </Popover.Button>
          ))}
        </div>
      </div>
    </Popover.Panel>
  </Transition>
)

const DesktopMenuContent: FC = () => {
  return (
    <div className="hidden md:block space-x-10">
      {NAVIGATION.map((item) => (
        <NavLink
          key={item.name}
          className={({ isActive }) =>
            clsx(
              'text-sm text-white',
              'px-3 py-2',
              'border-b-2 border-white',
              'transition-all duration-200 ease-in-out',
              isActive
                ? 'border-opacity-100'
                : ' border-opacity-0 hover:border-opacity-100',
            )
          }
          to={item.url}
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  )
}

export const Navigation: FC<{ isBig: boolean }> = ({ isBig }) => {
  return (
    <div
      className={clsx(
        `${isBig ? 'h-40' : 'h-24 bg-black'}`,
        'fixed top-0 inset-x-0',
        'transition-all duration-200 ease-in-out',
        'flex flex-col justify-center',
        'z-50',
      )}
    >
      <Popover className="z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            className={clsx(
              'w-full flex justify-end items-center md:justify-center md:space-x-10 relative',
            )}
          >
            <Logo isBig={isBig} />
            <MobileMenuButton />
            <DesktopMenuContent />
          </div>
        </div>

        <MobileMenuPopover />
      </Popover>
    </div>
  )
}
