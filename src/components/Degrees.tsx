import { STUDIES } from '@/app/constants';

function Degrees() {
  return (
    <div className='flex flex-col gap-4'>
      <header>
        <p className='section-label mb-2'>Formation</p>
        <h2 className='section-title text-sm sm:text-base'>
          Certifications <span className='text-tertiary'>({STUDIES.length})</span>
        </h2>
      </header>

      <div className='flex flex-col divide-y divide-white/5 rounded-xl border border-white/5 bg-white/[0.01]'>
        {STUDIES.map((study) => (
          <a
            key={study.degree}
            target='_blank'
            rel='noopener noreferrer'
            href={study.href}
            className='flex items-center gap-4 px-3.5 py-3.5 sm:px-4 sm:py-4 group hover:bg-white/[0.03] transition-colors'
          >
            <div className='flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-white/[0.02] text-[0.7rem] font-medium text-secondary'>
              {study.school.slice(0, 2).toUpperCase()}
            </div>

            <div className='flex flex-1 items-center justify-between gap-4'>
              <div className='flex flex-col gap-0.5'>
                <p className='text-sm sm:text-[0.95rem] font-medium text-primary'>
                  {study.degree}
                </p>
                <p className='text-[0.8rem] text-tertiary'>
                  @ {study.school}
                  {study.date ? ` · ${study.date}` : null}
                </p>
              </div>

              <span className='text-xs text-tertiary group-hover:text-secondary'>
                ↗
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Degrees;
