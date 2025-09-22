import { WORKS } from '@/app/constants';

function Experiences() {
  return (
    <div className='flex gap-10'>
      <h4 className='md:w-[75px] w-1/4 text-lg text-black dark:text-white md:pt-0 md:text-base md:font-normal md:text-opacity-40'>
        Expériences
      </h4>
      <div className='w-2/3 md:w-full'>
        <div className='flex flex-col space-y-3'>
          {WORKS.map((work) => (
            <a
              key={work.company}
              target='_blank'
              rel='noopener noreferrer'
              href={work.href}
              className='flex sm:items-center flex-col sm:flex-row gap-0.5 sm:gap-4 group'
            >
              <strong className='line-clamp-2 font-medium text-gray-1000 group-hover:text-blue-600 group-hover:underline dark:text-gray-100 dark:group-hover:text-blue-500'>
                {work.company}
              </strong>
              <span className='hidden sm:flex flex-1 border-t border-gray-300 border-dashed shrink dark:border-gray-800'></span>
              <span className='flex-none text-tertiary'>{work.position}</span>
              <span className='flex-none font-mono text-quaternary'>
                {work.date}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiences;
