import { Link, useLoaderData } from 'remix'
import { getProjectsList } from '~/services/projects'
import type { Project } from '~/services/projects'
import type { MetaFunction } from 'remix'
import { styles } from '~/constants'
import clsx from 'clsx'
import { FC, useState } from 'react'

export const meta: MetaFunction = () => {
  return { title: '设计人工智能实验室 Design A.I. Lab', description: '' }
}

export const loader = async () => {
  const projects = (await getProjectsList()).filter(
    (item) => !item.external_link,
  )

  return { projects, staticUrl: process.env.STATIC_URL }
}

const ProjectItem: FC<{ project: Project }> = ({ project }) => {
  const [onHover, setOnHover] = useState(false)
  const { staticUrl } = useLoaderData<{ staticUrl: string }>()

  return (
    <Link
      to={`/research/${project.id}`}
      className={clsx(styles.container)}
      onMouseOver={() => {
        setOnHover(true)
      }}
      onMouseLeave={() => {
        setOnHover(false)
      }}
    >
      <div className="overflow-hidden h-48 w-full rounded-t-lg">
        <img
          className={clsx(
            'h-full w-full object-cover',
            {
              'scale-110': onHover,
            },
            styles.animate,
          )}
          src={`${staticUrl}${project.cover.url}`}
          alt={project.name}
        />
      </div>
      <div
        className={clsx(
          'font-light text-sm line-clamp-3',
          onHover ? 'text-gray-300' : 'text-white',
          styles.containerPaddingSmall,
          styles.animate,
        )}
      >
        {project.name}
      </div>
    </Link>
  )
}

const ProjectsList = () => {
  const { projects } = useLoaderData<{ projects: Project[] }>()

  return (
    <div className="flex-grow max-w-5xl mx-auto my-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

export default ProjectsList
