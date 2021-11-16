import Head from 'next/head'
import { useRouter } from 'next/router'
import { fetchSinglePageData } from '../../services'
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

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
    <div className="w-full h-full">
      <Head>论文出版</Head>

        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {props.content}
        </ReactMarkdown>
    </div>
  )
}

export default PublicationPage
