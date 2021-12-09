import Logo from './Logo'
import { FiArrowRight } from 'react-icons/fi'
import DB from '../public/DB.json'
import { ILink } from './Nav'
import NavLink from 'next/link'

export default function Footer() {
  return (
    <footer className='mt-20 px-6 md:px-0'>
      <hr className='border-t border-opacity' />
      <div className='py-20 cstm-container flex flex-col space-y-12 lg:flex-row justify-between text-white'>
        <div className='w-1/2 md:w-auto flex flex-col space-y-7'>
        <div>
          <Logo />
        </div>
        </div>

        <div>
          <h2 className="mb-5 font-semibold text-2xl">Liens utiles</h2>
          <div className="flex flex-col space-y-2.5">
              {DB.links.map((link: ILink, index: number) => (
                <NavLink scroll={false} key={index} href={`/#${link.path}`}>
                  <a className='text-gray-200'>{link.label}</a>
                </NavLink>
              ))}
          </div>
        </div>

        <div className="max-w-sm flex flex-col space-y-8">
          <div className="flex flex-col -space-y-2">
            <p className="text-2xl font-semibold">Un projet ?
            </p>
            <p className="text-2xl font-semibold">Une demande de devis ?</p>
              <a className="flex items-center space-x-2 text-secondary hover:translate-x-5 transition-transform duration-100" href="">
                <FiArrowRight className="w-6 h-6" />
                <p className="text-2xl font-semibold">Par ici !</p>
              </a>
          </div>
          <p>Xavier Nouaille, développeur junior fullstack basé sur Paris. Je vous accompagne dans vos projets.</p>
        </div>
      </div>
      <div>
      <p className='text-sm text-opacity text-center pb-10 mt-8'>
            Designé et développé par Xavier Nouaille
          </p>
      </div>
    </footer>
  )
}
