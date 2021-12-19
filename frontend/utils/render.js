import clsx from 'clsx'

export const renderLinks = (links) => (
  <div className="flex space-x-4 mt-4 lg:mt-8 divide-x divide-blue-600">
    {Object.keys(links).map((key, index) => (
      <a
        key={index}
        className={clsx('link container-text', { 'pl-4': index !== 0 })}
        href={links[key]}
        target="_blank"
        rel="noreferrer"
      >
        {key}
      </a>
    ))}
  </div>
)
