import DB from '../../public/DB.json'
import Link from 'next/link'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import NavLink from 'next/link'

export interface IProjet {
  img?: string
  title: string
  description: string
  stack: string[]
  link_github?: string
  link_preview?: string
}

export default function Index({ projet, index }) {
  return (
    <Layout>
      <Seo
        title={'Mes projets | Xavier Nouaille | Developpeur web junior'}
        description={
          'Mes projets | Découvrez mes projets personnels et professionnels.'
        }
      />

      <section className='cstm-container'>
        {projet && (
          <section className='section big-section text-white'>
            <div className='max-w-2xl mx-auto mb-24'>
              <h1 className='seconde-title font-bold'>{projet.title}</h1>
              <div className='mt-7 flex items-center space-x-5'>
                {projet.link_preview && (
                  <Link href={projet.link_preview}>
                    <a target='_blank' className='secondary'>
                      Visionner l'aperçu
                    </a>
                  </Link>
                )}
                {projet.link_github && (
                  <Link href={projet.link_github}>
                    <a target='_blank' className='secondary'>
                      Repository Github
                    </a>
                  </Link>
                )}
              </div>
            </div>

            <div>
              {projet.img ? (
                <img
                  className='rounded-lg'
                  src={projet.img}
                  alt={projet.title}
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

            <div className='mt-24 flex items-center justify-between'>
              <Link scroll={false} href={'/#projets'}>
                <a className='secondary'>{'<-'} Retour à l'index des projets</a>
              </Link>
              {DB.projets.length - 1 > index && (
                <Link href={`/projet/${Number(index) + 1}`}>
                  <a className='secondary'>Projet suivant {'->'}</a>
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
