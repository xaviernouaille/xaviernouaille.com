import { useState, useCallback, useEffect } from 'react'
import DB from '../public/DB.json'
import { CSSTransition } from 'react-transition-group'
import NavLink from 'next/link'
import Logo from './Logo'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

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

  return (
    <section className='fixed top-0 z-50 w-full'>
      <AnimatePresence exitBeforeEnter>
        <motion.header
          variants={variants}
          animate={isFixed ? 'fixed' : 'auto'}
          className={`${
            y > 50 ? 'border-b border-opacity' : ''
          } bg-primary nav-header`}>
          <nav
            className={`cstm-container flex justify-between items-center text-white mx-auto py-5`}>
            <ul>
              <Logo />
            </ul>
            <ul className='flex space-x-10'>
              {links.map((link: ILink, index: number) => (
                <NavLink scroll={false} key={index} href={`/#${link.path}`}>
                  <a className='text-gray-200 text-sm2'>
                    {link.label}
                  </a>
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
        </motion.header>
      </AnimatePresence>
    </section>
  )
}
