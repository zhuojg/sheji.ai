import { PageTitle } from '@/components/pageTitle'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'

import { fetchListData } from '@/services/index'

export async function getServerSideProps(context) {
  const result = await fetchListData('joins')

  if (result && result.error) {
    return {
      props: {
        error: true,
      },
    }
  }

  return {
    props: {
      data: result,
    },
  }
}

const JoinInfo = ({ content }) => (
  <div className="w-full">
    <div className="text-3xl font-bold">{content.type}</div>

    <div className="my-8">{content.intro}</div>

    <div className="container py-12 px-8 max-w-none prose prose-blue text-white">
      <ReactMarkdown>{content.content}</ReactMarkdown>
    </div>
  </div>
)

const JoinPage = (props) => {
  console.log(props)
  return (
    <div className="w-full h-full text-white">
      <Head>
        <title>招生说明</title>
      </Head>

      <PageTitle title="招生说明" subtitle="Recruitment" />

      <div className="w-full mt-32 flex flex-col space-y-16">
        {props.data.map((item) => (
          <JoinInfo key={item.id} content={item} />
        ))}
      </div>
    </div>
  )
}

export default JoinPage
