import Head from 'next/head'
import { fetchSinglePageData } from '../services'

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
  console.log(props)

  return (
    <div className="">
      <Head>join</Head>
    </div>
  )
}

export default JoinPage
