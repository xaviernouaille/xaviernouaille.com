import NavLink from 'next/link'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { IoMail } from 'react-icons/io5'
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      id='hero'
      className='text-white h-screen flex justify-center items-center cstm-container'>
      <div className='flex flex-col justify-center items-center space-y-10 text-center'>
        <NavLink scroll={false} href='/#contact'>
          <a
            className='py-3 px-8 rounded-lg mb-5 secondary font-medium cursor-pointer transform hover:scale-95 transition-transform'
            style={{ backgroundColor: '#27282b' }}>
            Disponible pour vos missions freelance.
          </a>
        </NavLink>
        <h1 className='text-7xl font-bold'>
          Hello,
          <br /> I'm Xavier Nouaille
        </h1>
        <h2 className='text-2xl max-w-3xl text-opacity font-light'>
          Développeur junior depuis maintenant 2 ans, j'utilise principalement
          la MERN Stack. Je suis passioné par les nouvelles technologies.
        </h2>
        <NavLink scroll={false} href='/#contact'>
          <a className='py-3 px-10 rounded-lg bg-secondary font-medium text-lg'>
            Contactez moi !
          </a>
        </NavLink>

        <div className='flex items-center space-x-3'>
          <a
            target='_blank'
            href='https://www.linkedin.com/in/xavier-nouaille/'>
            <FaLinkedin className='h-6 w-6 text-opacity cursor-pointer hover:opacity-70 transition-opacity' />
          </a>
          <a target='_blank' href='https://github.com/xaviernouaille'>
            <FaGithub className='h-6 w-6 text-opacity cursor-pointer hover:opacity-70 transition-opacity' />
          </a>
          <a href='mailto:xavier.nouaille@protonmail.com'>
            <IoMail className='h-6 w-6 text-opacity cursor-pointer hover:opacity-70 transition-opacity' />
          </a>
        </div>
      </div>
    </section>
  )
}
