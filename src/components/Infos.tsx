import { GoLocation } from 'react-icons/go';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

function Infos() {
  return (
    <div className='flex flex-col gap-4'>
      {/* Hero — même carte que Parcours / Certifications */}
      <section className='rounded-xl border border-white/5 bg-white/[0.01] px-4 sm:px-5 py-4 sm:py-5'>
        <div className='flex items-center md:gap-6 gap-4'>
          <div>
            <img
              src='./xn.jpeg'
              alt='Xavier Nouaille'
              className='md:w-22 md:h-22 w-20 h-20 rounded-full border border-white/10'
            />
          </div>
          <div>
            <h1 className='text-3xl font-bold leading-tight tracking-tight text-primary'>
              Xavier
            </h1>
            <p className='text-sm sm:text-base text-tertiary max-w-md'>
              Senior Backend Developer.
            </p>
          </div>
        </div>
        <div className='mt-4 flex flex-wrap items-center gap-2 text-xs sm:text-[0.8rem] text-tertiary'>
          <span className='inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1'>
            <GoLocation className='text-tertiary' />
            Paris, France · Remote EU
          </span>
          <a
            href='https://github.com/xaviernouaille'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1 hover:text-secondary'
          >
            <FiGithub />
            @xaviernouaille
          </a>
          <a
            href='https://www.linkedin.com/in/xavier-nouaille/'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-1 rounded-full border border-white/10 px-3 py-1 hover:text-secondary'
          >
            <FiLinkedin />
            /in/xavier-nouaille
          </a>
        </div>
      </section>

      {/* Section Informations — même style de carte */}
      <section className='rounded-xl border border-white/5 bg-white/[0.01] px-4 sm:px-5 py-4 sm:py-5'>
        <div className='space-y-1 mb-4'>
          <p className='section-label mb-2'>Informations</p>
          <h2 className='section-title text-sm sm:text-base'>À propos</h2>
        </div>
        <div className='space-y-3 text-[0.9rem] sm:text-[0.95rem] text-secondary'>
          <p>
            Développeur full-stack freelance, je conçois et développe des
            applications web robustes, performantes et évolutives.
          </p>
          <p>
            J’interviens sur des projets à forts enjeux techniques et métiers
            dans des environnements exigeants, avec des références dans la
            fintech (Lemonway), les réseaux sociaux (Republike), l’immobilier
            (Offeaze), l’assurance (Garance), ainsi que dans la finance et
            l’événementiel (Naboo).
          </p>
          <p>
            Je mets un accent particulier sur la qualité globale des systèmes :
            architecture logicielle (hexagonale, microservices), lisibilité et
            maintenabilité du code, tests automatisés, pipelines CI/CD,
            observabilité et scalabilité des plateformes sur le long terme.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Infos;
