import { PageTitle } from '@/components/pageTitle'
import { fetchListData } from '@/services/index'
import clsx from 'clsx'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

export async function getServerSideProps(context) {
  const readingData = await fetchListData('readings')

  if (readingData && readingData.error) {
    return {
      props: { error: true },
    }
  }

  return {
    props: {
      readingData,
    },
  }
}

const ReadingCard = ({ data }) => {
  const [hover, setHover] = useState(false)
  return (
    <div
      className="w-full grid-1-lg-2 text-white cursor-pointer"
      onMouseEnter={() => {
        setHover(true)
      }}
      onMouseLeave={() => {
        setHover(false)
      }}
      onClick={() => {
        window.open(data.link, '_blank')
      }}
    >
      <div className="w-full h-48 md:h-64 lg:h-72 relative rounded-lg">
        <Image
          className={clsx(
            'object-cover object-center rounded-lg',
            'transition-all duration-200 ease-in-out',
            {
              'scale-110': hover,
            },
          )}
          src={`${process.env.NEXT_PUBLIC_URL}${data.image.url}`}
          alt={data.title}
          layout="fill"
        />
      </div>

      <div className="flex flex-col justify-center space-y-4 lg:space-y-8">
        <div
          className={clsx(
            'text-lg lg:text-3xl font-medium leading-relaxed lg:leading-relaxed',
            'underline underline-offset-8 decoration-transparent',
            'transition-all duration-200 ease-in-out',
            {
              'decoration-current': hover,
            },
          )}
        >
          {data.title}
        </div>

        <div className="container-text">{data.introduction}</div>
      </div>
    </div>
  )
}

const ReadingPage = ({ readingData }) => {
  console.log(readingData)
  return (
    <div className="flex-grow w-full flex flex-col">
      <Head>
        <title>运算力和想象力阅读</title>
      </Head>

      <PageTitle
        title="运算力和想象力阅读"
        subtitle="Design and A.I. History Hub"
      />

      <div className="section-start flex flex-col space-y-32">
        {readingData.map((item, index) => (
          <ReadingCard key={index} data={item} />
        ))}
      </div>
    </div>
  )
}

export default ReadingPage
