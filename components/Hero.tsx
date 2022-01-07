import NavLink from 'next/link'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export default function Hero() {
  return (
    <section
      id='hero'
      className='text-white h-screen flex items-center cstm-container px-6 md:px-0'>
      <div className='flex flex-col space-y-10'>
        <NavLink scroll={false} href='/#contact'>
          <a className='py-3 text-center max-w-md px-8 rounded-3xl text-xs mb-5 text-secondary font-medium cursor-pointer transform hover:scale-95 transition-transform sm:text-sm md:text-base bg-fourth'>
            Disponible pour vos missions freelance.
          </a>
        </NavLink>
        <h1 className='hero-title text-t-primary'>
          Bonjour, je m'appelle Xavier Nouaille, développeur junior fullstack
          basé sur Paris.
        </h1>
        <div className='flex flex-col justify-center space-y-10'>
          <div>
            <NavLink scroll={false} href='/#contact'>
              <a className='big-btn border border-secondary text-secondary'>
                Contactez moi !
              </a>
            </NavLink>
          </div>
          <div className='flex items-center space-x-3'>
            <a
              target='_blank'
              aria-label='Linkedin'
              rel='noreferrer'
              href='https://www.linkedin.com/in/xavier-nouaille/'>
              <FaLinkedin className='h-6 w-6 text-opacity cursor-pointer hover:opacity-70 transition-opacity' />
            </a>
            <a
              target='_blank'
              aria-label='GitHub'
              rel='noreferrer'
              href='https://github.com/xaviernouaille'>
              <FaGithub className='h-6 w-6 text-opacity cursor-pointer hover:opacity-70 transition-opacity' />
            </a>
            <a aria-label='E-mail' href='mailto:xavier.nouaille@protonmail.com'>
              <FaEnvelope className='h-6 w-6 text-opacity cursor-pointer hover:opacity-70 transition-opacity' />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
