import Head from 'next/head'
import { useRouter } from 'next/router'
import { fetchSinglePageData } from '../../services'
import ReactMarkdown from 'react-markdown'

export async function getServerSideProps(context) {
  const result = await fetchSinglePageData('publication')

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

const PublicationPage = (props) => {
  return (
    <div className="w-full h-full py-20">
      <Head>论文出版</Head>

      <div className="px-4 mx-auto max-w-prose prose prose-sm md:prose-md text-white">
        <ReactMarkdown>{props.content}</ReactMarkdown>
      </div>
    </div>
  )
}

export default PublicationPage
