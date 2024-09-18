'use client';

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const Header = () => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  // useEffect when scrollPosition changes
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20 && !isScrolled) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div className='sticky top-6 z-30 -mx-px transition duration-75 will-change-transform opacity-100'>
      <div
        className={clsx(
          'bg-slate-100/30 flex justify-between items-center transition-all border border-transparent ease-in-out duration-200 max-w-[850px] mx-2 sm:mx-auto rounded-2xl py-2 pl-3 pr-4 md:pr-6 shadow-surface-glass backdrop-blur',
          {
            'border-gray-200 max-w-[880px] border-opacity-50': isScrolled,
          },
        )}
      >
        <Link href='/'>
          {/* eslint-disable-next-line */}
          <img
            src='https://media.licdn.com/dms/image/v2/D4E03AQG9WfSmyJRX1w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723508921407?e=1731542400&v=beta&t=Ho4p7LwvnWMufmdLRhWAB5PK-QS20zqU_sulKX9Zxf0'
            alt='Xavier Nouaille'
            className='w-10 h-10 rounded-full hover:scale-110 transition-all ease-in-out duration-300'
          />
        </Link>
        <div>
          <ul className='flex items-center space-x-5 md:space-x-6 text-slate-600 font-mono tracking-tight font-semibold text-sm'>
            <Link
              className={clsx({ 'opacity-60': pathname === '/about/' })}
              href='/about'
            >
              A propos
            </Link>
            <Link
              target='_blank'
              href='https://www.malt.fr/profile/xaviernouaille'
            >
              Malt
            </Link>
            <Link
              href='#footer'
              className='relative group bg-slate-950 hover:opacity-70 transition-colors inline-block font-mono text-xs font-semibold rounded-full px-6 py-2 text-white'
            >
              Contact
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
