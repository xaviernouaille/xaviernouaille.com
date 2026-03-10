import { Metadata } from 'next/types';
import { Infos, Map, Experiences, Degrees } from '@/components';

export const metadata: Metadata = {
  title: 'Xavier Nouaille | Développeur Fullstack',
  description:
    'Développeur fullstack avec une forte appétence pour le DevOps, collaborant avec des entreprises pour concevoir des solutions performantes et scalables.',
  keywords: 'Développeur, Fullstack, DevOps, Xavier Nouaille',
};

function HomePage() {
  return (
    <div className='flex flex-col gap-10 sm:gap-20'>
      <div className='animate-fade-in-up fade-delay-1'>
        <Infos />
      </div>
      <div className='animate-fade-in-up fade-delay-2'>
        <Map />
      </div>
      <div className='animate-fade-in-up fade-delay-4'>
        <Experiences />
      </div>
      <div className='animate-fade-in-up fade-delay-5'>
        <Degrees />
      </div>
    </div>
  );
}

export default HomePage;
