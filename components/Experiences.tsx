import DB from '../public/DB.json'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'

export interface IDetails {
  date: number
  dateTo?: number
  intitule: string
  description: string
  actually?: boolean
}

function Item({ intitule, children }: { intitule: string; children: string }) {
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

function ItemContainer({ title, data }: { title: string; data: IDetails[] }) {
  return (
    <AnimateSharedLayout>
      <section className='text-white flex flex-col space-y-10'>
        <div>
          <h2 className='font-bold seconde-title'>{title}</h2>
          <hr className='mt-6 text-gray-200 opacity-10' />
        </div>

        <motion.ul className='flex flex-col space-y-6'>
          {data.map((detail, index) => (
            <Item
              intitule={`${detail.date} ${
                detail.actually
                  ? '- maintenant'
                  : detail.dateTo
                  ? `- ${detail.dateTo}`
                  : ''
              } : ${detail.intitule}`}
              key={index}>
              {detail.description}
            </Item>
          ))}
        </motion.ul>
      </section>
    </AnimateSharedLayout>
  )
}

export default function Experiences() {
  return (
    <section
      id='experiences'
      className='section big-section experience-section'>
      <section
        className='overflow-hidden rounded-lg cstm-container py-12 px-5 md:p-12 flex flex-col space-y-14'
        style={{ backgroundColor: '#1c1d1f' }}>
        <ItemContainer title={'Experiences'} data={DB.experiences} />
        <ItemContainer title={'Formations'} data={DB.formations} />
      </section>
    </section>
  )
}
