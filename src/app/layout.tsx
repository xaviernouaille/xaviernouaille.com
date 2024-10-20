import './globals.css';
import clsx from 'clsx';
import { ThemeProvider } from 'next-themes';
import Script from 'next/script';

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

        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-PR0RYWYEZJ'
        ></script>
        <Script id='ga'>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-PR0RYWYEZJ');
        `}
        </Script>
      </body>
    </html>
  );
}
