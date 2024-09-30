import Link from 'next/link';
import { articles, projects } from './constants';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Xavier Nouaille | Développeur Fullstack',
  description:
    'Développeur fullstack avec une forte appétence pour le DevOps, collaborant avec des entreprises pour concevoir des solutions performantes et scalables.',
  keywords: 'Développeur, Fullstack, DevOps, Xavier Nouaille',
};

const Home = () => {
  return (
    <>
      <section className='mt-28 container md:px-0 pb-14 border-b border-slate-300 mb-14'>
        <div className='flex flex-col md:flex-row md:space-x-5 md:items-center mb-6'>
          {/* eslint-disable-next-line */}
          <img
            className='w-20 h-20 rounded-full mb-2 md:mb-0'
            src='https://media.licdn.com/dms/image/v2/D4E03AQECl4VM6fM72Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727639353667?e=1733356800&v=beta&t=ohqxp5K_G4nRrqS9z9pJ123A5HIFwyBTziOKXQO3mYI'
            alt='Xavier Nouaille'
          />
          <div>
            <h1 className='font-medium text-3xl md:text-4xl text-slate-950'>
              Bonjour !
              <span className='block text-slate-500 font-light text-2xl'>
                Je suis Xavier Nouaille, développeur full-stack.
              </span>
            </h1>
          </div>
        </div>
        <p className='text-slate-700 text-lg md:text-xl leading-normal font-light'>
          Développeur fullstack avec une forte appétence pour le DevOps,
          collaborant avec des entreprises pour concevoir des solutions
          performantes et scalables.
        </p>
        <Link
          href='/about'
          className='relative group bg-slate-950 hover:opacity-70 transition-colors inline-block mt-8 font-mono text-xs font-semibold rounded-full px-8 py-3 text-white'
        >
          Disponible pour des missions
          <span className='absolute right-2 -top-1 h-2.5 w-2.5 bg-green-500 rounded-full animate-pulse'></span>
        </Link>
      </section>

      <section className='max-w-[1000px] px-6 md:px-0 mx-auto mt-14'>
        <div className='container px-0 mb-10'>
          <h2 className='text-2xl font-medium'>Mes projets</h2>
          <p className='text-slate-700 font-light mt-3 text-lg'>
            Vous trouverez ci-dessous une sélection de projets récents sur
            lesquels j{"'"}ai travaillé.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
          {projects.map((project) => (
            <Link
              href={project.url}
              target='_blank'
              className='bg-slate-100 rounded-2xl p-6 md:p-8 flex flex-col hover:bg-[#f0f2f5] ease-in-out duration-200'
              key={project.index}
            >
              <div className='w-full'>
                {/* eslint-disable-next-line */}
                <img
                  className='rounded-2xl'
                  src={`/projects/${project.index}.png`}
                  alt={project.company}
                />
              </div>
              <div className='w-full pt-6'>
                <h3 className='text-xl font-medium'>{project.company}</h3>
                <p className='text-slate-600'>
                  {project.description} - {project.date}
                </p>
                <p className='mt-2 text-base font-light text-slate-500'>
                  {project.tasks.substring(0, 100)}...
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className='mt-20 container md:px-0'>
        <h2 className='text-2xl font-medium'>Mes derniers articles</h2>
        <div className='mt-8 flex flex-col divide-y'>
          {articles.map((article) => (
            <Link
              target='_blank'
              className='flex flex-col space-y-3 hover:opacity-75'
              key={article.title}
              href={article.url}
            >
              <h3 className='text-xl md:text-2xl font-medium'>
                {article.title}
              </h3>
              <p className='font-mono text-thin text-sm text-slate-500'>
                {article.date}
              </p>
              <p className='font-light text-slate-700 text-base'>
                {article.description}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
