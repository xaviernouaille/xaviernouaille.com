import NavLink from 'next/link'
import { ReactElement } from 'react'

const Hero = (): ReactElement => {
  return (
    <>
      <section
        id='hero'
        className='text-white flex items-center px-6 md:px-0 container-center pt-36 lg:pt-44 pb-24'>
        <div className='flex flex-col space-y-10 w-full'>
          <h1 className='leading-tight text-w-1'>
            Bonjour, je suis Xavier, développeur junior fullstack basé sur
            Paris.
          </h1>
          <div className='flex flex-col justify-center space-y-10'>
            <div>
              <NavLink scroll={false} href='/#contact'>
                <a className='btn text-white text-lg'>Contactez moi !</a>
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
