import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Xavier Nouaille | Développeur fullstack',
  description:
    'Développeur fullstack passionné de Javascript originaire de France. Je suis intéressé par React, Node & Typescript.',
};

const Page = () => {
  return (
    <div className='py-6 prose dark:prose-invert mt-6'>
      <img
        src='https://dam.malt.com/5d5bbfe7-9a39-46f6-859f-e6a2c8183b55?gravity=face&func=face&face_margin=70&w=440&h=440&force_format=webp'
        className='h-20 w-20 rounded-full'
      />
      <h1 className='mb-2'>Bonjour 👋</h1>
      <p className='text-md font-mono my-4 text-slate-700 dark:text-slate-200 mr-10 opacity-70'>
        Je suis Xavier, développeur et passionné de Javascript originaire de
        France. Je suis intéressé par React, Node & Typescript.
      </p>
      <hr className='my-4' />
      <h2 className='mt-16 font-extrabold px-4'>À mon propos</h2>
      <p className='font-mono text-[14.5px] px-4 opacity-70'>
        Ingénieur et développeur fullstack formé à <b>Epitech</b> Paris, je
        propose mes compétences pour concevoir des applications web{' '}
        <b>robustes, performantes et de haute qualité.</b> Avec une expérience
        de plus de 5 ans dans le développement fullstack, j{"'"}ai travaillé en{' '}
        <b>collaboration</b> avec des équipes de 5 à 10 développeurs sur des
        projets d{"'"}envergure significative. Mon parcours a débuté avec des
        projets personnels, évoluant rapidement vers des collaborations
        professionnelles.
      </p>
      <h2 className='font-extrabold mt-12 px-4'>🧑‍💻 Disponible en freelance</h2>
    </div>
  );
};

export default Page;
