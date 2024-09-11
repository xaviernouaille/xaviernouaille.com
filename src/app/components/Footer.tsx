import Link from 'next/link';

const Footer = () => {
  return (
    <section className='mt-24 md:mt-24 max-w-[850px] px-6 mx-auto pb-16 md:px-0 border-t pt-8 border-slate-300'>
      <ul className='flex flex-col md:flex-row md:items-center md:space-x-6 text-slate-600 mb-5'>
        <Link href='tel:+33778389134'>+33 7 78 38 91 34</Link>
        <Link href='mailto:xavier.nouaille@pm.me'>xavier.nouaille@pm.me</Link>
        <Link
          target='_blank'
          href='https://www.linkedin.com/in/xavier-nouaille/'
        >
          Linkedin
        </Link>
        <Link target='_blank' href='https://github.com/xaviernouaille'>
          GitHub
        </Link>
        <Link target='_blank' href='https://www.malt.fr/profile/xaviernouaille'>
          Malt
        </Link>
      </ul>
      <p className='text-slate-400 opacity-90 font-light text-left'>
        Construit avec NextJS, ShadcnUI & Tailwind. Hebergé sur AWS 💛
      </p>
    </section>
  );
};

export default Footer;
