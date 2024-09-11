import ThemeSwitcher from './components/ThemeSwitcher';
import { projects } from './constants';

const Home = () => {
  return (
    <>
      <section className='mt-32 container pb-14 border-b border-slate-300 mb-14'>
        <div className='flex space-x-6 items-center mb-6'>
          <img
            className='w-20 h-20 rounded-full'
            src='https://media.licdn.com/dms/image/v2/D4E03AQG9WfSmyJRX1w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723508921407?e=1731542400&v=beta&t=Ho4p7LwvnWMufmdLRhWAB5PK-QS20zqU_sulKX9Zxf0'
            alt=''
          />
          <div>
            <h1 className='font-medium text-4xl text-slate-950'>
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
        <a className='group bg-slate-950 hover:bg-slate-800 transition-colors inline-block mt-8 font-mono text-xs font-semibold rounded-full px-8 py-3 text-white'>
          More Information{' '}
          <span className='inline-block group-hover:translate-x-2 transition-transform'>
            →
          </span>
        </a>
      </section>

      <section className='max-w-[850px] mx-auto mt-16'>
        <div className='flex flex-col space-y-10'>
          {projects.map((project) => (
            <div
              className='bg-slate-100 rounded-2xl p-4 flex'
              key={project.index}
            >
              <div className='w-full'>
                <img
                  className='rounded-2xl'
                  src={`/projects/${project.name}.png`}
                  alt={project.company}
                />
              </div>
              <div className='w-full p-6'>
                <h3 className='text-xl font-medium'>{project.company}</h3>
                <p className='text-slate-600 font-light'>
                  {project.description} - {project.date}
                </p>
                <p className='mt-2 text-sm font-light'>
                  {project.tasks.substring(0, 150)}...
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className='mt-32 container mx-auto pb-12'>
        <ul className='flex space-x-5 items-center mb-5'>
          <li>+33 7 78 38 91 34</li>
          <li>xavier.nouaille@pm.me</li>
          <li>Linkedin</li>
          <li>GitHub</li>
          <li>Malt</li>
        </ul>
        <p className='text-slate-400 opacity-70 font-light text-left'>
          Construit avec NextJS, ShadcnUI & Tailwind. Hebergé sur AWS 💛
        </p>
      </section>
    </>
  );
};

export default Home;
