import { WORKS } from '@/app/constants';

function Experiences() {
  return (
    <div className='flex flex-col gap-4'>
      <header>
        <p className='section-label mb-2'>Parcours</p>
        <h2 className='section-title text-sm sm:text-base'>
          Expériences récentes
        </h2>
      </header>

      <div className='flex flex-col divide-y divide-white/5 rounded-xl border border-white/5 bg-white/[0.01]'>
        {WORKS.map((work) => (
          <a
            key={work.company}
            target='_blank'
            rel='noopener noreferrer'
            href={work.href}
            className='group py-5 sm:py-6 px-3.5 sm:px-4 hover:bg-white/[0.03] transition-colors'
          >
            <p className='text-[0.65rem] sm:text-[0.7rem] uppercase tracking-[0.22em] text-tertiary mb-2'>
              {work.techStack}
            </p>

            <div className='flex flex-col gap-1.5 sm:gap-2'>
              <div className='flex items-baseline justify-between gap-4'>
                <h3 className='text-base sm:text-lg font-semibold text-primary group-hover:text-white'>
                  {work.company}
                </h3>
                <span className='text-[0.7rem] sm:text-xs font-mono text-quaternary'>
                  {work.date}
                </span>
              </div>

              <p className='text-sm text-tertiary'>
                {work.position} · {work.location}
              </p>

              {work.summary && (
                <p className='mt-1.5 text-sm text-secondary'>{work.summary}</p>
              )}

              <div className='mt-3 flex flex-wrap items-center gap-2 text-[0.7rem] text-tertiary'>
                <span className='inline-flex items-center rounded-full border border-white/10 px-2.5 py-1 group-hover:border-white/30'>
                  Voir le site ↗
                </span>
                {work.kind && (
                  <span className='inline-flex items-center rounded-full border border-white/5 px-2.5 py-1'>
                    {work.kind}
                  </span>
                )}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Experiences;
