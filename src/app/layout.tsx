'use client';

import './globals.css';
import clsx from 'clsx';
import localFont from 'next/font/local';
import Link from 'next/link';
import Footer from './components/Footer';
import { Phone, AtSign } from 'lucide-react';

const myFont = localFont({ src: '../../public/font/my-font.woff2' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={clsx(myFont.className, 'bg-[#F7FAFC]')}>
        <div className='sticky top-6 z-30 -mx-px transition duration-75 will-change-transform opacity-100'>
          <div className='bg-slate-100/30 flex justify-between items-center max-w-[900px] mx-2 sm:mx-auto rounded-2xl py-2 pl-3 pr-4 md:pr-6 shadow-surface-glass backdrop-blur'>
            <Link href='/'>
              {/* eslint-disable-next-line */}
              <img
                src='https://media.licdn.com/dms/image/v2/D4E03AQG9WfSmyJRX1w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723508921407?e=1731542400&v=beta&t=Ho4p7LwvnWMufmdLRhWAB5PK-QS20zqU_sulKX9Zxf0'
                alt='Xavier Nouaille'
                className='w-10 h-10 rounded-full'
              />
            </Link>
            <div>
              <ul className='flex items-center space-x-5 md:space-x-6 text-slate-600'>
                <Link href='/about'>A propos</Link>
                <Link
                  target='_blank'
                  href='https://www.malt.fr/profile/xaviernouaille'
                >
                  Malt
                </Link>
                <Link href='tel:+33778389134'>
                  <Phone size={19} />
                </Link>
                <Link href='mailto:xavier.nouaille@pm.me'>
                  <AtSign size={19} />
                </Link>
              </ul>
            </div>
          </div>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
