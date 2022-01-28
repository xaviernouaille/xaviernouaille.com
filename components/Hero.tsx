import NavLink from 'next/link'
import { ReactElement } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Hero = ():ReactElement=> {
  return (
    <section
      id='hero'
      className='text-white flex items-center cstm-container px-6 md:px-0 md:pb-24 md:pt-44 pt-28 pb-12'>
      <div className='flex flex-col space-y-10 w-full'>
        {/* <NavLink scroll={false} href='/#contact'>
          <p className='py-3 text-center text-sm text-secondary font-medium cursor-pointer transform hover:scale-95 transition-transform sm:text-sm md:text-base bg-fourth'>
            Disponible pour vos missions freelance.
          </p>
        </NavLink> */}
        <h1 className="h1">
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