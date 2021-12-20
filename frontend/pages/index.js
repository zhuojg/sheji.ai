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
    className={clsx(
      'w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-48 lg:h-72 relative',
      className,
    )}
  >
    <div className="w-full h-72 lg:h-full relative">
      <Image
        src={`${process.env.NEXT_PUBLIC_URL}${image.url}`}
        alt="introduction"
        layout="fill"
      />
    </div>

    <div
      className={clsx(
        'w-full h-full flex flex-col justify-center',
        'leading-loose',
        'text-md',
        'lg:text-lg lg:leading-loose',
      )}
    >
      {introduction}
    </div>
  </div>
)

const ResearchIntro = ({ title, content }) => (
  <div className="w-full section-start">
    <div className=" text-center section-title">{title}</div>

    <div className="flex flex-col space-y-16 mt-4 lg:mt-0">
      {content.map((item, index) => (
        <div key={index} className="w-full grid-1-lg-2 relative">
          <div className="w-full h-72 lg:h-128 relative">
            <Image
              src={`${process.env.NEXT_PUBLIC_URL}${item.image.url}`}
              layout="fill"
              alt={item.image.alternativeText}
            />
          </div>

          <div className="h-full flex flex-col justify-center">
            <div className="font-inria container-title">{item.subtitle}</div>

            <div className="pt-2 lg:pt-4 container-title">{item.title}</div>

            <div className="pt-4 lg:pt-8 container-text">
              {item.introduction}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

const ReportInfo = ({ title, content }) => (
  <div className="w-full section-start">
    <div className="text-left section-title">{title}</div>

    <div className="grid-1-lg-3 mt-4 lg:mt-8">
      {content.map((item, index) => (
        <div key={index} className="container container-padding">
          <div className="text-3xl lg:text-5xl mb-4">{item.year}</div>
          <div className="text-lg lg:text-xl">{item.title}</div>

          {renderLinks(item.link)}
        </div>
      ))}
    </div>
  </div>
)

const PodcastInfo = ({ title, content }) => (
  <div className="w-full section-start">
    <div className="text-left section-title">{title}</div>

    <div className="container container-padding">
      <div className="container-title">{content.title}</div>
      {renderLinks(content.link)}
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
        {/* <PageTitle title={title} subtitle={subtitle} /> */}
        <div
          className={clsx(
            'font-inria font-bold text-white',
            'text-2xl mb-4',
            ' lg:text-4xl lg:mb-8',
          )}
        >
          Design A.I. Lab
        </div>

        <div
          className={clsx(
            'font-medium text-white',
            'text-2xl',
            'lg:text-5xl',
            'flex flex-col lg:flex-row',
          )}
        >
          <span>同济大学</span>
          <span>设计人工智能实验室</span>
        </div>

        <LabIntro
          className="section-start"
          introduction={introduction}
          image={image}
        />

        <div className={clsx('w-full flex justify-center section-start')}>
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
