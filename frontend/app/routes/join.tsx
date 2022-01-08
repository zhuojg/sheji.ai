import { LoaderFunction, MetaFunction, useLoaderData } from 'remix'
import Markdown from 'markdown-to-jsx'
import clsx from 'clsx'
import { getJoinInfo, Join } from '~/services/join'
import { MARKDOWN_STYLE } from '~/constants'

export const meta: MetaFunction = () => {
  return { title: '加入我们 | 设计人工智能实验室' }
}

export const loader: LoaderFunction = async () => {
  const joinInfo = await getJoinInfo()

  return { joinInfo }
}

const Join = () => {
  const { joinInfo } = useLoaderData<{ joinInfo: Join }>()

  return (
    <div className={clsx('flex-grow max-w-5xl mx-auto text-white mt-16')}>
      <div className={clsx(...MARKDOWN_STYLE)}>
        <Markdown>{joinInfo.content}</Markdown>
      </div>
    </div>
  )
}

export default Join
