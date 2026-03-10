'use client';

import Link from 'next/link';

function Header() {
  return (
    <header className='border-b border-white/[0.06] pb-5'>
      <div className='flex items-center justify-between'>
        <Link
          href='/'
          className='text-base font-semibold text-zinc-400 hover:text-zinc-200 transition-colors'
        >
          XN
        </Link>
        <nav className='flex items-center gap-8 text-sm font-medium text-zinc-500'>
          <span className='text-zinc-300'>Portfolio</span>
          <a
            href='#experiences'
            className='hover:text-zinc-300 transition-colors'
          >
            Experiences
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
