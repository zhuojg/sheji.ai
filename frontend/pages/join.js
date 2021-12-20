import { PageTitle } from '@/components/pageTitle'
import { fetchListData } from '@/services/index'
import clsx from 'clsx'
import Head from 'next/head'
import ReactMarkdown from 'react-markdown'

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
    <div className="container-title font-bold">{content.type}</div>

    <div className="my-8 container-text">{content.intro}</div>

    <div
      className={clsx(
        'container container-padding',
        'max-w-none prose prose-sm lg:prose-md prose-blue text-white',
        'prose-headings:text-xl prose-headings:lg:text-3xl',
        'prose-p:text-sm prose-p:leading-6',
        'prose-p:lg:text-lg prose-p:lg:leading-8',
        'prose-li:text-sm prose-li:leading-6',
        'prose-li:lg:text-lg prose-li:lg:leading-8',
      )}
    >
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

      <div className="w-full section-start flex flex-col space-y-16">
        {props.data.map((item) => (
          <JoinInfo key={item.id} content={item} />
        ))}
      </div>
    </div>
  )
}

export default JoinPage
