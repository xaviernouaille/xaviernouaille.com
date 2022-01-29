import { ReactElement } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Art from '../public/art.jpg'

const Contact = (): ReactElement => {
  return (
    <section id='contact' className='pt-28 md:pt-32 md:pb-10 text-white mb-0'>
      <section
        className='relative lg:py-28 p-10 py-16 lg:px-0'
        style={{
          backgroundImage: `url(${Art.src})`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}>
        <div className='absolute inset-0 h-full w-full bg-black bg-opacity-50 z-1'></div>
        <section className='cstm-container flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-10 lg:space-y-0 relative z-3'>
            <h2 className='cstm-h2 text-center sm:text-left w-full'>Contactez-moi!</h2>
          <div className='lg:mr-16 mx-auto sm:mx-0'>
            <a
              href={`mailto:${process.env.NEXT_PUBLIC_ADDRESSMAIL}`}
              target='_blank'
              className='big-btn bg-white text-black'>
              contact
            </a>
          </div>
        </section>
      </section>
    </section>
  )
}

export default Contact
