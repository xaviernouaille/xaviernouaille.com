import { FiGithub, FiLinkedin } from 'react-icons/fi';

function Infos() {
  return (
    <div className='flex flex-col'>
      {/* Hero : photo + titre + sous-titre + liens */}
      <section className='flex flex-col sm:flex-row sm:items-start gap-8 sm:gap-10'>
        <div className='min-w-0 px-12 pt-6'>
          <h1 className='text-4xl font-bold tracking-tight text-zinc-100'>
            Xavier Nouaille
          </h1>
          <p className='mt-4 text-lg sm:text-xl text-zinc-400'>
            Senior Backend Developer. Paris, France · Remote EU
          </p>
          <div className='mt-6 flex flex-wrap items-center gap-5 text-base text-zinc-500'>
            <a
              href='https://github.com/xaviernouaille'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-zinc-300 transition-colors inline-flex items-center gap-1.5'
            >
              <FiGithub /> @xaviernouaille
            </a>
            <a
              href='https://www.linkedin.com/in/xavier-nouaille/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-zinc-300 transition-colors inline-flex items-center gap-1.5'
            >
              <FiLinkedin /> /in/xavier-nouaille
            </a>
          </div>
        </div>
      </section>

      <p className='py-20 font-mono'>---</p>

      {/* À propos */}
      <section className='pt-10'>
        <p className='section-label mb-4'>À propos</p>
        <div className='space-y-5 text-[1.05rem] sm:text-lg text-zinc-400 leading-relaxed'>
          <p>
            Développeur <span className='font-medium text-white'>full-stack</span> freelance, je conçois et développe des
            applications web <span className='font-medium text-white'>robustes</span>, <span className='font-medium text-white'>performantes</span> et <span className='font-medium text-white'>évolutives</span>.
            J&apos;interviens sur des projets à <span className='font-medium text-white'>forts enjeux techniques et métiers</span> dans des environnements exigeants, avec des références dans
            la fintech (Lemonway), les réseaux sociaux (Republike),
            l&apos;immobilier (Offeaze), l&apos;assurance (Garance), ainsi que
            dans la finance et l&apos;événementiel (Naboo).
          </p>
          <p>
            Je mets un accent particulier sur la <span className='font-medium text-white'>qualité globale des systèmes</span> :
            <span className='font-medium text-white'>architecture logicielle</span> (<span className='font-medium text-white'>hexagonale</span>, <span className='font-medium text-white'>microservices</span>), <span className='font-medium text-white'>lisibilité</span> et
            <span className='font-medium text-white'>maintenabilité</span> du code, <span className='font-medium text-white'>tests automatisés</span>, pipelines <span className='font-medium text-white'>CI/CD</span>,
            <span className='font-medium text-white'>observabilité</span> et <span className='font-medium text-white'>scalabilité</span> des plateformes sur le long terme.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Infos;
