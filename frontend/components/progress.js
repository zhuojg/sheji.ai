import { useEffect } from 'react'
import Router from 'next/router'
import NProgress from 'nprogress'

const ProgressBar = () => {
  const options = { showSpinner: false }
  useEffect(() => {
    NProgress.configure(options)
  }, [])

  const routeChangeStart = () => {
    NProgress.start()
  }

  const routeChangeEnd = () => {
    NProgress.done()
  }

  Router.events.on('routeChangeStart', routeChangeStart)
  Router.events.on('routeChangeComplete', routeChangeEnd)
  Router.events.on('routeChangeError', routeChangeEnd)

  return <div className="bg-white"></div>
}

export default ProgressBar
