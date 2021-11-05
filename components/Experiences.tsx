import DB from '../public/DB.json'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'

export interface IExperience {
  date: number
  intitule: string
  description: string
}

function Item({ intitule, children }) {
  const [isOpen, setIsOpen] = useState(false)

  const variants = {
    open: { rotate: 90 },
    close: { rotate: 0 },
  }

  return (
    <motion.li
      layout
      className='p-6 md:py-5 md:px-8 rounded-lg cursor-pointer'
      style={{ backgroundColor: '#27282b' }}
      onClick={() => setIsOpen(!isOpen)}>
      <motion.div
        className='rounded-lg text-xl flex items-center space-x-3'
        layout>
        <motion.span
          variants={variants}
          className='secondary'
          animate={isOpen ? 'open' : 'close'}>
          <FiArrowRight className='h-6 w-6' />
        </motion.span>
        <h3 className='text-lg md:text-xl'>{intitule}</h3>
      </motion.div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className='mt-5 text-base md:text-lg'
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.li>
  )
}

export default function Experiences() {
  const experienceData: IExperience[] = DB.experiences

  return (
    <AnimateSharedLayout>
      <motion.section
        layout
        id='experiences'
        className='section big-section experience-section'>
        <section
          className='cstm-container text-white p-8 md:p-12 md:rounded-xl py-16 md:py-12'
          style={{ backgroundColor: '#1c1d1f' }}>
          <h2 className='font-bold seconde-title'>
            Expériences professionnelles
          </h2>
          <hr className='mt-6 text-gray-200 opacity-10' />

          <motion.ul className='flex flex-col space-y-6 py-10'>
            {experienceData.map((experience, index) => (
              <Item
                intitule={`${experience.date} : ${experience.intitule}`}
                key={index}>
                {experience.description}
              </Item>
            ))}
          </motion.ul>
        </section>
      </motion.section>
    </AnimateSharedLayout>
  )
}
