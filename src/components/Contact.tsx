function Contact() {
  return (
    <div className='flex flex-col gap-4'>
      <header>
        <p className='section-label mb-2'>Coordonnées</p>
        <h2 className='section-title text-sm sm:text-base'>Travaillons ensemble</h2>
      </header>

      <div>
        <div className='flex flex-col gap-5 lg:gap-3'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/xavier-nouaille/'
            className='flex sm:items-center flex-col sm:flex-row gap-0.5 sm:gap-4 group'
          >
            <strong className='line-clamp-2 font-medium text-primary group-hover:underline'>
              Linkedin
            </strong>
            <span className='hidden sm:flex flex-1 border-t border-dashed border-black/10 shrink'></span>
            <span className='flex-none text-tertiary'>Visiter</span>
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/xaviernouaille'
            className='flex sm:items-center flex-col sm:flex-row gap-0.5 sm:gap-4 group'
          >
            <strong className='line-clamp-2 font-medium text-primary group-hover:underline'>
              GitHub
            </strong>
            <span className='hidden sm:flex flex-1 border-t border-dashed border-black/10 shrink'></span>
            <span className='flex-none text-tertiary'>Visiter</span>
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='mailto:xavier.nouaille@pm.me'
            className='flex sm:items-center flex-col sm:flex-row gap-0.5 sm:gap-4 group'
          >
            <strong className='line-clamp-2 font-medium text-primary group-hover:underline'>
              EMail
            </strong>
            <span className='hidden sm:flex flex-1 border-t border-dashed border-black/10 shrink'></span>
            <span className='flex-none text-tertiary'>Contact</span>
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='tel:+33778389134'
            className='flex sm:items-center flex-col sm:flex-row gap-0.5 sm:gap-4 group'
          >
            <strong className='line-clamp-2 font-medium text-primary group-hover:underline'>
              Téléphone
            </strong>
            <span className='hidden sm:flex flex-1 border-t border-dashed border-black/10 shrink'></span>
            <span className='flex-none text-tertiary'>Appeler</span>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Contact;
