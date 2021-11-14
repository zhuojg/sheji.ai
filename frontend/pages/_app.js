import '../global.css'
import 'tailwindcss/tailwind.css'
import Layout from '../components/layout'
import ProgressBar from '../components/progress'

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
