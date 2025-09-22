function Contact() {
  return (
    <>
      <div className='flex gap-10'>
        <h4 className='md:w-[75px] w-1/4 text-lg text-black dark:text-white md:pt-0 md:text-base md:font-normal md:text-opacity-40'>
          Contact
        </h4>
        <div className='w-2/3 md:w-full'>
          <div className='flex flex-col gap-5 lg:gap-3'>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.linkedin.com/in/xavier-nouaille/'
              className='flex sm:items-center flex-col sm:flex-row gap-0.5 sm:gap-4 group'
            >
              <strong className='line-clamp-2 font-medium text-gray-1000 group-hover:text-blue-600 group-hover:underline dark:text-gray-100 dark:group-hover:text-blue-500'>
                Linkedin
              </strong>
              <span className='hidden sm:flex flex-1 border-t border-gray-300 border-dashed shrink dark:border-gray-800'></span>
              <span className='flex-none text-tertiary'>Visiter</span>
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://github.com/xaviernouaille'
              className='flex sm:items-center flex-col sm:flex-row gap-0.5 sm:gap-4 group'
            >
              <strong className='line-clamp-2 font-medium text-gray-1000 group-hover:text-blue-600 group-hover:underline dark:text-gray-100 dark:group-hover:text-blue-500'>
                GitHub
              </strong>
              <span className='hidden sm:flex flex-1 border-t border-gray-300 border-dashed shrink dark:border-gray-800'></span>
              <span className='flex-none text-tertiary'>Visiter</span>
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='mailto:xavier.nouaille@pm.me'
              className='flex sm:items-center flex-col sm:flex-row gap-0.5 sm:gap-4 group'
            >
              <strong className='line-clamp-2 font-medium text-gray-1000 group-hover:text-blue-600 group-hover:underline dark:text-gray-100 dark:group-hover:text-blue-500'>
                EMail
              </strong>
              <span className='hidden sm:flex flex-1 border-t border-gray-300 border-dashed shrink dark:border-gray-800'></span>
              <span className='flex-none text-tertiary'>Contact</span>
            </a>
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='tel:+33778389134'
              className='flex sm:items-center flex-col sm:flex-row gap-0.5 sm:gap-4 group'
            >
              <strong className='line-clamp-2 font-medium text-gray-1000 group-hover:text-blue-600 group-hover:underline dark:text-gray-100 dark:group-hover:text-blue-500'>
                Téléphone
              </strong>
              <span className='hidden sm:flex flex-1 border-t border-gray-300 border-dashed shrink dark:border-gray-800'></span>
              <span className='flex-none text-tertiary'>Appeler</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
