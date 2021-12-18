import clsx from 'clsx'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

import { ArrowDown } from '../components/icons'
import { fetchListData, fetchSinglePageData } from '../services'

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

const LabName = ({ title, subtitle }) => (
  <>
    <div className="font-inria font-bold" style={{ fontSize: '40px' }}>
      {subtitle}
    </div>
    <div className="font-inter" style={{ fontSize: '52px', fontWeight: '500' }}>
      {title}
    </div>
  </>
)

const LabIntro = ({ image, introduction, className }) => (
  <div className={clsx('w-full grid grid-cols-2 h-72 relative', className)}>
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
        'font-inter',
      )}
      style={{ fontSize: '20px', lineHeight: '40px' }}
    >
      {introduction}
    </div>
  </div>
)

const ResearchIntro = ({ title, content }) => (
  <div className="w-full mt-32">
    <div className="font-inter text-center" style={{ fontSize: '36px' }}>
      {title}
    </div>

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
            <div className="font-inria" style={{ fontSize: '32px' }}>
              {item.subtitle}
            </div>

            <div className="font-inter pt-4" style={{ fontSize: '32px' }}>
              {item.title}
            </div>

            <div
              className="font-inter pt-8"
              style={{ fontSize: '20px', lineHeight: '40px' }}
            >
              {item.introduction}
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

const ReportInfo = ({ title, content }) => (
  <div className="w-full mt-32">
    <div className="font-inter text-left" style={{fontSize: '36px'}}>
      {title}
    </div>

    <div className="grid grid-cols-3 gap-8  mt-8">
      {content.map((item, index) => (
        <div key={index} className="container">
          <div className="">{item.year}</div>

          <div className="">{item.title}</div>

          <div className="flex space-x-4">
          {Object.keys(item.link).map((key, index) => (
            <div className="" key={index}>{item.link[key]}</div>
          ))}
          </div>
        </div>
      ))}
    </div>
  </div>
)

const PodcastInfo = ({ title, content }) => (
  <div className="w-full mt-32">
    <div className="font-inter text-left" style={{fontSize: '36px'}}>
      {title}
    </div>

    <div className="container mt-8">
      <div className="">{content.title}</div>

      <div className="">
        <a href={content.link}>{content.link}</a>
      </div>
    </div>
  </div>
)

const Home = (props) => {
  const { title, subtitle, introduction, image, researchIntro, reportInfo, podcastInfo } = props

  const contentStartRef = React.useRef(null)

  return (
    <div className="flex-grow w-full h-full relative bg-black flex flex-col">
      <Head>
        <title>{title}</title>
      </Head>

      <div className="w-full h-full relative text-white">
        <LabName title={title} subtitle={subtitle} />

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
