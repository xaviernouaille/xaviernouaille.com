import DB from '../../public/DB.json'
import Link from 'next/link'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import { FiArrowRight, FiArrowLeft } from 'react-icons/fi'
import Image from 'next/image'

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
          <section className='pt-32 pb-12 md:py-32 px-6 big-section p-0 text-white'>
            <div className='max-w-2xl mx-auto mb-24'>
              <h1 className='seconde-title font-bold'>{projet.title}</h1>
              <div className='mt-7 flex items-center space-x-5'>
                {projet.link_preview && (
                  <Link href={projet.link_preview}>
                    <a target='_blank'>Visionner l'aperçu</a>
                  </Link>
                )}
                {projet.link_github && (
                  <Link href={projet.link_github}>
                    <a target='_blank'>Repository Github</a>
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

              <h2 className='mt-16 font-medium text-2xl'>
                Description du projet
              </h2>
              <p className='mt-3 text-description text-opacity'>
                {projet.description}
              </p>
              <h2 className='mt-14 font-medium text-2xl'>Technos utilisées</h2>
              <ul className='mt-3 cstm-ul flex flex-col space-y-2 text-description'>
                {projet.stack.map((s: string, index: number) => (
                  <li key={index} className='flex items-center'>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className='mt-24 flex md:flex-row flex-col md:space-y-0 space-y-5 items-center justify-between'>
              <Link scroll={false} href={'/#projets'}>
                <div className='flex items-center space-x-2 justify-center text-secondary btn border border-secondary w-full md:w-auto'>
                  <FiArrowLeft className='h-5 w-5' />
                  <a>Retour à l'index des projets</a>
                </div>
              </Link>
              {DB.projets.length - 1 > index && (
                <Link href={`/projet/${Number(index) + 1}`}>
                  <div className='flex items-center space-x-2 justify-center text-secondary btn border border-secondary w-full md:w-auto'>
                    <a>Projet suivant</a>
                    <FiArrowRight className='h-5 w-5' />
                  </div>
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
