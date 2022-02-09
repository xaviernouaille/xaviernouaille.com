import { ReactElement, useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Art from '../public/art.jpg'
import ArtLight from '../public/art-light.jpg'
import useDarkMode from './useDarkMode'

const Contact = (): ReactElement => {
  const {isDark} = useDarkMode()
  useEffect(()=>{
    console.log(isDark)
  }, [isDark])

  return (
    <section id='contact' className='cstm-container section text-white'>
      <section
        className='relative lg:py-24 p-16 rounded-xl'
        style={{
          backgroundImage: `url(https://images.pexels.com/photos/2832439/pexels-photo-2832439.png?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}>
        <div className='absolute inset-0 h-full w-full bg-black rounded-xl bg-opacity-30 z-1'></div>
        <section className='flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-10 lg:space-y-0 relative z-3'>
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
