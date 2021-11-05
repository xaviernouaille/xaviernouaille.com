import { useState, useCallback, useEffect } from 'react'
import DB from '../public/DB.json'
import NavLink from 'next/link'
import Logo from './Logo'
import { motion, AnimatePresence } from 'framer-motion'
import {HiMenuAlt4} from 'react-icons/hi'

export interface ILink {
  path: string
  label: string
}

export default function Nav() {
  const links: ILink[] = DB.links

  const [isFixed, setIsFixed] = useState<boolean>(
    typeof window !== 'undefined' && window.scrollY < 100 ? true : false
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

  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const mobileVariants = {
    open: { opacity: 1, scaleX: '100%' },
    closed: { opacity: 0, scaleX: '0%' },
  }

  const mobileBtnVariants = {
    open: { rotate: "90deg" },
    closed: { rotate: "0deg" },
  }

  return (
    <section className='fixed top-0 z-50 w-full'>
      <AnimatePresence exitBeforeEnter>
        <motion.header
          variants={variants}
          animate={isFixed ? 'fixed' : 'auto'}
          className={`bg-blur ${
            y > 50 ? 'border-b border-opacity' : ''
          } bg-primary`}>
          <nav
            className={`cstm-container justify-between items-center text-white mx-auto py-5 hidden lg:flex`}>
            <ul>
              <Logo />
            </ul>
            <ul className='flex space-x-10'>
              {links.map((link: ILink, index: number) => (
                <NavLink scroll={false} key={index} href={`/#${link.path}`}>
                  <a className='text-gray-200 text-sm2'>{link.label}</a>
                </NavLink>
              ))}
            </ul>

            <ul>
              <li>
                <NavLink scroll={false} href='/#contact'>
                  <a className='px-4 py-1.5 bg-secondary text-sm rounded-md font-medium'>
                    Contact
                  </a>
                </NavLink>
              </li>
            </ul>
          </nav>

          {/* Mobile Nav */}
          <div id="mobileNav" className='cstm-container mx-auto relative lg:hidden px-6'>
            <nav className='flex items-center justify-between text-white py-5'>
              <motion.button animate={mobileNavOpen ? 'open' : 'closed'} variants={mobileBtnVariants} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                <HiMenuAlt4 className="h-6 w-6" />
              </motion.button>
              <Logo />
            </nav>
            <AnimatePresence initial={false} exitBeforeEnter>
              <motion.div
                variants={mobileVariants}
                animate={mobileNavOpen ? 'open' : 'closed'}
                className='rounded-lg absolute mt-3 left-0 right-0 m-8 md:m-0 shadow-lg bg-blur bg-primary'>
                <ul className='flex flex-col space-y-10 p-8'>
                  {links.map((link: ILink, index: number) => (
                    <NavLink scroll={false} key={index} href={`/#${link.path}`}>
                      <a className='text-gray-200 text-sm2'>{link.label}</a>
                    </NavLink>
                  ))}
                  <NavLink scroll={false} href='/#contact'>
                    <a className='text-gray-200 text-sm2'>Contact</a>
                  </NavLink>
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.header>
      </AnimatePresence>
    </section>
  )
}
