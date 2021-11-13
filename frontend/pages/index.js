import Head from 'next/head'
import { fetchSinglePageData } from '../services'

export async function getServerSideProps(context) {
  const result = await fetchSinglePageData('homepage')

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

const Home = (props) => {
  const { name, introduction, background } = props

  return (
    <div className="flex-grow w-full h-full relative bg-black flex flex-col justify-center">
      <div className="absolute w-full h-full left-0 top-0">
        <img
          className="px-4 md:px-40 lg:px-80 w-full h-full object-center object-contain opacity-20"
          src={`${process.env.NEXT_PUBLIC_URL}${background.url}`}
          alt="background"
        />
      </div>

      <Head>
        <title>{name}</title>
      </Head>

      <div className="prose-white prose-xs sm:prose-sm md:prose-md lg:prose-lg">
        <h1 className="text-white text-center">{name}</h1>
        {/* <p className="text-white text-center">{introduction}</p> */}
      </div>
    </div>
  )
}

export default Home
