import { Metadata } from 'next/types';
// import { projects, studies } from './constants';
import { FiGlobe, FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { projects, studies } from './constants';

export const metadata: Metadata = {
  title: 'Xavier Nouaille | Développeur Fullstack',
  description:
    'Développeur fullstack avec une forte appétence pour le DevOps, collaborant avec des entreprises pour concevoir des solutions performantes et scalables.',
  keywords: 'Développeur, Fullstack, DevOps, Xavier Nouaille',
};

const Home = () => {
  return (
    <div className='py-4 px-2 md:p-12'>
      <div className='text-white font-sans px-6 py-10 space-y-10 container mx-auto'>
        {/* Header */}
        <header className='space-y-4'>
          <div className='flex justify-between'>
            <div className='flex items-center space-x-3'>
              <div className='bg-white text-black p-0.5 rounded-full font-bold text-sm'>
                <img
                  className='rounded-full h-12 w-12'
                  src='https://media.licdn.com/dms/image/v2/D4E03AQEBgtVkhJXwXw/profile-displayphoto-shrink_800_800/B4EZOWt_FRHEAc-/0/1733400458738?e=1750291200&v=beta&t=2iO53G5zMJaGdN7WPMx-DSFH3LNjI6AgkhedmdoNSK0'
                  alt={'Xavier Nouaille'}
                />
              </div>
              <div>
                <h1 className='text-lg font-extrabold'>Xavier Nouaille</h1>
                <p className='text-gray-400 text-xs -mt-1'>
                  Développeur FullStack
                </p>
              </div>
            </div>
            <div className='flex items-center space-x-4 text-xl text-gray-300'>
              <a target='_blank' href='mailto:xavier.nouaille@pm.me'>
                <FiMail />
              </a>
              <a
                href='https://www.linkedin.com/in/xavier-nouaille/'
                target='_blank'
              >
                <FaLinkedin />
              </a>
              <a href='https://github.com/xaviernouaille' target='_blank'>
                <FaGithub />
              </a>
              <a
                href='https://www.malt.fr/profile/xaviernouaille'
                target='_blank'
              >
                <FiGlobe />
              </a>
            </div>
          </div>
          <p className='text-white mt-10 leading-6 text-[1.1rem]'>
            Développeur fullstack{' '}
            <span className='underline underline-offset-2 font-semibold'>
              freelance
            </span>
            , je conçois des apps web robustes, évolutives, performantes et
            maintenables avec une approche craft et architecture hexagonale. 🚀
          </p>
        </header>

        {/* Compétences */}
        <section>
          <h2 className='text-xl font-semibold mb-5'>Compétences</h2>
          <div className='flex flex-wrap gap-2'>
            {[
              'NestJS',
              'ExpressJS',
              'Fastify',
              'TypeScript',
              'NodeJS',
              'ReactJS',
              'NextJS',
              'TailwindCSS',
              'PostgreSQL',
              'MongoDB',
              'Docker',
              'Kubernetes',
              'Terraform',
              'AWS',
            ].map((skill) => (
              <span
                key={skill}
                className='bg-gray-700 px-3 py-1 rounded-full text-xs font-semibold'
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Expérience */}
        <section>
          <h2 className='text-xl font-semibold mb-5'>
            Expérience Professionelle
          </h2>
          <div className='divide-y divide-gray-700'>
            {projects.map((exp) => (
              <div key={exp.company} className='flex justify-between py-4'>
                <div className='flex items-center space-x-3'>
                  <div className='bg-white text-black p-0.5 rounded-full font-bold text-sm'>
                    <img
                      className='rounded-full h-10 w-10'
                      src={exp.logo}
                      alt=''
                    />
                  </div>
                  <div>
                    <p className='font-semibold text-sm'>{exp.company}</p>
                    <p className='text-gray-400 text-xs'>{exp.description}</p>
                  </div>
                </div>
                <p className='text-gray-400 text-xs font-bold'>{exp.date}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className='text-xl font-semibold mb-5'>Formation</h2>
          <div className='space-y-4'>
            {studies.map((study) => (
              <div key={study.index} className='flex justify-between'>
                <div className='flex items-center space-x-3'>
                  <div className='bg-white text-black p-0.5 rounded-full font-bold text-sm'>
                    <img
                      className='rounded-full h-10 w-10'
                      src={study.logo}
                      alt=''
                    />
                  </div>
                  <div>
                    <p className='font-semibold text-sm'>{study.school}</p>
                    <p className='text-gray-400 text-xs max-w-[210px] md:max-w-none'>
                      {study.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
