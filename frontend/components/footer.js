import { FOOTER_ITEM } from '@/constants'
import clsx from 'clsx'
import Image from 'next/image'

export const Footer = () => {
  return (
    <div
      className={clsx(
        'w-full py-16 px-8 bg-black max-w-screen-xl mx-auto',
        'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-between gap-8',
        'text-xs text-gray-300',
      )}
    >
      <div className="flex flex-col">
        <span className="font-bold">
          © {new Date().getFullYear()} 同济大学设计人工智能实验室
        </span>
        <span>沪ICP备17015556号-1</span>
      </div>

      {FOOTER_ITEM.map((item, index) => (
        <div
          key={index}
          className={clsx({ 'grid grid-cols-2 gap-4': 'media' in item })}
        >
          <div className="flex flex-col space-y-4">
            <div className="font-bold">{item.title}</div>
            <div className="font-light">{item.content}</div>
          </div>

          {'media' in item && (
            <div className="relative w-16 h-16">
              <Image src={item.media} layout="fill" alt={item.title} />
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
