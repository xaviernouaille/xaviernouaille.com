import Logo from './Logo'
import { FiArrowRight } from 'react-icons/fi'
import DB from '../public/DB.json'
import { ILink } from './Nav'
import NavLink from 'next/link'
import Contact from './Contact'
import { ReactElement } from 'react'

const Footer = (): ReactElement => {
  return (
    <>
      <Contact />
      <footer className='px-6 md:px-0 cstm-container'>
        <div className='pt-20 pb-16 flex flex-col space-y-12 lg:flex-row lg:space-y-0 justify-between text-white font-medium'>
          <div className='lg:w-1/2 w-full flex flex-col space-y-7'>
            <Logo className='text-2xl' />
            <p className='lg:max-w-sm text-sm text-t-secondary leading-loose'>
              Xavier Nouaille, développeur junior fullstack basé sur Paris. Je
              vous accompagne dans vos projets.
            </p>
            <div>
              <NavLink scroll={false} href='/#contact'>
                <a className='text-white text-lg font-semibold'>
                  <p>
                    Un projet, une demande de devis ? <span>Par ici !</span>
                  </p>
                </a>
              </NavLink>
            </div>
          </div>

          <div className='lg:w-1/3'>
            <h2 className='mb-5 font-semibold text-xl text-t-secondary'>
              Liens utiles
            </h2>
            <div className='flex flex-col space-y-2.5'>
              {DB.links.map((link: ILink, index: number) => (
                <NavLink scroll={false} key={index} href={`/#${link.path}`}>
                  <a className='text-t-primary'>{link.label}</a>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
        <div>
          <p className='text-sm text-t-primary font-medium pb-10 md:mt-8'>
            © Designé et développé par Xavier Nouaille
          </p>
        </div>
      </footer>
    </>
  )
}

export default Footer
