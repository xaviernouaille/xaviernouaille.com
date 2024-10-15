'use client';

import { Button } from '@/components/ui/button';
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
    <div
      className={clsx(
        'w-full mx-auto top-0 py-4 z-30 transition duration-75 will-change-transform opacity-100',
        {
          'fixed bg-secondary': isScrolled,
          absolute: !isScrolled,
        },
      )}
      style={{
        translate: '50%',
        right: '50%',
      }}
    >
      <div className='container flex items-center justify-between'>
        <Link href='/'>
          {/* eslint-disable-next-line */}
          <img
            src='https://media.licdn.com/dms/image/v2/D4E03AQECl4VM6fM72Q/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1727639353667?e=1733356800&v=beta&t=ohqxp5K_G4nRrqS9z9pJ123A5HIFwyBTziOKXQO3mYI'
            alt='Xavier Nouaille'
            className='w-10 h-10 rounded-full hover:scale-110 transition-all ease-in-out duration-300'
          />
        </Link>
        <div>
          <ul className='flex items-center space-x-5 md:space-x-6 font-semibold uppercase text-sm'>
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
              Mes services
            </Link>
            <Link href='#footer' className=''>
              Mes projets
            </Link>
            <Link href='#footer' className=''>
              Publications
            </Link>
          </ul>
        </div>

        <div className='text-sm font-semibold uppercase'>
          <Button className='text-white'>Contact</Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
