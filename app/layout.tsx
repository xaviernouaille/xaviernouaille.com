import Link from 'next/link';
import './globals.css';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toggle';
import { Menu } from '@/components/menu';
import { Footer } from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en'>
      <body
        className={`antialiased min-h-screen bg-white dark:bg-[#09090B] text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute='class' defaultTheme='dark'>
          <header className='fixed top-0 pt-4 w-full bg-white dark:bg-[#09090BCC] backdrop-blur-sm z-50 px-6 lg:px-0'>
            <div className='my-container flex items-center justify-between mx-auto bg-primary'>
              {/* <ModeToggle /> */}
              <Menu />
            </div>
            <hr
              className='mt-4'
              style={{ color: 'rgba(55,65,81,.4)', opacity: '0.1' }}
            />
          </header>
          <main className='px-6 lg:px-0 my-container mx-auto pt-10'>
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
