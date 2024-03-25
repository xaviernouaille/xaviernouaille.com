import { PROJECTS } from '@/constants/projects';
import { ChevronRight } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Xavier Nouaille | Développeur fullstack',
  description:
    'Les projets sur lesquels j’ai travaillé ces dernières années 👷',
};

type Project = {
  url: string;
  company: string;
  description: string;
  content: string;
  date: string;
};

const renderProjects = (projects: Project[]) => {
  return projects.map(({ content, url, company, description, date }, i) => (
    <Link
      href={url}
      target='_blank'
      className='hover:scale-[1.02] transition-all ease-in'
      key={i}
    >
      <div className='mt-3'>
        <p className='highlight font-bold uppercase pb-0 small mb-2 md:mb-0'>
          {company}
        </p>
        <div className='flex flex-col'>
          <p className='py-0 mb-1'>{description}</p>
          <p className='small py-0 mb-2'>{date}</p>
          <p className='opacity-60 text-sm'>{content}</p>
        </div>
      </div>
    </Link>
  ));
};

const Page = () => {
  return (
    <div className='mt-28'>
      <div className='flex space-x-1 mb-12 text-md items-center uppercase'>
        <span className='disabled'>Accueil</span>
        <ChevronRight className='h-4 w-4 disabled' />
        <span className='font-bold'>Experiences</span>
      </div>
      <p className='my-4 md:mr-32 mb-28'>
        Les projets <span className='highlight'>Freelance</span> sur lesquels j
        {"'"}ai travaillé ces dernières. années. Sur la grande majorité de mes
        projets, j{"'"}ai travaillé en tant que développeur{' '}
        <span className='highlight'>Frontend</span>.
        <br />
        <br />
        Vous pouvez retrouver l{"'"}ensemble de mes contributions sur mon{' '}
        <a
          className='highlight'
          target='_blank'
          href='https://github.com/xaviernouaille'
        >
          Github
        </a>
        .
      </p>

      <div className='grid grid-cols-1 gap-8 mt-16 mb-20'>
        {renderProjects(PROJECTS)}
      </div>
    </div>
  );
};

export default Page;
