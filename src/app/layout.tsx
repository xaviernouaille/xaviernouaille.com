import { Inter } from 'next/font/google';
import './globals.css';
import { GoogleAnalytics } from '@next/third-parties/google';
// import Header from '@/components/Header';
import ScrollProgress from '@/components/ScrollProgress';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='fr'>
      <body className={`${inter.variable} antialiased min-h-screen`}>
        <ScrollProgress />
        <main className='newspaper-shell'>
          {/* <div className='w-full max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8'>
            <Header />
          </div> */}
          <section className='newspaper-page'>
            <div className='mt-6 sm:mt-8'>{children}</div>

            <footer className='mt-12 sm:mt-14'>
              <div className='rounded-xl border border-white/5 bg-white/[0.01] px-4 sm:px-5 py-4 sm:py-5 text-[0.75rem] text-tertiary'>
                <p className='text-center text-secondary'>
                  Construit avec Next.js, Tailwind CSS et propulsé sur AWS.
                </p>
                <p className='mt-1.5 text-center'>
                  Le code source est disponible sur{' '}
                  <a
                    href='https://github.com/xaviernouaille/xaviernouaille.com'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='underline underline-offset-2 hover:text-secondary transition-colors'
                  >
                    GitHub
                  </a>
                  .
                </p>

                <div className='mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[0.7rem]'>
                  <a
                    href='https://www.linkedin.com/in/xavier-nouaille/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 hover:text-secondary hover:border-white/20 transition-colors'
                  >
                    LinkedIn
                  </a>
                  <a
                    href='https://github.com/xaviernouaille'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='inline-flex items-center rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 hover:text-secondary hover:border-white/20 transition-colors'
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </footer>
          </section>
        </main>
      </body>
      <GoogleAnalytics gaId='https://www.googletagmanager.com/gtag/js?id=G-PR0RYWYEZJ' />
    </html>
  );
}
