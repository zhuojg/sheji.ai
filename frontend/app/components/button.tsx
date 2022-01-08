import { FC } from 'react'
import { Link } from 'remix'
import { ArrowSmUpIcon } from '@heroicons/react/outline'
import clsx from 'clsx'

export const LinkButton: FC<{ text: string; to: string }> = ({ text, to }) => {
  return (
    <Link
      to={to}
      className={clsx(
        'flex justify-between items-center py-2 text-white',
        'border-b border-white border-opacity-100',
        'hover:opacity-70',
        'transition-all duration-200 ease-in-out',
      )}
    >
      <span className="text-sm font-light">{text}</span>
      <ArrowSmUpIcon className="h-6 w-6 rotate-45 text-gray-300" />
    </Link>
  )
}
