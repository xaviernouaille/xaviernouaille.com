import { projects } from '../constants';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Xavier Nouaille | À propos',
  description:
    'A propos | Ingénieur et développeur fullstack formé à Epitech Paris, je propose mes compétences pour concevoir des applications web robustes, performantes et de haute qualité.',
  keywords: 'Développeur, Fullstack, DevOps, Xavier Nouaille',
};

const Page = () => {
  return (
    <>
      <section className='mt-24 container pb-6 px-6 md:px-0 border-b border-slate-300'>
        <div className='flex space-x-6 items-center'>
          <div>
            <h1 className='font-medium text-3xl md:text-4xl text-slate-950 p-0'>
              A propos
            </h1>
          </div>
        </div>
      </section>
      <section className='container px-6 md:px-0 mx-auto pt-6'>
        <p className='pb-8 prose prose-lg font-light'>
          Ingénieur et développeur fullstack formé à Epitech Paris, je propose
          mes compétences pour concevoir des applications web robustes,
          performantes et de haute qualité.
          <br />
          <br />
          Avec une expérience de plus de 5 ans dans le développement fullstack,
          j{"'"}ai travaillé en collaboration avec des équipes de 5 à 10
          développeurs sur des projets d{"'"}envergure significative. Mon
          parcours a débuté avec des projets personnels, évoluant rapidement
          vers des collaborations professionnelles.
          <br />
          <br />J{"'"}ai eu l{"'"}opportunité de travailler sur des projets
          variés, comme chez Offeaze, Keeze, Orizons, Republike ou encore chez{' '}
          DialOnce. Grâce à ces expériences et à ma motivation, j{"'"}ai acquis
          une solide et riche expérience en développement web et en devops.
        </p>
      </section>

      <section className='mt-16 container pb-6 px-6 md:px-0 '>
        <div className='flex space-x-6 items-center w-full'>
          <div className='w-full'>
            <h2 className='font-medium text-2xl text-slate-950 p-0 mb-8'>
              Expériences
            </h2>
            <div className='flex flex-col divide-solid divide-y w-full divide-slate-300'>
              {projects.map((project) => (
                <div className='py-6 flex justify-between' key={project.index}>
                  <div>
                    <h3 className='text-xl font-medium'>{project.company}</h3>
                    <p className='text-slate-800 font-light'>
                      {project.description}
                    </p>
                  </div>
                  <div>
                    <p className='mt-2 text-[0.9rem] font-light'>
                      {project.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Page;
