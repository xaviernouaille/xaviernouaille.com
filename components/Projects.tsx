import { HiChevronRight } from 'react-icons/hi'
import DB from '../public/DB.json'
import { IProject } from '../pages/projet/[index]'
import Link from 'next/link'
import { ReactElement } from 'react'

interface IPropsProjectItem{
  title: string
  description: string
  img: string
  stack: string[]
  index: number
}

const ProjetItem = ({ title, description, img, stack, index }: IPropsProjectItem): ReactElement=> {
  return (
    <section className='flex flex-col lg:flex-row space-y-10 lg:space-y-0 items-center'>
      <div className='w-full lg:w-2/5 lg:mr-10 flex flex-col space-y-5'>
        <h3 className='cstm-h3'>{title}</h3>
        <p className='md:text-lg text-base text-t-secondary'>{description}</p>
        <p className='font-medium text-t-secondary'>{stack.join(' ')}</p>
        <Link
          scroll={false}
          key={index}
          href='/projet/[index]'
          as={`/projet/${index}`}>
          <a className='text-xl font-semibold flex items-center space-x-1'>
            <p>Consulter le projet</p>
            <HiChevronRight />
          </a>
        </Link>
      </div>
      <div className='w-full lg:w-3/5'>
        <img className='rounded-lg' src={img} alt={title} />
      </div>
    </section>
  )
}

const Projects = ():ReactElement=> {
  return (
    <section id='projets' className='section text-white'>
      <section className='cstm-container'>
        <div className='mb-16'>
          <h2 className='h2 mb-20 md:mb-32'>Réalisations</h2>
        </div>

        <section className='flex flex-col space-y-28 md:space-y-32'>
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