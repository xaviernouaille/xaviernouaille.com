import DB from '../../public/DB.json'
import Link from 'next/link'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi'
import Image from 'next/image'
import { FaGithub, FaLink } from 'react-icons/fa'

export interface IProjet {
  img?: string
  title: string
  description: string
  stack: string[]
  link_github?: string
  link_preview?: string
}

export default function Index({ projet, index }) {
  const myLoader = ({ src, width, quality }) => {
    return `https://user-images.githubusercontent.com${src}`
  }

  return (
    <Layout>
      <Seo
        title={`${projet.title} | Xavier Nouaille | Developpeur web junior`}
        description={`${projet.title} | Découvrez mes projets personnels et professionnels.`}
      />

      <section className='cstm-container'>
        {projet && (
          <section className='pt-32 pb-12 md:pt-44 md:pb-10 px-6 md:p-0 text-white'>
            <div className='flex flex-col space-y-10 mb-20'>
              <div>
                <h1 className='h1 text-left'>{projet.title}</h1>
              </div>
              <div className='mt-7 flex items-center space-x-5 text-t-secondary'>
                {projet.link_preview && (
                  <Link href={projet.link_preview}>
                    <a className='btn text-white bg-secondary' target='_blank'>
                      Visualiser
                    </a>
                  </Link>
                )}
                {projet.link_github && (
                  <Link href={projet.link_github}>
                    <a className='btn text-white bg-secondary' target='_blank'>
                      GitHub
                    </a>
                  </Link>
                )}
              </div>
            </div>

            <div>
              {projet.img ? (
                <Image
                  className='rounded-2xl'
                  loader={myLoader}
                  src={new URL(projet.img).pathname}
                  alt='Xavier-Nouaille'
                  width={785}
                  height={420}
                  layout='responsive'
                />
              ) : (
                <div className='w-full text-gray-500 bg-gray-200 text-center p-28 text-lg rounded-lg'>
                  Image prochainement en ligne.
                </div>
              )}
            </div>

            <div className='mt-10 flex flex-col space-y-10'>
              <p className='text-t-secondary text-lg font-medium text-left'>
                {projet.description}
              </p>
              <ul className='flex space-x-6'>
                {projet.stack.map((s: string, index: number) => (
                  <li key={index} className='flex items-center font-semibold'>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className='mt-28 flex md:flex-row md:space-y-0 items-center justify-between'>
              <Link scroll={false} href={'/#projets'}>
                <a className='text-xl font-semibold flex items-center space-x-1'>
                  <FiArrowLeft className='h-5 w-5' />
                  <a className='hidden md:block'>Retour à l'index</a>
                  <a href='block md:hidden'>Index</a>
                </a>
              </Link>

              {DB.projets.length - 1 > index && (
                <Link href={`/projet/${Number(index) + 1}`}>
                  <a className='text-xl font-semibold flex items-center space-x-1'>
                    <a className='hidden md:block'>Projet suivant</a>
                    <FiArrowRight className='h-5 w-5' />
                  </a>
                </Link>
              )}
            </div>
          </section>
        )}
      </section>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = DB.projets.map((projet: IProjet, index: number) => {
    const slug = index
    return { params: { index: slug.toString() } }
  })
  return { paths, fallback: false }
}

export async function getStaticProps({ params }) {
  const { index } = params
  const projet = DB.projets[index]
  if (!projet) {
    return {
      redirect: {
        destination: '/',
      },
    }
  }
  return { props: { projet, index } }
}
