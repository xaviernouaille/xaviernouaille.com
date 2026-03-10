import { WORKS } from '@/app/constants';

function Experiences() {
  return (
    <section id='experiences'>
      <p className='section-label mb-3'>Parcours</p>
      <h2 className='section-title mb-10'>Expériences</h2>

      <ul className='space-y-0'>
        {WORKS.map((work, index) => (
          <li
            key={work.company}
            className={`py-8 ${index > 0 ? 'section-divider' : ''}`}
          >
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={work.href}
              className='group flex gap-4'
            >
              {work.logo && (
                <span className='shrink-0 w-10 h-10 rounded-lg bg-zinc-800/80 border border-white/[0.06] overflow-hidden flex items-center justify-center'>
                  <img src={work.logo} alt='' className='' loading='lazy' />
                </span>
              )}
              <div className='min-w-0 flex-1'>
                <div className='flex flex-wrap items-baseline justify-between gap-3'>
                  <span className='text-lg font-semibold text-zinc-200 group-hover:text-zinc-100 transition-colors'>
                    {work.company}
                  </span>
                  <span className='text-sm text-zinc-500'>{work.date}</span>
                </div>
                <p className='mt-1 text-base text-zinc-500'>
                  {work.position}
                  {work.location ? ` · ${work.location}` : ''}
                </p>
                {work.summary && (
                  <p className='mt-3 text-base text-zinc-500 leading-relaxed'>
                    {work.summary}
                  </p>
                )}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Experiences;
