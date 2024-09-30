import './globals.css';
import clsx from 'clsx';
import localFont from 'next/font/local';
import Footer from './components/Footer';
import Header from './components/Header';
import { Source_Code_Pro } from 'next/font/google';

const myFont = localFont({ src: '../../public/font/my-font.woff2' });
const monoFont = Source_Code_Pro({
  subsets: ['latin'],
  variable: '--font-source-code-pro',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={clsx(
          myFont.className,
          monoFont.variable,
          'overflow-x-hidden bg-[#F7FAFC]',
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
