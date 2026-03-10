import { Syne } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
import Header from '@/components/Header';
import ScrollProgress from '@/components/ScrollProgress';
import FooterHeart from '@/components/FooterHeart';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  weight: ['400', '500', '600', '700', '800'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fr'>
      <body className={`${syne.variable} font-sans antialiased min-h-screen`}>
        <ScrollProgress />
        <main className='page-shell'>
          <Header />
          <div className='mt-12 sm:mt-16'>{children}</div>

          <footer className='section-divider mt-16 pt-10 text-center text-sm text-zinc-500'>
            <FooterHeart />
            <p>
              Construit avec Next.js, Tailwind CSS. Code source sur{' '}
              <a
                href='https://github.com/xaviernouaille/xaviernouaille.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-zinc-400 underline underline-offset-2 hover:text-zinc-300 transition-colors'
              >
                GitHub
              </a>
              .
            </p>
            <p className='mt-2'>
              <a
                href='https://www.linkedin.com/in/xavier-nouaille/'
                target='_blank'
                rel='noopener noreferrer'
                className='text-zinc-400 hover:text-zinc-300 transition-colors'
              >
                LinkedIn
              </a>
              {' · '}
              <a
                href='https://github.com/xaviernouaille'
                target='_blank'
                rel='noopener noreferrer'
                className='text-zinc-400 hover:text-zinc-300 transition-colors'
              >
                GitHub
              </a>
            </p>
          </footer>
        </main>
      </body>
      <GoogleAnalytics gaId='G-PR0RYWYEZJ' />
    </html>
  );
}
