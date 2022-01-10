import { FC } from 'react'
import { Link } from 'remix'
import { ArrowSmUpIcon } from '@heroicons/react/outline'
import clsx from 'clsx'
import { styles } from '~/constants'

export const LinkButton: FC<{ text: string; to: string }> = ({ text, to }) => {
  return (
    <Link
      to={to}
      className={clsx(
        'flex justify-between items-center py-2 text-white',
        styles.link,
      )}
    >
      <span className="text-sm font-light">{text}</span>
      <ArrowSmUpIcon className="h-6 w-6 rotate-45 text-gray-300" />
    </Link>
  )
}
