import Hero from '../components/Hero'
import Info from '../components/Info'
import Experiences from '../components/Experiences'
import Projects from '../components/Projects'
import Layout from '../components/Layout'
import { NextSeo } from 'next-seo'

const Home = () => {
  return (
    <Layout>
      <NextSeo
        title={'Xavier Nouaille | Developpeur web junior'}
        description={
          'Portfolio | Xavier Nouaille, 21 ans basé à Paris. Je suis développeur fullstack React NodeJS. Passionné par les nouvelles technologies, découvrez mes projets personnels et professionnels.'
        }
        canonical={'https://xaviernouaille.com'}
      />
      <Hero />
      <Info />
      <Experiences />
      <Projects />
    </Layout>
  )
}

export default Home
