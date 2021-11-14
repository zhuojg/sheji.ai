import Head from 'next/head'
import { fetchSinglePageData } from '../services'
import ReactMarkdown from 'react-markdown'

export async function getServerSideProps(context) {
  const result = await fetchSinglePageData('join')

  if (result && result.error) {
    return {
      props: {
        error: true,
      },
    }
  }

  return {
    props: {
      ...result,
    },
  }
}

const JoinPage = (props) => {
  return (
    <div className="w-full h-full py-20">
      <Head>申请加入</Head>

      <div className="px-4 mx-auto max-w-prose prose prose-sm md:prose-md text-white">
        <ReactMarkdown>{props.content}</ReactMarkdown>
      </div>
    </div>
  )
}

export default JoinPage
