'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { HEADER_LINK } from '@/constants/links';

const isActive = (pathname: string, label: string) => {
  return pathname === label;
};

export const Menu = () => {
  const pathname = usePathname();

  const renderMenuLinks = () => {
    return HEADER_LINK.map(({ label, href }, i) => {
      return (
        <Link key={i} scroll={true} href={href}>
          <p
            className={clsx('pb-0 text-sm menu-link font-medium', {
              highlight: isActive(pathname, href),
            })}
          >
            {label}
          </p>
        </Link>
      );
    });
  };

  return <div className='flex space-x-5'>{renderMenuLinks()}</div>;
};
