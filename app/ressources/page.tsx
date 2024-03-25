import { SOURCES } from '@/constants/sources';
import { ChevronRight } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Xavier Nouaille | Développeur fullstack',
  description: 'Les articles que je trouve interessant',
};

type Sources = {
  url: string;
  date: string;
  title: string;
  tags: string[];
};

const renderSources = (sources: Sources[]) => {
  return sources.map(({ url, date, title, tags }, i) => (
    <Link
      href={url}
      target='_blank'
      className='hover:scale-[1.02] transition-all ease-in'
      key={i}
    >
      <div className='mt-3'>
        <p className='highlight font-bold uppercase pb-0 small mb-2 md:mb-0'>
          {title}
        </p>
        <div className='flex flex-col'>
          <p className='small py-0 mb-2'>{date}</p>
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
        <span className='font-bold'>Ressources</span>
      </div>
      <p className='my-4 md:mr-16 mb-28'>
        Voici une sélection d{"'"}articles, de vidéos et autres qui ont captivé
        mon intérêt, organisée selon la date à laquelle je les ai découverts.
        Les thèmes abordés varient, incluant le DevOps et le développement web.
        De nouveaux articles sont périodiquement ajoutés à cette liste.
      </p>

      <div className='grid grid-cols-1 gap-8 mt-16 mb-20'>
        {renderSources(SOURCES)}
      </div>
    </div>
  );
};

export default Page;
