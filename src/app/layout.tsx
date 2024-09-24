import './globals.css';
import clsx from 'clsx';
import localFont from 'next/font/local';
import Footer from './components/Footer';
import Header from './components/Header';

const myFont = localFont({ src: '../../public/font/my-font.woff2' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={clsx(myFont.className, 'overflow-x-hidden bg-[#F7FAFC]')}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
