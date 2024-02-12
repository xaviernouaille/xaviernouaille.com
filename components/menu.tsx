'use client';

import { Popover } from '@headlessui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export const Menu = () => {
  const pathname = usePathname();
  useEffect(() => {}, [pathname]);

  return (
    <Popover className='relative z-10'>
      <Popover.Button className='text-3xl leading-none'>*</Popover.Button>

      <Popover.Panel className='absolute z-10 top-8 w-max right-0 bg-primary p-2 rounded-lg bg-white dark:bg-black shadow-sm'>
        <div className='flex flex-col space-y-2 text-right font-mono text-sm'>
          <Link href='/'>Accueil</Link>
          <Link href='/contributions'>Contributions</Link>
          <Link href='/contact'>Contact</Link>
          <Link href='https://github.com/xaviernouaille'>@xaviernouaille</Link>
        </div>
      </Popover.Panel>
    </Popover>
  );
};
