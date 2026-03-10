import { STUDIES } from '@/app/constants';

function Degrees() {
  return (
    <section className='section-divider pt-16 sm:pt-20 pb-16 sm:pb-20'>
      <p className='section-label mb-3'>Formation</p>
      <h2 className='section-title mb-10'>Certifications</h2>

      <ul className='space-y-0'>
        {STUDIES.map((study, index) => (
          <li
            key={study.degree}
            className={`py-6 ${index > 0 ? 'section-divider' : ''}`}
          >
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={study.href}
              className='group flex gap-4 items-start'
            >
              {study.logo && (
                <span className='shrink-0 w-10 h-10 rounded-lg bg-zinc-800/80 border border-white/[0.06] overflow-hidden flex items-center justify-center'>
                  <img src={study.logo} alt='' loading='lazy' />
                </span>
              )}
              <div className='min-w-0 flex-1 flex flex-wrap items-baseline justify-between gap-4'>
                <span className='text-lg font-semibold text-zinc-200 group-hover:text-zinc-100 transition-colors'>
                  {study.degree}
                </span>
                <span className='text-sm text-zinc-500 shrink-0'>
                  {study.school}
                  {study.date ? ` · ${study.date}` : ''}
                </span>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Degrees;
