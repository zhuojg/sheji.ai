import Head from 'next/head'
import { fetchSinglePageData } from '../services'
import Image from 'next/image'

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
  const { name, background } = props

  return (
    <div className="w-full h-full flex-grow flex flex-col">
      <Head>
        <title>{name}</title>
      </Head>
      <div className="flex-grow flex flex-col justify-center">
        <div className="z-10">
          <div className="w-full h-20 block relative">
            <Image
              className="object-contain"
              src={`${process.env.NEXT_PUBLIC_URL}${background.url}`}
              alt="background"
              layout="fill"
            />
          </div>

          <h2 className="text-white text-center">{name}</h2>
          {/* <p className="text-white text-center">{introduction}</p> */}
        </div>
      </div>
    </div>
  )
}

export default Home
