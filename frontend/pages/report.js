/* eslint-disable @next/next/no-img-element */

import { PageTitle } from '@/components/pageTitle'
import { fetchListData } from '@/services/index'
import { renderLinks } from '@/utils/render'
import Head from 'next/head'
import Image from 'next/image'

export async function getServerSideProps(context) {
  const result = await fetchListData('reports')

  if (result && result.error) {
    return {
      props: {
        error: true,
      },
    }
  }

  const sortedResult = result.sort((a, b) => {
    if (a.year > b.year) return -1
    else if (a.year < b.year) return 1
    return 0
  })

  return {
    props: {
      data: sortedResult,
    },
  }
}

const ReportPage = (props) => {
  return (
    <div className="flex-grow w-full flex flex-col">
      <Head>
        <title>设计人工智能报告</title>
      </Head>

      <PageTitle title="设计人工智能报告" subtitle="Design A.I. Report" />

      <div className="section-start flex flex-col space-y-16">
        {props.data.map((item, index) => (
          <div className="container" key={index}>
            <div className="w-full relative">
              <img
                src={`${process.env.NEXT_PUBLIC_URL}${item.image.url}`}
                alt={item.year}
                className="object-contain w-full h-full"
              />
            </div>

            <div className="container-padding">
              <div className="container-title flex space-x-4 text-white">
                <span>{item.year}</span>
                <span>{item.title}</span>
              </div>

              {renderLinks(item.link)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReportPage
