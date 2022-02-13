import NavLink from 'next/link'
import { ReactElement } from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const Hero = (): ReactElement => {
  return (
    <section
      id='hero'
      className='text-white flex items-center cstm-container px-6 md:px-0 md:pb-24 md:pt-44 pt-28 pb-12'>
      <div className='flex flex-col space-y-6 w-full'>
        <div className='flex justify-center'>
          <a
            href='https://flowbite.com/docs/components/accordion/'
            target='_blank'
            className='inline-flex justify-between items-center py-1 px-1 pr-4 mb-4 text-sm text-gray-700 bg-gray-100 rounded-full dark:bg-gray-800 dark:text-white hover:bg-gray-200'
            role='alert'>
            <span className='text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3'>
              Disponible
            </span>{' '}
            <span className='text-sm font-medium'>
              En freelance, pour répondre à vos besoins
            </span>{' '}
            <svg
              className='ml-2 w-5 h-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                clip-rule='evenodd'></path>
            </svg>
          </a>
        </div>
        <h1 className='text-center text-6xl font-extrabold leading-snug px-20'>
          Bonjour, je suis Xavier, développeur junior fullstack basé sur Paris.
        </h1>
        <p className='text-center text-2xl max-w-3xl mx-auto text-gray-400'>
          Développeur depuis 2018, je poursuis aujourd'hui mon activité en tant
          que Freelance et alternant chez Offeaze.
        </p>
        <div className='flex flex-col mb-8 md:flex-row lg:justify-center'>
          <a
            href='https://flowbite.com/docs/getting-started/quickstart/'
            target='_blank'
            className='text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-base px-6 py-2.5 text-center md:mr-5 mb-3 md:mb-0 inline-flex items-center justify-center'>
            Contact
          </a>
          <a
            href='#components'
            className='text-gray-600 bg-white-100 hover:bg-gray-100 hover:text-blue-600 border border-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white border dark:border-gray-600 font-semibold rounded-xl text-base px-6 py-2.5 text-center inline-flex justify-center items-center'>
            <svg
              className='mr-2 w-5 h-5'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z'></path>
            </svg>{' '}
            Découvrir mes projets
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
