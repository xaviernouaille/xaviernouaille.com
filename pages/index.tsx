import Hero from '../components/Hero'
import Info from '../components/Info'
import Experiences from '../components/Experiences'
import Projets from '../components/Projets'
import Contact from '../components/Contact'
import Layout from '../components/Layout'
import Seo from '../components/Seo'

export default function Home() {
  return (
    <Layout>
      <Seo
        title={'Xavier Nouaille | Developpeur web junior'}
        description={
          'Portfolio | Xavier Nouaille, 21 ans basé à Paris. Je suis développeur fullstack React NodeJS. Passionné par les nouvelles technologies, découvrez mes projets personnels et professionnels.'
        }
      />

      <Hero />
      <Info />
      <Experiences />
      <Projets />
      <Contact />
    </Layout>
  )
}
