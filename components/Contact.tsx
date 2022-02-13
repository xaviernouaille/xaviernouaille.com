import { ReactElement, useEffect } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Art from '../public/art.jpg'
import ArtLight from '../public/art-light.jpg'
import useDarkMode from './useDarkMode'

const Contact = (): ReactElement => {
  const { isDark } = useDarkMode()
  useEffect(() => {
    console.log(isDark)
  }, [isDark])

  return (
    <div className='p-4 w-full text-center rounded-lg border shadow-md sm:p-8 dark:border-gray-700 cstm-container mb-20'>
      <h3 className='mb-2 text-3xl font-bold text-gray-900 dark:text-white'>
        Contactez moi !
      </h3>
      <p className='mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400'>
        Disponible pour répondre à vos besoins, vous serez recontacté dans les
        plus brefs délais.
      </p>
      <div className='justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4'>
        <form
          action='https://www.getrevue.co/profile/flowbite/add_subscriber'
          method='post'
          id='revue-form'
          name='revue-form'
          target='_blank'
          data-dashlane-rid='6c6e507e3904a2e1'
          data-form-type='newsletter'>
          <div className='flex items-end mb-3'>
            <div className='relative mr-3 w-full revue-form-group'>
              <label
                htmlFor='member_email'
                className='block hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300'>
                Email address
              </label>
              <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                <svg
                  className='w-5 h-5 text-gray-500 dark:text-gray-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'></path>
                  <path d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'></path>
                </svg>
              </div>
              <input
                className='revue-form-field bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                placeholder='Your email address...'
                type='email'
                name='member[email]'
                id='member_email'
                data-dashlane-rid='38042debe2b0e42d'
                data-form-type='email'
                data-kwimpalastatus='alive'
                data-kwimpalaid='1644752411902-3'
              />
            </div>
            <div className='revue-form-actions'>
              <input
                type='submit'
                value='Subscribe'
                className='cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                name='member[subscribe]'
                id='member_submit'
                data-dashlane-rid='7d1732291eda25c1'
                data-form-type='action,subscribe'
              />
            </div>
          </div>
          <div className='text-sm font-medium text-gray-500 revue-form-footer dark:text-gray-300'>
            By subscribing, you agree with Revue’s{' '}
            <a
              target='_blank'
              rel='nofollow'
              href='https://www.getrevue.co/terms'
              className='text-blue-600 hover:underline dark:text-blue-500'>
              Terms of Service
            </a>{' '}
            and{' '}
            <a
              target='_blank'
              rel='nofollow'
              className='text-blue-600 hover:underline dark:text-blue-500'
              href='https://www.getrevue.co/privacy'>
              Privacy Policy
            </a>
            .
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
