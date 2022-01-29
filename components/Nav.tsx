import { useState, useCallback, useEffect, ReactElement } from 'react'
import DB from '../public/DB.json'
import NavLink from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMenu, FiArrowUpRight } from 'react-icons/fi'
import Toggle from './ThemeToggle'
import { useRouter } from 'next/router'
import BurgerIcon from './BurgerIcon'
import Logo from './Logo'

export interface ILink {
  path: string
  label: string
}

const Nav = ():ReactElement=> {
  const links: ILink[] = DB.links

  const [isFixed, setIsFixed] = useState<boolean>(
    typeof window !== 'undefined' && window.scrollY < 300 ? true : false
  )

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

  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)

  const mobileVariants = {
    open: { x: 0, display: 'block' },
    closed: { x: '-100%', transitionEnd: { display: 'none' } },
  }

  const router = useRouter()
  useEffect(() => {
    setMobileNavOpen(false)
  }, [router.pathname])

  return (
    <section className='w-full fixed z-50 top-0'>
      <AnimatePresence exitBeforeEnter>
        <motion.header
          variants={variants}
          animate={isFixed ? 'fixed' : 'auto'}
          className={`bg-blur ${
            y > 50 ? 'border-b border-tertiary' : 'border-0'
          } bg-primary`}>
          <nav
            className={`cstm-container justify-between items-center mx-auto py-5 hidden lg:flex`}>
            <ul className='flex space-x-10 font-semibold'>
              {links.map((link: ILink, index: number) => (
                <NavLink scroll={false} key={index} href={`/#${link.path}`}>
                  <a className='text-t-secondary text-sm2'>{link.label}</a>
                </NavLink>
              ))}
              <NavLink scroll={false} href='#contact'>
                <a className='text-t-secondary text-sm2 flex items-center'>
                  <p>Contactez moi</p> <FiArrowUpRight className='w-5 h-5' />
                </a>
              </NavLink>
            </ul>

            <ul className='flex items-center space-x-4'>
              <li className='flex items-center text-t-primary'>
                <Toggle />
              </li>
            </ul>
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
                className='rounded-lg fixed mt-3 left-0 right-0 md:m-0 shadow-lg bg-blur bg-primary border-b w-2/3 h-screen'>
                <ul className='flex flex-col space-y-10 py-8 bg-primary w-full p-8 rounded-b-xl'>
                  <Logo className='text-xl' />
                  {links.map((link: ILink, index: number) => (
                    <NavLink scroll={false} key={index} href={`/#${link.path}`}>
                      <a className='text-gray-200 font-medium'>
                        {link.label}
                      </a>
                    </NavLink>
                  ))}
                  <NavLink scroll={false} href='#contact'>
                    <a className='text-gray-200 big-btn bg-secondary w-fit'>
                      Contact
                    </a>
                  </NavLink>
                </ul>
              </motion.aside>
            </AnimatePresence>
          </div>
        </motion.header>
      </AnimatePresence>
    </section>
  )
}

export default Nav
