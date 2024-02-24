import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Xavier Nouaille | Développeur fullstack',
  description:
    'Les projets sur lesquels j’ai travaillé ces dernières années 👷',
};

type Project = {
  imageSrc: string;
  company: string;
  description: string;
  date: string;
};

const projects = [
  {
    imageSrc: 'dialonce.png',
    company: 'dialonce.ai',
    description: 'Développer FullStack & DevOPS',
    date: '05/2021 - Aujourd’hui',
  },
  {
    imageSrc: 'orizons.png',
    company: 'orizons.io',
    description: 'Développer FrontEnd',
    date: '01/2024 - 02/2024',
  },
  {
    imageSrc: 'keeze.png',
    company: 'keeze.co',
    description: 'Développer FrontEnd',
    date: '12/2023 - 02/2024',
  },
  {
    imageSrc: 'offeaze.png',
    company: 'offeze.co (fermé)',
    description: 'Développer FrontEnd',
    date: '12/2023 - 02/2024',
  },
];

const renderProjects = (projects: Project[]) => {
  return projects.map(({ imageSrc, company, description, date }, i) => (
    <Link
      className='hover:scale-[1.02] transition-all ease-in'
      key={i}
      href='#'
    >
      <div
        className='bg-cover bg-center rounded-lg shadow-md md:h-64 lg:h-72 sm:h-52 h-44'
        style={{ backgroundImage: `url(/${imageSrc})` }}
      ></div>
      <div className='mt-3'>
        <p className='highlight font-bold uppercase pb-0 small mb-1 md:mb-0'>
          {company}
        </p>
        <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
          <p className='pb-0'>{description}</p>
          <p>{date}</p>
        </div>
      </div>
    </Link>
  ));
};

const Page = () => {
  return (
    <div className='mt-28'>
      <h1 className='mb-2'>Contributions</h1>
      <p className='my-4 md:mr-20'>
        Les projets <span className='highlight'>Freelance</span> sur lesquels j
        {"'"}ai travaillé ces dernières. années. Sur la grande majorité de mes
        projets, j{"'"}ai travaillé en tant que développeur{' '}
        <span className='highlight'>Frontend</span>.
        <br />
        <br />
        Vous pouvez retrouver l{"'"}ensemble de mes contributions sur mon{' '}
        <span className='highlight'>Github</span>.
      </p>

      <div className='flex flex-col space-y-12 md:space-y-20 mt-20'>
        {renderProjects(projects)}
      </div>
      {/* 
      <h3 className='mt-12 text-[18px] highlight flex space-x-2'>
        Disponible en freelance
      </h3> */}
    </div>
  );
};

export default Page;
