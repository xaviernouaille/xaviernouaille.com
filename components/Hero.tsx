import NavLink from 'next/link'
import { ReactElement } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Hero = (): ReactElement => {
  return (
    <section
      id='hero'
      className='text-white flex items-center cstm-container px-6 md:px-0 md:pb-24 pt-52 pb-12'>
      <div className='flex flex-col space-y-10 w-full'>
        <h1 className='h1'>
          Bonjour, je suis Xavier, développeur junior fullstack basé sur Paris.
        </h1>
        <div className='flex flex-col justify-center space-y-10'>
          <div>
            <NavLink scroll={false} href='/#contact'>
              <a className='big-btn bg-secondary text-white'>Contactez moi !</a>
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
