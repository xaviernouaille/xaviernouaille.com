import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Xavier Nouaille | Développeur fullstack',
  description:
    'Développeur fullstack passionné de Javascript originaire de France. Je suis intéressé par React, Node & Typescript.',
};

const Page = () => {
  return (
    <div className='md:mt-36 mt-28'>
      <p className='uppercase'>Hello, je suis Xavier Nouaille</p>
      <h1>
        Développeur fullstack passionné de Javascript originaire de France.{' '}
        <span className='disabled'>
          Je suis intéressé par React, Node & Typescript.
        </span>
      </h1>

      <div id='about' className='mt-32 md:mt-44'>
        <h3>A propos</h3>
        <p>
          Ingénieur et développeur fullstack formé à{' '}
          <span className='highlight'>Epitech Paris</span>, je propose mes
          compétences pour concevoir des applications web robustes, performantes
          et de haute qualité.
          <br />
          <br />
          Avec une expérience de plus de 5 ans dans le développement fullstack,
          j{"'"}ai travaillé en collaboration avec des{' '}
          <span className='highlight'>équipes</span> de 5 à 10 développeurs sur
          des projets d{"'"}envergure significative. Mon parcours a débuté avec
          des projets personnels, évoluant rapidement vers des collaborations
          professionnelles.
          <br />
          <br />J{"'"}ai eu l{"'"}opportunité de travailler sur des projets
          variés, comme chez <span className='highlight'>Offeaze</span> ou chez{' '}
          <span className='highlight'>DialOnce</span>. Grâce à ces expériences
          et à ma motivation, j{"'"}ai acquis une solide et riche expérience en
          développement web et en devops.
        </p>
      </div>

      <div id='career' className='mt-36'>
        <h3>Expériences</h3>
        <div className='flex flex-col space-y-3 md:space-y-2'>
          <div>
            <p className='highlight font-bold uppercase pb-0 small'>DialOnce</p>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
              <p className='pb-0'>Développer FullStack & DevOPS</p>
              <p>05/2022 - Aujourd{"'"}hui</p>
            </div>
          </div>
          <div>
            <p className='highlight font-bold uppercase pb-0 small'>Offeaze</p>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
              <p className='pb-0'>Développer FrontEnd</p>
              <p>05/2022 - Aujourd{"'"}hui</p>
            </div>
          </div>
          <div>
            <p className='highlight font-bold uppercase pb-0 small'>
              Freelance
            </p>
            <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
              <p className='pb-0'>Développer FrontEnd</p>
              <p>08/2021 - Aujourd{"'"}hui</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
