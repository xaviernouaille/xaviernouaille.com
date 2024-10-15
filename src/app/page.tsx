import { Metadata } from 'next/types';
import { articles, projects } from './constants';

export const metadata: Metadata = {
  title: 'Xavier Nouaille | Développeur Fullstack',
  description:
    'Développeur fullstack avec une forte appétence pour le DevOps, collaborant avec des entreprises pour concevoir des solutions performantes et scalables.',
  keywords: 'Développeur, Fullstack, DevOps, Xavier Nouaille',
};

const Home = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='container text-[#333]'>
      {/* <ThemeSwitcher /> */}
      <section className='mt-14 py-2'>
        <div className='flex flex-col md:flex-row md:space-x-6 md:items-center mb-6'>
          <img
            className='w-20 h-20 rounded-full mb-2 md:mb-0 hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer'
            src='https://media.licdn.com/dms/image/v2/D4E03AQECl4VM6fM72Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727639353667?e=1733356800&v=beta&t=ohqxp5K_G4nRrqS9z9pJ123A5HIFwyBTziOKXQO3mYI'
            alt='Xavier Nouaille'
          />
          <div>
            <h1 className='font-medium text-3xl sm:text-4xl'>
              <span className='mb-2'>🙋‍♂️ Bonjour, je suis Xavier</span>
              <span className='block text-muted-foreground font-light text-xl'>
                Développeur full-stack freelance.
              </span>
            </h1>
          </div>
        </div>
      </section>
      <hr className='divide-solid divide-y w-full divide-muted-foreground my-4' />
      <section className='mx-auto pt-6'>
        <p className='pb-8 font-light'>
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

        <ul>
          <li>
            <a className='hover:underline' href='tel:+33778389134'>
              +33 7 78 38 91 34
            </a>
          </li>
          <li>
            <a className='hover:underline' href='mailto:xavier.nouaille@pm.me'>
              xavier.nouaille@pm.me
            </a>
          </li>
          <li>
            <a
              className='hover:underline'
              href='https://www.linkedin.com/in/xavier-nouaille/'
            >
              linkedin.com/in/xavier-nouaille
            </a>
          </li>
        </ul>
      </section>

      <section className='mt-16 pb-6'>
        <div className='flex space-x-6 items-center w-full'>
          <div className='w-full'>
            <h2 className='font-medium  text-2xl p-0 mb-4'>Expériences</h2>
            <div className='flex flex-col divide-solid divide-y w-full divide-muted-foreground'>
              {projects.map((project) => (
                <div className='py-6 flex justify-between' key={project.index}>
                  <div>
                    <a
                      target='_blank'
                      className='hover:underline'
                      href={project.url}
                    >
                      <h3 className='  font-medium'>{project.company}</h3>
                    </a>
                    <p className='font-light'>{project.description}</p>
                  </div>
                  <div>
                    <p className='mt-2 text-[0.9rem] font-light text-right'>
                      {project.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className='mt-16 pb-6'>
        <div className='flex space-x-6 items-center w-full'>
          <div className='w-full'>
            <h2 className='font-medium  text-2xl p-0 mb-4'>
              Derniers articles
            </h2>
            <div className='flex flex-col divide-solid divide-y w-full divide-muted-foreground'>
              {articles.map((article) => (
                <a target='_blank' key={article.title} href={article.url}>
                  <div className='py-6'>
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

      <section className='pb-10 pt-10 font-light text-sm'>
        Copyright ©{currentYear}, Xavier Nouaille
      </section>
    </div>
  );
};

export default Home;
