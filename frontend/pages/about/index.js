import Head from 'next/head'
import { fetchSinglePageData } from '../../services'
import ReactMarkdown from 'react-markdown'

export async function getServerSideProps(context) {
  const result = await fetchSinglePageData('about')

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

const AboutPage = (props) => {
  return (
    <div className="w-full h-full py-20">
      <Head>
        <title>关于我们</title>
      </Head>

      <div className="px-4 mx-auto max-w-prose prose prose-sm md:prose-md text-white">
        <ReactMarkdown>{props.content}</ReactMarkdown>
      </div>
    </div>
  )
}

export default AboutPage
