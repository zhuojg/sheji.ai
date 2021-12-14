import Head from 'next/head'

import Layout from '../components/layout'
import ProgressBar from '../components/progress'
import '../global.css'

function MyApp({ Component, pageProps }) {
  return (
    <>

      <ProgressBar />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
