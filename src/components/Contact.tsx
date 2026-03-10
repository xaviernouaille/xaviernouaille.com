function Contact() {
  return (
    <section id='contact' className='section-divider pt-12 sm:pt-14'>
      <p className='section-label mb-3'>Coordonnées</p>
      <h2 className='section-title mb-8'>Contact</h2>

      <ul className='space-y-4 text-base sm:text-lg'>
        <li>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/xavier-nouaille/'
            className='text-zinc-400 hover:text-zinc-200 transition-colors underline underline-offset-2'
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/xaviernouaille'
            className='text-zinc-400 hover:text-zinc-200 transition-colors underline underline-offset-2'
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href='mailto:xavier.nouaille@pm.me'
            className='text-zinc-400 hover:text-zinc-200 transition-colors underline underline-offset-2'
          >
            xavier.nouaille@pm.me
          </a>
        </li>
        <li>
          <a
            href='tel:+33778389134'
            className='text-zinc-400 hover:text-zinc-200 transition-colors underline underline-offset-2'
          >
            +33 7 78 38 91 34
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Contact;
