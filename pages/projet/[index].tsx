import DB from '../../public/DB.json'
import Link from 'next/link'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Image from 'next/image'
import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsContext,
  GetStaticPropsResult,
  NextPage,
} from 'next'
import { ParsedUrlQuery } from 'querystring'

export interface IProject {
  img?: string
  title: string
  description: string
  stack: string[]
  link_github?: string
  link_preview?: string
}

interface IProps {
  projet: IProject
  index: string
}

const Index: NextPage<IProps> = ({ projet, index }: IProps) => {
  const idx = parseInt(index, 10)

  const allProject: IProject[] = DB.projets

  return (
    <Layout>
      <Seo
        title={`${projet.title} | Xavier Nouaille | Developpeur web junior`}
        description={`${projet.title} | Découvrez mes projets personnels et professionnels.`}
      />

      <section className='cstm-container my-10'>
        {projet && (
          <section className='pt-32 pb-12 md:pt-44 md:pb-10 px-6 md:p-0 text-white flex flex-col space-y-10 lg:flex-row lg:space-y-0'>
            <div className='lg:w-1/2'>
              <div className='flex flex-col space-y-8 mb-20'>
                <Link scroll={false} href={'/#projets'}>
                  <a className='font-medium flex items-center space-x-1'>
                    <FiChevronLeft className='h-5 w-5' />
                    <a className='underline hover:no-underline'>
                      Retour à l'index des projets
                    </a>
                  </a>
                </Link>
                <div>
                  <h1 className='xl:text-7xl lg:text-6xl text-5xl font-semibold'>
                    {projet.title}
                  </h1>
                </div>
                <div className='mt-7 flex space-x-5 text-t-secondary'>
                  {projet.link_preview && (
                    <Link href={projet.link_preview}>
                      <a
                        className='text-white btn border-2 border-fourth'
                        target='_blank'>
                        Visualiser
                      </a>
                    </Link>
                  )}
                  {projet.link_github && (
                    <Link href={projet.link_github}>
                      <a
                        className='text-white btn border-2 border-fourth'
                        target='_blank'>
                        GitHub
                      </a>
                    </Link>
                  )}
                </div>
              </div>
              <div className='mt-10 flex flex-col space-y-10'>
                <p className='text-t-secondary text-lg font-medium text-left md:pr-44'>
                  {projet.description}
                </p>
                <ul className='flex pr-44 space-x-6'>
                  {projet.stack.map((s: string, index: number) => (
                    <li
                      key={index}
                      className='flex items-center font-semibold text-center'>
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                {allProject.length - 1 > idx && (
                  <Link href={`/projet/${Number(index) + 1}`}>
                    <a className='font-medium flex items-center space-x-1 mt-8'>
                      <p className='underline hover:no-underline'>
                        Projet suivant
                      </p>
                      <FiChevronRight className='h-5 w-5' />
                    </a>
                  </Link>
                )}
              </div>
            </div>

            <div className='lg:w-1/2'>
              {projet.img ? (
                <Image
                  className='rounded-lg'
                  src={projet.img}
                  alt='Xavier-Nouaille'
                  width={'100%'}
                  height={'100%'}
                  objectFit='cover'
                  layout='responsive'
                />
              ) : (
                <div className='w-full text-gray-500 bg-gray-200 text-center p-28 text-lg rounded-lg'>
                  Image prochainement en ligne.
                </div>
              )}
            </div>
          </section>
        )}
      </section>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = DB.projets.map((projet: IProject, index: number) => {
    const slug = index
    return { params: { index: slug.toString() } }
  })
  return { paths, fallback: false }
}

interface Params extends ParsedUrlQuery {
  index: string
}

export const getStaticProps: GetStaticProps = async ({
  params,
}: GetStaticPropsContext<Params>): Promise<GetStaticPropsResult<IProps>> => {
  const { index } = params
  const projet = DB.projets[index]
  return { props: { projet, index } }
}

export default Index
