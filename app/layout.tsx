import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toggle';
import { AnimatePresence, motion } from 'framer-motion';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body
        className={`antialiased min-h-screen bg-white dark:bg-black text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        {/* <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          > */}
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className='max-w-2xl mx-auto py-10'>
            <header className='px-4 md:px-0'>
              <div className='flex items-center justify-between'>
                <ModeToggle />
                <nav className='ml-auto text-sm font-medium space-x-6'>
                  <Link href='/'>Accueil</Link>
                  <Link href='/contributions'>Contributions</Link>
                  <Link href='/contact'>Contact</Link>
                  <Link
                    target='_blank'
                    href='https://github.com/xaviernouaille'
                  >
                    GitHub
                  </Link>
                </nav>
              </div>
            </header>
            <main className='px-4'>{children}</main>
          </div>
          <footer className='max-w-2xl mx-auto px-4 sm:flex sm:space-y-0 space-y-4 justify-between pb-10 text-md'>
            <div className='text-sm'>
              <p className='font-mono'>
                GitHub :{' '}
                <a
                  className='italic hover:underline'
                  target='_blank'
                  href='https://github.com/xaviernouaille'
                >
                  @xaviernouaille
                </a>
              </p>
              <p className='font-mono'>
                Malt :{' '}
                <a
                  className='italic hover:underline'
                  target='_blank'
                  href='https://www.malt.fr/profile/xaviernouaille'
                >
                  Xavier Nouaille
                </a>
              </p>
              <p className='font-mono'>
                LinkedIn :{' '}
                <a
                  className='italic hover:underline'
                  target='_blank'
                  href='https://linkedin.com/xavier-nouaille'
                >
                  Xavier Nouaille
                </a>
              </p>
            </div>
            <p className='font-mono'>2024</p>
          </footer>
        </ThemeProvider>
        {/* </motion.div>
        </AnimatePresence> */}
      </body>
    </html>
  );
}
