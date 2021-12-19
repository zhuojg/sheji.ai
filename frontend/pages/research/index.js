import { PageTitle } from '@/components/pageTitle'
import clsx from 'clsx'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

import { fetchListData } from '../../services'

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
      className="container cursor-pointer"
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
      <div className="w-full h-48 lg:h-80 rounded-t-lg overflow-hidden relative block">
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
      <div className="flex flex-col space-y-2 lg:space-y-6 container-padding">
        <div
          className={clsx(
            'container-title text-white font-medium leading-relaxed',
            'underline underline-offset-8 decoration-transparent',
            {
              'decoration-current': onHover,
            },
            'transition-all duration-200 ease-in-out',
          )}
        >
          {project.name}
        </div>

        {project.introduction && (
          <div className={clsx('container-text text-gray-300 line-clamp-3')}>
            {project.introduction}
          </div>
        )}
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

      <PageTitle title="实验室研究项目成果" subtitle="Projects" />

      <div className="section-start grid-1-lg-2">
        {projects.map((project, index) => {
          return <ProjectCard key={index} project={project} />
        })}
      </div>
    </div>
  )
}

export default ResearchPage
