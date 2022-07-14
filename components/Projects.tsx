import { HiChevronRight } from 'react-icons/hi'
import DB from '../public/DB.json'
import { ReactElement } from 'react'
import Image from 'next/image'

interface IPropsProjectItem {
  title: string
  description: string
  img: string
  stack: string[]
  index: number
  link_github: string
}
const myLoader = ({ src, width }) => `${src}?w=${width}`

const ProjectItem = ({
  title,
  description,
  img,
  stack,
  index,
  link_github,
}: IPropsProjectItem): ReactElement => {
  return (
    <section id='projects' className='flex flex-col'>
      <div className='w-full h-full relative md:h-[600px] h-[200px]'>
        <Image
          loader={myLoader}
          className='rounded-lg'
          layout='fill'
          width={'100%'}
          quality={100}
          src={img}
          alt={title}
        />
      </div>
      <div className='w-full lg:mr-10 flex flex-col mt-5'>
        <p className='mb-5 text-xl md:text-2xl text-white font-semibold text-xl'>
          {title}
        </p>
        <p className='text-lg opacity-50'>{description}</p>
        <p className='font-medium opacity-50'>{stack.join(' ')}</p>
        <a
          className='btn flex items-center space-x-1 inline-flex w-fit mt-4'
          href={link_github}
          target='_blank'>
          <p>En savoir plus</p>
          <HiChevronRight className='h-5 w-5 md:w-6 md:h-6 animate-pulse' />
        </a>
      </div>
    </section>
  )
}

const Projects = (): ReactElement => {
  return (
    <section id='projets' className='section container-center text-white'>
      <section>
        <div className='mb-14'>
          <h2 className='text-w-2'>Réalisations</h2>
        </div>
        <div className='flex flex-col space-y-10'>
          {DB.projets.map(
            ({ title, description, stack, img, link_github }, index) => (
              <ProjectItem
                key={index}
                title={title}
                description={description}
                stack={stack}
                img={img}
                index={index}
                link_github={link_github}
              />
            )
          )}
        </div>
      </section>
    </section>
  )
}

export default Projects
