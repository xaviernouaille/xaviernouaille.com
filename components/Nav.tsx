import { useState, useCallback, useEffect, ReactElement } from 'react'
// import NavLink from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
// import { FiMenu, FiArrowUpRight } from 'react-icons/fi'
import { useRouter } from 'next/router'
import Toggle from './ThemeToggle'
import DB from '../public/DB.json'
import BurgerIcon from './BurgerIcon'
// import Logo from './Logo'

export interface ILink {
  path: string
  label: string
}

const Nav = (): ReactElement => {
  const [isFixed, setIsFixed] = useState<boolean>(
    !!(typeof window !== 'undefined' && window.scrollY < 300)
  )
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const [y, setY] = useState(
    typeof window !== 'undefined' ? window.scrollY : ''
  )

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget
      if (y > window.scrollY) {
        //   console.log("scrolling up");
        setIsFixed(true)
      } else if (y < window.scrollY && y > 200) {
        // setTimeout(()=> setIsFixed(false), 1000)
        setIsFixed(false)
        //   console.log("scrolling down");
      }
      setY(window.scrollY)
      setMobileNavOpen(false)
    },
    [y]
  )

  useEffect(() => {
    setY(window.scrollY)
    window.addEventListener('scroll', handleNavigation)

    return () => {
      window.removeEventListener('scroll', handleNavigation)
    }
  }, [handleNavigation])

  const variants = {
    fixed: { opacity: 1, y: 0 },
    auto: { opacity: 0, y: '-100%' },
  }

  const mobileVariants = {
    open: { x: 0, display: 'block' },
    closed: { x: '-100%', transitionEnd: { display: 'none' } },
  }

  const router = useRouter()
  useEffect(() => {
    setMobileNavOpen(false)
  }, [router.pathname])

  const { links } = DB

  return (
    <section className='w-full fixed z-50 top-0'>
      <AnimatePresence exitBeforeEnter>
        <motion.header
          variants={variants}
          animate={isFixed ? 'fixed' : 'auto'}
          className={`bg-blur ${
            y > 50 ? 'border-b border-tertiary' : 'border-0'
          } bg-primary`}>
          <nav className='bg-primary border-gray-200 px-2 sm:px-4 py-2.5 rounded mx-auto cstm-container'>
            <div className='container flex flex-wrap justify-between items-center mx-auto'>
              <a href='#' className='flex'>
                <svg
                  className='mr-3 h-10'
                  viewBox='0 0 52 72'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M1.87695 53H28.7791C41.5357 53 51.877 42.7025 51.877 30H24.9748C12.2182 30 1.87695 40.2975 1.87695 53Z'
                    fill='#76A9FA'></path>
                  <path
                    d='M0.000409561 32.1646L0.000409561 66.4111C12.8618 66.4111 23.2881 55.9849 23.2881 43.1235L23.2881 8.87689C10.9966 8.98066 1.39567 19.5573 0.000409561 32.1646Z'
                    fill='#A4CAFE'></path>
                  <path
                    d='M50.877 5H23.9748C11.2182 5 0.876953 15.2975 0.876953 28H27.7791C40.5357 28 50.877 17.7025 50.877 5Z'
                    fill='#1C64F2'></path>
                </svg>
                <span className='self-center text-lg font-semibold whitespace-nowrap dark:text-white'>
                  {'FlowBite'}
                </span>
              </a>
              <div className='flex md:order-2'>
                <button
                  type='button'
                  className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>
                  {'Get started'}
                </button>
                <button
                  data-collapse-toggle='mobile-menu-4'
                  type='button'
                  className='inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
                  aria-controls='mobile-menu-4'
                  aria-expanded='false'>
                  <span className='sr-only'>{'Open main menu'}</span>
                  <svg
                    className='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fillRule='evenodd'
                      d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                      clipRule='evenodd'></path>
                  </svg>
                  <svg
                    className='hidden w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'>
                    <path
                      fillRule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clipRule='evenodd'></path>
                  </svg>
                </button>
              </div>
              <div
                className='hidden justify-between items-center w-full md:flex md:w-auto md:order-1'
                id='mobile-menu-4'>
                <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:font-medium'>
                  {links.map((link, i: number) => (
                    <li key={i}>
                      <a
                        href={link.path}
                        className='block py-2 px-4 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white'>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>

          {/* Mobile Nav */}
          <div
            id='mobileNav'
            className='cstm-container mx-auto relative lg:hidden'>
            <nav className='flex items-center justify-between text-white py-5 px-6'>
              <BurgerIcon
                isOpen={mobileNavOpen}
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
              />
              <Toggle />
            </nav>
            <AnimatePresence initial={false} exitBeforeEnter>
              <motion.aside
                variants={mobileVariants}
                animate={mobileNavOpen ? 'open' : 'closed'}
                className='rounded-lg fixed mt-3 left-0 right-0 md:m-0 shadow-lg bg-blur bg-primary border-b h-screen'>
                {/* <ul className='flex flex-col items-center space-y-10 py-8 bg-primary w-full p-8 rounded-b-xl'>
                  <Logo className='text-2xl sm:text-3xl' />
                  {links.map((link: ILink, index: number) => (
                    <NavLink scroll={false} key={index} href={`/#${link.path}`}>
                      <a className='text-gray-200 font-medium text-center'>
                        {link.label}
                      </a>
                    </NavLink>
                  ))}
                  <NavLink scroll={false} href='#contact'>
                    <a className='text-gray-200 big-btn bg-secondary w-fit'>
                      Contact
                    </a>
                  </NavLink>
                </ul> */}
              </motion.aside>
            </AnimatePresence>
          </div>
        </motion.header>
      </AnimatePresence>
    </section>
  )
}

export default Nav
