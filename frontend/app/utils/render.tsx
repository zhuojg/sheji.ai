import type { ReactElement } from 'react'
import clsx from 'clsx'
import { styles } from '~/constants'

export const renderLinks: (links: Record<string, string>) => ReactElement = (
  links,
) => {
  return (
    <div className={clsx('flex space-x-4 mt-4 lg:mt-8')}>
      {Object.keys(links).map((key, index) => (
        <a
          key={index}
          className={clsx(
            // { 'ml-4': index !== 0 },
            'font-bold',
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
