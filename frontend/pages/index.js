import { ArrowDown } from '@/components/icons'
import { PageTitle } from '@/components/pageTitle'
import { fetchListData, fetchSinglePageData } from '@/services/index'
import { renderLinks } from '@/utils/render'
import clsx from 'clsx'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

export async function getServerSideProps(context) {
  const result = await fetchSinglePageData('homepage')
  const researchIntro = await fetchListData('research-introductions')
  const reportInfo = await fetchListData('reports')
  const podcastInfo = await fetchSinglePageData('podcast')

  if (
    result &&
    result.error &&
    researchIntro &&
    researchIntro.error &&
    reportInfo &&
    reportInfo.error &&
    podcastInfo &&
    podcastInfo.error
  ) {
    return {
      props: {
        error: true,
      },
    }
  }

  return {
    props: {
      ...result,
      researchIntro: researchIntro,
      reportInfo: reportInfo,
      podcastInfo: podcastInfo,
    },
  }
}

const LabIntro = ({ image, introduction, className }) => (
  <div
    className={clsx('w-full grid grid-cols-2 gap-8 h-72 relative', className)}
  >
    <div className="w-full h-full relative">
      <Image
        src={`${process.env.NEXT_PUBLIC_URL}${image.url}`}
        alt="introduction"
        layout="fill"
      />
    </div>

    <div
      className={clsx(
        'w-full h-full flex flex-col justify-center',
        'text-xl leading-loose',
      )}
    >
      {introduction}
    </div>
  </div>
)

const ResearchIntro = ({ title, content }) => (
  <div className="w-full mt-32">
    <div className=" text-center text-4xl">{title}</div>

    <div className="flex flex-col space-y-16">
      {content.map((item, index) => (
        <div key={index} className="w-full grid grid-cols-2 gap-16">
          <div className="w-full h-128 relative">
            <Image
              src={`${process.env.NEXT_PUBLIC_URL}${item.image.url}`}
              layout="fill"
              alt={item.image.alternativeText}
            />
          </div>

          <div className="h-full flex flex-col justify-center">
            <div className="font-inria text-3xl">{item.subtitle}</div>

            <div className=" pt-4 text-3xl">{item.title}</div>

            <div className="pt-8 text-lg leading-8">{item.introduction}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

const ReportInfo = ({ title, content }) => (
  <div className="w-full mt-32">
    <div className="text-left text-4xl">{title}</div>

    <div className="grid grid-cols-3 gap-8 mt-8">
      {content.map((item, index) => (
        <div key={index} className="container py-8 px-8">
          <div className="text-5xl mb-4">{item.year}</div>
          <div className="text-xl mb-12">{item.title}</div>

          {renderLinks(item.link)}
        </div>
      ))}
    </div>
  </div>
)

const PodcastInfo = ({ title, content }) => (
  <div className="w-full mt-32">
    <div className="text-left text-4xl">{title}</div>

    <div className="container mt-8 py-12 px-8">
      <div className="text-2xl">{content.title}</div>

      <div className="mt-12">
        {renderLinks(content.link)}
      </div>
    </div>
  </div>
)

const Home = (props) => {
  const {
    title,
    subtitle,
    introduction,
    image,
    researchIntro,
    reportInfo,
    podcastInfo,
  } = props

  const contentStartRef = React.useRef(null)

  return (
    <div className="flex-grow w-full h-full relative flex flex-col">
      <Head>
        <title>{title}</title>
      </Head>

      <div className="w-full h-full relative text-white">
        <PageTitle title={title} subtitle={subtitle} />

        <LabIntro className="mt-32" introduction={introduction} image={image} />

        <div className={clsx('w-full flex justify-center mt-32')}>
          <div
            className={clsx(
              'w-6 h-6 cursor-pointer opacity-50',
              'hover:opacity-100',
              'transition-all duration-200 ease-in-out',
            )}
            onClick={() => {
              contentStartRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              })
            }}
          >
            <ArrowDown />
          </div>
        </div>

        <div className="w-full" ref={contentStartRef}>
          <ResearchIntro title="实验室研究主题" content={researchIntro} />
        </div>

        <ReportInfo title="设计人工智能报告" content={reportInfo} />

        <PodcastInfo title="欢迎订阅我们的播客" content={podcastInfo} />
      </div>
    </div>
  )
}

export default Home
