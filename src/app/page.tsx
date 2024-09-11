import Link from 'next/link';
import { projects } from './constants';

const Home = () => {
  return (
    <>
      <section className='mt-28 container md:px-0 pb-14 border-b border-slate-300 mb-14'>
        <div className='flex flex-col md:flex-row md:space-x-6 md:items-center mb-6'>
          <img
            className='w-20 h-20 rounded-full mb-2 md:mb-0'
            src='https://media.licdn.com/dms/image/v2/D4E03AQG9WfSmyJRX1w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723508921407?e=1731542400&v=beta&t=Ho4p7LwvnWMufmdLRhWAB5PK-QS20zqU_sulKX9Zxf0'
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

      <section className='max-w-[850px] px-6 md:px-0 mx-auto mt-16'>
        <div className='flex flex-col space-y-10'>
          {projects.map((project) => (
            <div
              className='bg-slate-100 rounded-2xl p-5 flex flex-col md:flex-row'
              key={project.index}
            >
              <div className='w-full'>
                <img
                  className='rounded-2xl'
                  src={`/projects/${project.index}.png`}
                  alt={project.company}
                />
              </div>
              <div className='w-full p-6'>
                <h3 className='text-xl font-medium'>{project.company}</h3>
                <p className='text-slate-600 font-light'>
                  {project.description} - {project.date}
                </p>
                <p className='mt-2 text-[0.9rem] font-light'>
                  {project.tasks.substring(0, 150)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
