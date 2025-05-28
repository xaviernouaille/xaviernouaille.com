type Props = {
  date: string;
  description: string;
  content: string;
  imgSrc: string;
  index: string;
  techStack?: string[];
};

const WorkExperienceItem = ({
  date,
  description,
  content,
  imgSrc,
  index,
  techStack = [],
}: Props) => {
  return (
    <div className='group relative flex gap-x-5'>
      <div className='relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700'>
        <div className='relative z-10 size-10 flex justify-center items-center'>
          {/* eslint-disable @next/next/no-img-element */}
          <img className='w-10 h-10 rounded-full' src={imgSrc} alt={index} />
        </div>
      </div>

      <div className='grow pb-8 group-last:pb-0'>
        <h3 className='mb-1 text-xs text-gray-600 dark:text-neutral-400'>
          {date}
        </h3>

        <p className='font-semibold text-sm text-gray-800 dark:text-neutral-200'>
          {description}
        </p>

        <p className='mt-1 text-sm text-gray-600 dark:text-neutral-400'>
          {content}
        </p>

        <p className='mt-2 text-xs italic font-semibold flex gap-2 flex-wrap'>
          {techStack.map((tool) => (
            <span
              key={tool}
              className='bg-gray-700 px-3 py-1 rounded-full text-xs font-semibold'
            >
              {tool}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default WorkExperienceItem;
