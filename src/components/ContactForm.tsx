const ContactForm = () => {
  <div className='my-10 sm:my-14'>
    <h2 className='mb-5 font-medium text-gray-800 dark:text-neutral-200'>
      Subscribe
    </h2>

    <form>
      <div className='p-1.5 flex flex-col sm:flex-row items-center gap-2 border border-gray-200 rounded-lg dark:border-neutral-700'>
        <div className='relative w-full'>
          <label htmlFor='hero-input' className='sr-only'>
            Subscribe
          </label>
          <div className='absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3'>
            <svg
              className='shrink-0 size-4 text-gray-400 dark:text-neutral-600'
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            >
              <rect width='20' height='16' x='2' y='4' rx='2' />
              <path d='m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7' />
            </svg>
          </div>
          <input
            type='text'
            id='hero-input'
            name='hero-input'
            className='py-1.5 sm:py-2 ps-9 pe-3 block w-full border-transparent rounded-lg sm:text-sm focus:border-transparent focus:ring-transparent disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500'
            placeholder='Enter your email'
          />
        </div>
        <a
          className='w-full sm:w-auto whitespace-nowrap py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent bg-gray-800 text-white hover:bg-gray-900 focus:outline-hidden focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800 dark:hover:bg-neutral-200'
          href='#'
        >
          Join
          <svg
            className='shrink-0 size-3.5'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          >
            <path d='M5 12h14' />
            <path d='m12 5 7 7-7 7' />
          </svg>
        </a>
      </div>
      <p className='mt-2 text-xs text-gray-500 dark:text-neutral-500'>
        No spam, unsubscribe at any time.
      </p>
    </form>
  </div>;
};

export default ContactForm;
