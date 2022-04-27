import { HiChevronRight } from 'react-icons/hi'
import DB from '../public/DB.json'
import { ReactElement, useRef } from 'react'
import Image from 'next/image'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface IPropsProjectItem {
  title: string
  description: string
  img: string
  stack: string[]
  index: number
  link_github: string
}
const myLoader = ({ src, width }) => `${src}?w=${width}`

const ProjetItem = ({
  title,
  description,
  img,
  stack,
  index,
  link_github,
}: IPropsProjectItem): ReactElement => {
  return (
    <section id='projects' className='flex flex-col space-y-10'>
      <div className='w-full'>
        <Image
          loader={myLoader}
          className='rounded-lg'
          layout='responsive'
          width={'100%'}
          height={'55%'}
          objectFit='contain'
          quality={100}
          src={img}
          alt={title}
        />
      </div>
      <div className='w-full lg:mr-10 flex flex-col space-y-5'>
        <p className='mb-5 uppercase text-white font-semibold text-xl'>
          {title}
        </p>
        <p className='text-lg opacity-50'>{description}</p>
        <p className='font-medium opacity-50'>{stack.join(' ')}</p>
        <a
          className='text-xl font-semibold flex items-center space-x-1'
          href={link_github}
          target='_blank'>
          <p>Consulter le projet</p>
          <HiChevronRight />
        </a>
      </div>
    </section>
  )
}

const Projects = (): ReactElement => {
  const sliderRef = useRef<Slider | null>(null)
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    ref: sliderRef,
    nextArrow: <></>,
    prevArrow: <></>,
  }

  return (
    <section id='projets' className='section container-center text-white'>
      <section>
        <div className='mb-14'>
          <h2 className='text-w-2'>Réalisations</h2>
        </div>
        <Slider {...settings}>
          {DB.projets.map(
            (
              { title, description, stack, img, link_github },
              index: number
            ) => (
              <ProjetItem
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
        </Slider>
      </section>
    </section>
  )
}

export default Projects
