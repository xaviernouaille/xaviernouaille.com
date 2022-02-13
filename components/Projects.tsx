import { HiChevronRight } from 'react-icons/hi'
import DB from '../public/DB.json'
import { IProject } from '../pages/projet/[index]'
import Link from 'next/link'
import { ReactElement } from 'react'

interface IPropsProjectItem {
  title: string
  description: string
  img: string
  stack: string[]
  index: number
}

const ProjetItem = ({
  title,
  description,
  img,
  stack,
  index,
}: IPropsProjectItem): ReactElement => {
  return (
    <Link href={`projet/${index}`}>
      <div className='bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700'>
        <img className='rounded-t-lg' src={img} alt='' />
        <div className='p-5'>
          <a href='#'>
            <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
              {title}
            </h5>
          </a>
          <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
            {description}
          </p>
          <a
            href='#'
            className='inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
            Read more
            <svg
              className='ml-2 -mr-1 w-4 h-4'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                clip-rule='evenodd'></path>
            </svg>
          </a>
        </div>
      </div>
    </Link>
  )
}

const Projects = (): ReactElement => {
  return (
    <section id='projets' className='section text-white'>
      <section className='cstm-container'>
        <div className='mb-16'>
          <h2 className='text-4xl font-extrabold sticky top-32 h-fit'>
            Mes réalisations
          </h2>{' '}
        </div>

        <section className='grid grid-cols-2 gap-8'>
          {DB.projets.map((projet: IProject, index: number) => (
            <ProjetItem
              key={index}
              title={projet.title}
              description={projet.description}
              stack={projet.stack}
              img={projet.img}
              index={index}
            />
          ))}
        </section>
      </section>
    </section>
  )
}

export default Projects
