import { ReactElement } from 'react'
import DB from '../public/DB.json'

const Experiences = (): ReactElement => {
  const { jobs, degrees } = DB
  return (
    <section
      id='experiences'
      className='text-t-primary container-center section flex flex-col'>
      <div className='mb-14'>
        <h2 className='text-white text-w-2'>Expériences</h2>
      </div>
      <div>
        <h3 className='text-white text-2xl mb-4 font-semibold font-sans'>
          Formations
        </h3>
      </div>
      <ol className='relative border-l border-gray-200 dark:border-gray-700 md:pr-20'>
        {degrees.map(({ title, description, dateFrom, dateTo }, i) => (
          <li key={i} className='mb-10 ml-4'>
            <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
            <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
              {dateFrom} - {dateTo}
            </time>
            <h3 className='text-lg font-semibold text-white text-xl md:text-2xl mt-2'>
              {title}
            </h3>
            <p className='text-base font-normal text-gray-500 dark:text-gray-400 mt-3'>
              {description}
            </p>
          </li>
        ))}
      </ol>
      <div>
        <h3 className='text-white text-2xl mb-4 font-semibold font-sans mt-14'>
          Experiences professionnelles
        </h3>
      </div>
      <ol className='relative border-l border-gray-200 dark:border-gray-700 md:pr-20'>
        {jobs.map(({ title, description, dateFrom, dateTo }, i) => (
          <li key={i} className='mb-10 ml-4'>
            <div className='absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700'></div>
            <time className='mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500'>
              {dateFrom} - {dateTo}
            </time>
            <h3 className='text-lg font-semibold text-white text-xl md:text-2xl mt-2'>
              {title}
            </h3>
            <p className='text-base font-normal text-gray-500 dark:text-gray-400 mt-3'>
              {description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Experiences
