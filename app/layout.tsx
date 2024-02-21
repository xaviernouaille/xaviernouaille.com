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
        className={`antialiased min-h-screen bg-white dark:bg-black text-slate-900 dark:text-slate-50 ${inter.className}`}
      >
        <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
          <div className='mx-auto py-10'>
            <header className='mx-auto my-container px-4 lg:px-0'>
              <div className='flex items-center justify-between'>
                <ModeToggle />
                <Menu />
              </div>
            </header>
            <main className='px-4 my-container mx-auto'>{children}</main>
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
