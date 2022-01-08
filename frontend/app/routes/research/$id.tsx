import { useLoaderData } from 'remix'
import type { LoaderFunction } from 'remix'
import { getProjectItem } from '~/services/projects'
import { Project } from '~/services/projects'
import type { MetaFunction } from 'remix'
import Markdown from 'markdown-to-jsx'
import clsx from 'clsx'
import { MARKDOWN_STYLE } from '~/constants'

export const meta: MetaFunction = ({ data }: { data: Project | undefined }) => {
  return {
    title: `${data?.name} | 设计人工智能实验室`,
    description: data?.introduction ?? '',
  }
}

export const loader: LoaderFunction = async ({ params }) => {
  const project = await getProjectItem(params.id as string)
  return { project }
}

const Project = () => {
  const { project } = useLoaderData<{ project: Project }>()

  return (
    <div className="flex-grow max-w-5xl mx-auto text-white">
      <div className="text-3xl font-light text-center mt-8 mb-24">
        {project.name}
      </div>
      <div className={clsx(...MARKDOWN_STYLE)}>
        <Markdown>{project.content}</Markdown>
      </div>
    </div>
  )
}

export default Project
