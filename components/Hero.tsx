import NavLink from 'next/link'
import { GitHub, Mail, Linkedin } from 'react-feather'

export default function Hero() {
  return (
    <section
      id='hero'
      className='text-white h-screen flex justify-center items-center cstm-container px-6 md:px-0'>
      <div className='flex flex-col justify-center items-center space-y-10 text-center'>
        <NavLink scroll={false} href='/#contact'>
          <a
            className='py-3 px-8 rounded-lg mb-5 secondary font-medium cursor-pointer transform hover:scale-95 transition-transform text-sm md:text-base'
            style={{ backgroundColor: '#27282b' }}>
            Disponible pour vos missions freelance.
          </a>
        </NavLink>
        <h1 className='md:text-7xl text-5xl sm:text-6xl font-bold'>
          Hello,
          <br /> I'm Xavier Nouaille
        </h1>
        <p className='text-lg md:text-1.5xl max-w-3xl text-opacity font-light'>
          Développeur junior depuis maintenant 2 ans, j'utilise principalement
          la MERN Stack. Je suis passioné par les nouvelles technologies.
        </p>
        <NavLink scroll={false} href='/#contact'>
          <a className='big-btn bg-secondary rounded-lg font-medium'>
            Contactez moi !
          </a>
        </NavLink>

        <div className='flex items-center space-x-3'>
          <a
            target='_blank'
            aria-label='Linkedin'
            rel='noreferrer'
            href='https://www.linkedin.com/in/xavier-nouaille/'>
            <Linkedin className='h-6 w-6 text-opacity cursor-pointer hover:opacity-70 transition-opacity' />
          </a>
          <a
            target='_blank'
            aria-label='GitHub'
            rel='noreferrer'
            href='https://github.com/xaviernouaille'>
            <GitHub className='h-6 w-6 text-opacity cursor-pointer hover:opacity-70 transition-opacity' />
          </a>
          <a aria-label='E-mail' href='mailto:xavier.nouaille@protonmail.com'>
            <Mail className='h-6 w-6 text-opacity cursor-pointer hover:opacity-70 transition-opacity' />
          </a>
        </div>
      </div>
    </section>
  )
}
