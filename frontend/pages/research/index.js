import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { fetchListData } from '../../services'
import clsx from 'clsx'
import Image from 'next/image'

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
      <div className="w-full h-48 md:h-60 rounded-t-lg overflow-hidden relative block">
        <Image
          className={clsx(
            'object-center object-cover',
            'transition-all duration-200 ease-in-out',
            {
              'scale-110': onHover,
            },
          )}
          src={`${process.env.NEXT_PUBLIC_URL}${project.cover.url}`}
          alt={project.name}
          layout="fill"
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-black">
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />
        })}
      </div>
    </div>
  )
}

export default ResearchPage
