import DB from '../../public/DB.json'
import Link from 'next/link'
import Layout from '../../components/Layout'
import Seo from '../../components/Seo'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Image from 'next/image'
import { GetStaticPaths, GetStaticProps ,GetStaticPropsContext, GetStaticPropsResult, NextPage } from 'next'
import { ParsedUrlQuery } from 'querystring'

export interface IProject {
  img?: string
  title: string
  description: string
  stack: string[]
  link_github?: string
  link_preview?: string
}

interface IProps{
  projet: IProject,
  index: string
}

const Index: NextPage<IProps> = ({ projet, index }: IProps) => {
  const myLoader = ({ src, width, quality }) => {
    return `https://user-images.githubusercontent.com${src}`
  }

  const idx = parseInt(index, 10)

  const allProject: IProject[] = DB.projets

  return (
    <Layout>
      <Seo
        title={`${projet.title} | Xavier Nouaille | Developpeur web junior`}
        description={`${projet.title} | Découvrez mes projets personnels et professionnels.`}
      />

      <section className='cstm-container'>
        {projet && (
          <section className='pt-32 pb-12 md:pt-44 md:pb-10 px-6 md:p-0 text-white'>
            <div className='flex flex-col space-y-8 mb-20'>
              <div className="pr-44">
                <h1 className='text-7xl font-semibold'>{projet.title}</h1>
              </div>
              <div className='mt-7 flex space-x-5 text-t-secondary'>
                {projet.link_preview && (
                  <Link href={projet.link_preview}>
                    <a className='text-white btn border-2 border-fourth' target='_blank'>
                      Visualiser
                    </a>
                  </Link>
                )}
                {projet.link_github && (
                  <Link href={projet.link_github}>
                    <a className='text-white btn border-2 border-fourth' target='_blank'>
                      GitHub
                    </a>
                  </Link>
                )}
              </div>
            </div>

            <div>
              {projet.img ? (
                <Image
                  className='rounded-xl'
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
              <p className='text-t-secondary text-lg font-medium text-left pr-44'>
                {projet.description}
              </p>
              <ul className='flex pr-44 space-x-6'>
                {projet.stack.map((s: string, index: number) => (
                  <li key={index} className='flex items-center font-semibold text-center'>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            <div className='mt-28 flex md:flex-row md:space-y-0 items-center justify-between '>
              <Link scroll={false} href={'/#projets'}>
                <a className='font-medium flex items-center space-x-1'>
                  <FiChevronLeft className='h-5 w-5' />
                  <a>Retour</a>
                </a>
              </Link>

              {(allProject.length - 1) > idx && (
                <Link href={`/projet/${Number(index) + 1}`}>
                  <a className='text-xl font-semibold flex items-center space-x-1'>
                    <FiChevronRight className='h-5 w-5' />
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

export const getStaticPaths: GetStaticPaths = async ()=> {
  const paths = DB.projets.map((projet: IProject, index: number) => {
    const slug = index
    return { params: { index: slug.toString() } }
  })
  return { paths, fallback: false }
}

interface Params extends ParsedUrlQuery{
  index: string
}

export const getStaticProps: GetStaticProps = async ({ params }: GetStaticPropsContext<Params>): Promise<
GetStaticPropsResult<IProps>
> => {
  const { index } = params
  const projet = DB.projets[index]
  return { props: { projet, index } }
}

export default Index