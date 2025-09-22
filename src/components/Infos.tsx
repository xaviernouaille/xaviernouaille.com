import { PROFILE_IMG_SRC } from '@/app/constants';

function Infos() {
  return (
    <div>
      <img
        className='rounded-full h-18 w-18 mb-6'
        src={PROFILE_IMG_SRC}
        alt='Xavier Nouaille'
      ></img>
      <div className='prose text-primary prose-a:text-blue-600 prose-strong:text-blue-600'>
        <p>
          Hey, Je suis Xavier Nouaille,{' '}
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/xaviernouaille'
          >
            Développeur Backend Freelance
          </a>
          , basé en France. J{"'"}aide les entreprises à{' '}
          <strong>concevoir, développer et maintenir</strong> des applications
          web robustes et évolutives.
        </p>
        <p>
          Avec plus de 6 ans d{"'"}expérience dans le développement backend, je
          maîtrise des technologies telles que NestJS, ExpressJS, MongoDB,
          NextJS & Docker. Mon expertise inclut la création d{"'"}API RESTful,
          la gestion de bases de données, l{"'"}intégration de services tiers,
          la gestion de la CI/CD, ainsi que l{"'"}infrastructure via Terraform.
        </p>
        <p>
          En tant que freelance, je collabore avec des équipes pour transformer
          des idées en solutions concrètes. Je m{"'"}engage à fournir un code
          propre, bien documenté et optimisé pour la performance.
        </p>
        <p>
          Si vous cherchez un partenaire fiable pour vos projets backend, n{"'"}
          hésitez pas à me contacter. Je serais ravi de discuter de vos besoins
          et de voir comment je peux contribuer à votre succès.
        </p>
      </div>
    </div>
  );
}

export default Infos;
