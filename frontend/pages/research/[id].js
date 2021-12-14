import Head from 'next/head'
import { fetchItemData } from '../../services'
import ReactMarkdown from 'react-markdown'

export async function getServerSideProps(context) {
  const { query } = context
  const result = await fetchItemData('projects', query.id)

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

const ResearchDetail = (props) => {
  const { name, content } = props

  return (
    <div className="w-full">
      <Head>
        <title>{name}</title>
      </Head>

      <h1>{name}</h1>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}

export default ResearchDetail
