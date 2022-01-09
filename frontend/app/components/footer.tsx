import { FOOTER } from '~/constants'
import clsx from 'clsx'

export const Footer = () => {
  return (
    <div
      className={clsx(
        'mx-8 mt-32 py-16 z-10',
        'grid grid-cols-1 md:grid-cols-3 gap-8',
        'text-xs text-gray-300',
      )}
    >
      {FOOTER.map((item, index) => (
        <div
          key={index}
          className={clsx('flex justify-start md:justify-center space-x-4')}
        >
          <div className="flex flex-col space-y-4 w-32">
            <div className="font-bold">{item.title}</div>
            <div className="font-thin">{item.content}</div>
          </div>

          {'media' in item && (
            <div className="relative w-16 h-16">
              <img src={item.media} alt={item.title} />
            </div>
          )}
        </div>
      ))}

      <div className="flex flex-col md:mx-auto">
        <span className="font-bold">
          © {new Date().getFullYear()} 同济大学设计人工智能实验室
        </span>
        <a
          href="https://beian.miit.gov.cn/"
          target="_blank"
          rel="noreferrer"
          className="font-light mt-4"
        >
          沪ICP备17015556号-1
        </a>
      </div>
    </div>
  )
}
