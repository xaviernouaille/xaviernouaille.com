'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const isActive = (pathname: string, label: string) => {
  return pathname === label;
};

const menuLinks = [
  { label: 'Accueil', href: '/' },
  { label: 'Contributions', href: '/contributions/' },
  { label: 'Contact', href: '/contact/' },
];

export const Menu = () => {
  const pathname = usePathname();

  const renderMenuLinks = () => {
    return menuLinks.map(({ label, href }, i) => {
      return (
        <Link key={i} scroll={true} href={href}>
          <p
            className={clsx('menu-link pb-0', {
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
