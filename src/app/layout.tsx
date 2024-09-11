import './globals.css';
import clsx from 'clsx';
import { ThemeProvider } from 'next-themes';

// next local font
import localFont from 'next/font/local';

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: '../../public/font/my-font.woff2' });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      {/* <ThemeProvider defaultTheme='dark' enableSystem={false} attribute='class'> */}

      <body className={clsx(myFont.className, 'bg-[#F7FAFC]')}>
        <div className='sticky top-6 z-30 -mx-px transition duration-75 will-change-transform opacity-100'>
          <div className='flex justify-between items-center max-w-[900px] mx-auto rounded-2xl bg-gray-800/95 py-2 pl-2.5 pr-6 shadow-surface-glass backdrop-blur [@supports(backdrop-filter:blur(0px))]:bg-white/[3%]'>
            <img
              src='https://media.licdn.com/dms/image/v2/D4E03AQG9WfSmyJRX1w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1723508921407?e=1731542400&v=beta&t=Ho4p7LwvnWMufmdLRhWAB5PK-QS20zqU_sulKX9Zxf0'
              alt='Xavier Nouaille'
              className='w-10 h-10 rounded-full'
            />
            <div>
              <ul className='flex items-center space-x-6 text-slate-600'>
                <li>A propos</li>
                <li>Malt</li>
                <li>+33 7 78 38 91 34</li>
              </ul>
            </div>
          </div>
        </div>
        {children}
      </body>
      {/* </ThemeProvider> */}
    </html>
  );
}
