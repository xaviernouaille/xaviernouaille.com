import 'tailwindcss/tailwind.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../styles/global.css'
import { AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }) {
  const url = `http://localhost:3000${router.asPath.split('#')[0]}`

  const handExitComplete = (): void => {
    if (typeof window !== 'undefined') {
      // Get the hash from the url
      const hashId = window.location.hash
      if (hashId) {
        const element = document.querySelector(hashId)
        if (element) {
          // Smooth scroll to that elment
          element.scrollIntoView({ block: 'start', inline: 'nearest' })
        }
      } else if (!hashId) {
        scrollTo(0, 0)
      }
    }
  }

  return (
    <>
      <Nav />
      <AnimatePresence
        exitBeforeEnter
        initial={false}
        onExitComplete={handExitComplete}>
        <Component {...pageProps} canonical={url} key={url} />
      </AnimatePresence>
      <Footer />
      </>
  )
}

export default MyApp
