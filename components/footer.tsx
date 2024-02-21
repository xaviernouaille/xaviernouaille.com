'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

type Link = {
  label: string;
  href: string;
  target?: '_blank';
};

const footerLinks1: Link[] = [
  { label: 'Accueil', href: '/' },
  { label: 'A propos', href: '/#about' },
  { label: 'Contributions', href: '/contributions/' },
];
const footerLinks2: Link[] = [
  { label: 'Contact', href: '/contact/' },
  { label: 'A propos', href: '/#about/' },
];
const footerLinks3: Link[] = [
  {
    label: 'Linkedin',
    href: 'https://www.linkedin.com/in/xavier-nouaille/',
    target: '_blank',
  },
  {
    label: 'Github',
    href: 'https://github.com/xaviernouaille',
    target: '_blank',
  },
  {
    label: 'Malt',
    href: 'https://www.malt.fr/profile/xaviernouaille',
    target: '_blank',
  },
];

const isActive = (pathname: string, label: string) => {
  return pathname === label;
};

export const Footer = () => {
  const pathname = usePathname();

  const renderLinks = (links: Link[]) =>
    links.map(({ label, href, target }, index) => (
      <Link scroll={true} target={target} href={href} key={index}>
        <p
          className={clsx('footer-link', {
            highlight: isActive(pathname, href),
          })}
        >
          {label}
        </p>
      </Link>
    ));
  const currentYear = new Date().getFullYear();
  return (
    <>
      <hr
        style={{ color: 'rgba(55,65,81,.4)', opacity: '0.4' }}
        className='mt-20'
      />
      <footer className='max-w-[880px] mx-auto grid grid-cols-2 md:flex md:space-row justify-between py-12 px-4 md:px-8'>
        <div>{renderLinks(footerLinks1)}</div>
        <div>{renderLinks(footerLinks2)}</div>
        <div>{renderLinks(footerLinks3)}</div>
        <div>
          <p className='footer-link highlight'>©{currentYear}</p>
        </div>
      </footer>
    </>
  );
};
