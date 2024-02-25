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
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <header className='fixed top-0 py-6 w-full bg-white dark:bg-[#09090B] backdrop-blur-sm z-50 px-6 lg:px-0'>
            <div className='my-container flex items-center justify-between mx-auto bg-primary'>
              {/* <ModeToggle /> */}
              <Menu />
            </div>
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
