import { Metadata } from 'next/types';
import { Infos, Map, Contact, Experiences, Degrees } from '@/components';

export const metadata: Metadata = {
  title: 'Xavier Nouaille | Développeur Fullstack',
  description:
    'Développeur fullstack avec une forte appétence pour le DevOps, collaborant avec des entreprises pour concevoir des solutions performantes et scalables.',
  keywords: 'Développeur, Fullstack, DevOps, Xavier Nouaille',
};

function HomePage() {
  return (
    <div className='p-6 pt-10 py-20 mx-auto max-w-[700px] flex flex-col gap-10 md:gap-16 lg:gap-20'>
      <Infos />

      <Map />

      <Contact />

      <Experiences />

      <Degrees />
    </div>
  );
}

export default HomePage;
