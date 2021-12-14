import clsx from 'clsx'

import { Footer } from './footer'
import { Header } from './header'

const Layout = (props) => {
  const { children } = props
  return (
    <div className="w-full min-h-screen flex flex-col bg-black">
      <Header />
      <div
        className={clsx(
          'w-full max-w-screen-xl mx-auto',
          'flex-grow flex flex-col',
          'py-32'
        )}
      >
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
