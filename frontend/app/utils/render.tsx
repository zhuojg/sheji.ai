import type { ReactElement } from 'react'
import clsx from 'clsx'
import { styles } from '~/constants'

export const renderLinks: (links: Record<string, string>) => ReactElement = (
  links,
) => {
  return (
    <div
      className={clsx('flex space-x-4 mt-4 lg:mt-8 divide-x divide-blue-600')}
    >
      {Object.keys(links).map((key, index) => (
        <a
          key={index}
          className={clsx(
            { 'pl-4': index !== 0 },
            styles.link,
            styles.linkPrimary,
          )}
          href={links[key]}
          target="_blank"
          rel="noreferrer"
        >
          {key}
        </a>
      ))}
    </div>
  )
}
