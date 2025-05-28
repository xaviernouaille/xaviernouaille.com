type Props = {
  imgSrc: string;
  index: string;
  date: string;
  description?: string;
  establishment?: string;
};

const EducationAndCertificationItem = ({
  imgSrc,
  index,
  date,
  description,
  establishment,
}: Props) => (
  <div className='p-4 border border-gray-200 rounded-lg dark:border-neutral-700'>
    {/* eslint-disable @next/next/no-img-element */}
    <img className='w-10 h-10 rounded-full mb-2' src={imgSrc} alt={index} />

    <h3 className='mb-1 text-xs text-gray-600 dark:text-neutral-400'>{date}</h3>

    <p className='font-semibold text-sm text-gray-800 dark:text-neutral-200'>
      {description}
    </p>

    <p className='mt-1 text-sm text-gray-600 dark:text-neutral-400'>
      {establishment}
    </p>
  </div>
);

export default EducationAndCertificationItem;
