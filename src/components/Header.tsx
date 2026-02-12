'use client';

import { useEffect, useState } from 'react';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window === 'undefined') return;
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`sticky top-0 z-20 rounded-xl border transition-all duration-300 ${
        scrolled
          ? 'border-white/10 bg-white/[0.03] backdrop-blur-sm'
          : 'border-white/5 bg-white/[0.01]'
      }`}
    >
      <div className='flex items-center justify-between gap-4 px-4 sm:px-5 py-3 sm:py-4'>
        <div className='flex items-center gap-2 sm:gap-3'>
          <div className='flex h-7 w-7 items-center justify-center rounded-sm bg-white text-black text-xs font-black tracking-[0.18em]'>
            XN
          </div>
        </div>

        <nav className='flex items-center gap-4 sm:gap-6 text-[0.78rem] sm:text-[0.82rem] text-tertiary'>
          <span className='text-primary'>Portfolio</span>
          <span className='opacity-60'>Blog</span>
          <span className='opacity-60'>Produits</span>
        </nav>
      </div>
    </div>
  );
}

export default Header;
