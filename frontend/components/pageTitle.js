import clsx from 'clsx'

export const PageTitle = ({ title, subtitle }) => (
  <>
    <div
      className={clsx(
        'font-inria font-bold text-white',
        'text-xl mb-4',
        ' lg:text-4xl lg:mb-8',
      )}
    >
      {subtitle}
    </div>
    <div className={clsx('font-medium text-white'
    ,'text-xl', 'lg:text-5xl')}>
      {title}
    </div>
  </>
)
