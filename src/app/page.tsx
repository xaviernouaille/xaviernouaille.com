import { Metadata } from 'next/types';
import { articles, projects, studies } from './constants';
// import { FaEnvelope, FaLinkedin } from 'react-icons/fa6';
// import { FaGithub } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Xavier Nouaille | Développeur Fullstack',
  description:
    'Développeur fullstack avec une forte appétence pour le DevOps, collaborant avec des entreprises pour concevoir des solutions performantes et scalables.',
  keywords: 'Développeur, Fullstack, DevOps, Xavier Nouaille',
};

const Home = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='text-[#333]'>
      {/* <ThemeSwitcher /> */}

      <div style={{ backgroundColor: 'rgb(14, 14, 26)' }}>
        <section className='container text-white py-16 px-6 md:px-0'>
          <div className='flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row md:items-center'>
            <img
              className='h-24 w-24 md:w-28 md:h-28 rounded-full hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer'
              src='https://media.licdn.com/dms/image/v2/D4E03AQEBgtVkhJXwXw/profile-displayphoto-shrink_800_800/B4EZOWt_FRHEAc-/0/1733400458738?e=1738800000&v=beta&t=IkIWdqUiSyM7ngJ61guu49iiRElv7fo5Axe300YGg3Y'
              alt='Xavier Nouaille'
            />
            <div>
              <h1 className='font-medium text-3xl sm:text-4xl mb-1'>
                Bonjour, je suis Xavier
              </h1>
              <h2 className='text-xl text-muted-foreground'>
                Développeur full-stack freelance.
              </h2>
            </div>
          </div>
        </section>
      </div>

      <section className='container mx-auto pt-10 px-6 md:px-0'>
        <p className='font-light'>
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

      <section className='container mt-16 pb-10 md:px-0'>
        <div className='flex space-x-6 items-center w-full'>
          <div className='w-full'>
            <div className='p-6 w-full divide-muted-foreground border rounded-md'>
              <h2 className='font-semibold text-2xl p-0 mb-6'>Expériences</h2>
              <div className='flex flex-col space-y-10'>
                {projects.map((project) => (
                  <div
                    className='flex flex-col md:flex-row justify-between'
                    key={project.index}
                  >
                    <div className='flex space-x-4 items-center'>
                      <img
                        src={project.logo}
                        alt={project.company}
                        className='w-12 h-12 rounded-full shadow-md object-cover'
                      />
                      <div>
                        <a target='_blank' href={project.url}>
                          <h3 className='  font-medium'>{project.company}</h3>
                        </a>
                        <p className='font-light'>{project.description}</p>
                      </div>
                    </div>
                    <div>
                      <p className='mt-2 text-[0.9rem] font-light text-right'>
                        {project.years}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <h2 className='font-semibold text-2xl p-0 mb-6 mt-12'>
                Formations
              </h2>
              <div className='flex flex-col space-y-10'>
                {studies.map((study) => (
                  <div
                    className='flex flex-col md:flex-row justify-between'
                    key={study.index}
                  >
                    <div className='flex space-x-4 items-center'>
                      <img
                        src={study.logo}
                        alt={study.school}
                        className='w-12 h-12 rounded-full shadow-md'
                      />
                      <div>
                        <a href={study.url} target='_blank'>
                          <h3 className='  font-medium'>{study.school}</h3>
                        </a>
                        <p className='font-light'>{study.description}</p>
                      </div>
                    </div>
                    <div>
                      <p className='mt-2 text-[0.9rem] font-light text-right'>
                        {study.years}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='container pt-10 md:px-0'>
        <div className='flex space-x-6 items-center w-full'>
          <div className='w-full'>
            <h2 className='font-semibold text-2xl p-0 mb-4'>
              Derniers articles
            </h2>
            <div className='flex flex-col border p-6 rounded-md'>
              {articles.map((article) => (
                <a target='_blank' key={article.title} href={article.url}>
                  <div>
                    <div>
                      <h3 className='  font-medium'>{article.title}</h3>
                      <p className='font-light'>{article.description}</p>
                    </div>
                    <div className='w-1/'>
                      <p className='mt-2 text-[0.9rem] font-light'>
                        {article.date}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='text-center container pb-10 pt-20 font-light text-sm'>
        Copyright ©{currentYear}, Xavier Nouaille
        {/* `<div className='opacity-80 flex justify-center space-x-2 mt-3'>
          <a
            href='https://www.linkedin.com/in/xavier-nouaille/'
            target='_blank'
          >
            <FaLinkedin className='w-5 h-5' />
          </a>

          <a href='https://github.com/xaviernouaille' target='_blank'>
            <FaGithub className='w-5 h-5' />
          </a>

          <a
            href='
          mailto:xavier.nouaille@protonmail.com'
          >
            <FaEnvelope className='w-5 h-5' />
          </a>
        </div>` */}
      </section>
    </div>
  );
};

export default Home;
