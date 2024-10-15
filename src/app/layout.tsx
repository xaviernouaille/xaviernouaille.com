import './globals.css';
import clsx from 'clsx';
import { ThemeProvider } from 'next-themes';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang='fr'>
      <body className={clsx('overflow-x-hidden bg-background font-sans')}>
        <ThemeProvider enableSystem={false} defaultTheme='light'>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
