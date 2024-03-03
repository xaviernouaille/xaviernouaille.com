'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Github, Linkedin, Mail } from 'lucide-react';
import { DataCounter } from './date-counter';
import { FOOTER_LINKS1, FOOTER_LINKS2, FOOTER_LINKS3 } from '@/constants/links';

type Link = {
  label: string;
  href: string;
  target?: string;
};

const isActive = (pathname: string, label: string) => {
  return pathname === label;
};

export const Footer = () => {
  const pathname = usePathname();

  const renderLinks = (links: Link[]) =>
    links.map(({ label, href, target }, index) => (
      <Link scroll={true} target={target} href={href} key={index}>
        <p
          className={clsx('footer-link font-medium pb-0', {
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
      <div className='px-6 lg:px-4 md:px-8 my-container mx-auto mt-28 flex justify-between items-end mb-12'>
        <div className='flex space-x-3'>
          <a
            href='#'
            className='border border-solid p-1.5 rounded-md border-disabled inline-block hover:opacity-70'
          >
            <Mail className='h-5 w-5' />
          </a>
          <a
            href='#'
            className='border border-solid p-1.5 rounded-md border-disabled inline-block hover:opacity-70'
          >
            <Github className='h-5 w-5' />
          </a>
          <a
            href='#'
            className='border border-solid p-1.5 rounded-md border-disabled inline-block hover:opacity-70'
          >
            <Linkedin className='h-5 w-5' />
          </a>
        </div>
        <div>
          <DataCounter />
        </div>
      </div>

      <hr
        style={{ color: 'rgba(55,65,81,.4)', opacity: '0.1' }}
        className='mt-5'
      />
      <footer className='max-w-[880px] mx-auto grid grid-cols-2 gap-6 md:flex md:space-row justify-around py-12 px-6 lg:px-4 md:px-8'>
        <div className='flex flex-col space-y-2'>
          {renderLinks(FOOTER_LINKS1)}
        </div>
        <div className='flex flex-col space-y-2'>
          {renderLinks(FOOTER_LINKS2)}
        </div>
        <div className='flex flex-col space-y-2'>
          {renderLinks(FOOTER_LINKS3)}
        </div>
        <div>
          <p className='footer-link highlight'>©{currentYear}</p>
        </div>
      </footer>
    </>
  );
};
