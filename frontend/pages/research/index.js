import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { fetchListData } from '../../services'
import clsx from 'clsx'

export async function getServerSideProps(context) {
  const result = await fetchListData('projects')

  if (result && result.error) {
    return {
      props: {
        error: true,
      },
    }
  }

  return {
    props: {
      projects: result,
    },
  }
}

const ProjectCard = (props) => {
  const { project } = props
  const router = useRouter()
  const [onHover, setOnHover] = React.useState(false)
  return (
    <div
      className="bg-white rounded-lg cursor-pointer"
      onClick={() => {
        router.push(`/research/${project.id}`)
      }}
      onMouseEnter={() => {
        setOnHover(true)
      }}
      onMouseLeave={() => {
        setOnHover(false)
      }}
    >
      <div className="w-full h-48 md:h-60 rounded-t-lg overflow-hidden">
        <img
          className={clsx(
            'w-full h-full object-center object-cover',
            'transition-all duration-200 ease-in-out',
            {
              'scale-110': onHover,
            },
          )}
          src={`${process.env.NEXT_PUBLIC_URL}${project.cover.url}`}
          alt={project.name}
        />
      </div>
      <div className={clsx('text-sm md:text-md p-4', { underline: onHover })}>
        {project.name}
      </div>
    </div>
  )
}

const ResearchPage = (props) => {
  const { projects } = props
  return (
    <div className="w-full">
      <Head>
        <title>研究项目</title>
      </Head>

      <div className="mx-4 md:mx-12 lg:mx-auto md:max-w-screen-lg py-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-16">
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />
        })}
      </div>
    </div>
  )
}

export default ResearchPage
