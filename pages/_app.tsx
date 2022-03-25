import 'tailwindcss/tailwind.css'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import '../styles/global.css'
import { AnimatePresence } from 'framer-motion'
import { ReactElement } from 'react'
import { AppProps } from 'next/app'
import { DefaultSeo } from 'next-seo'
import { animateScroll } from 'react-scroll'
import OpenGraph from '../public/OpenGraph.jpg'

const MyApp = ({ Component, pageProps, router }: AppProps): ReactElement => {
  const url = `http://localhost:3000${router.asPath.split('#')[0]}`

  const handExitComplete = (): void => {
    if (typeof window !== 'undefined') {
      // Get the hash from the url
      const hashId = window.location.hash.split('#')[1]
      console.log(hashId)
      if (hashId) {
        const element = document.getElementById(hashId)
        console.log(element)
        if (element) {
          // Smooth scroll to that elment
          animateScroll.scrollTo({
            containerId: hashId,
          })
          // element.scrollIntoView({ block: 'start', inline: 'nearest' })
        }
      } else if (!hashId) {
        animateScroll.scrollToTop()
      }
    }
  }

  return (
    <>
      <DefaultSeo
        additionalMetaTags={[
          { httpEquiv: 'content-type', content: 'text/html;charset=UTF-8' },
          { name: 'theme-color', content: '#060606' },
          { name: 'keywords', content: 'Xavier Nouaille' },
        ]}
        openGraph={{
          type: 'website',
          url: 'https://xaviernouaille.com',
          title:
            'Bonjour, je suis Xavier, développeur junior fullstack basé sur Paris.',
          description:
            'Portfolio | Xavier Nouaille, 21 ans basé à Paris. Je suis développeur fullstack React NodeJS. Passionné par les nouvelles technologies, découvrez mes projets personnels et professionnels.',
          images: [
            {
              url: 'https://xaviernouaille.com/open-graph.jpg',
              alt: 'Xavier Nouaille',
              type: 'image/jpeg',
            },
          ],
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            href: 'favicon/favicon-32x32.png',
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            href: 'favicon/favicon-16x16.png',
          },
          {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            href: 'favicon/apple-touch-icon.png',
          },
          {
            rel: 'manifest',
            href: 'favicon/site.webmanifest',
          },
        ]}
      />
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
