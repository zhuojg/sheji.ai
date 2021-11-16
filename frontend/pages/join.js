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
    <div className="w-full h-full">
      <Head>
        <title>申请加入</title>
      </Head>

      <ReactMarkdown>{props.content}</ReactMarkdown>
    </div>
  )
}

export default JoinPage
