import type { AppProps } from 'next/app'
import '@public/fonts/fonts.css'
import 'i18n'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { muiThemeDark, muiThemeLight } from 'muiTheme'
import useSwitchTheme from '@helpers/useSwitchTheme'
import Script from 'next/script'

function MyApp({ Component, pageProps }: AppProps) {
    const [theme, toggleTheme] = useSwitchTheme()
    return (
        <>
            <Script
                strategy="afterInteractive"
                src="https://www.googletagmanager.com/gtag/js?id=G-PR0RYWYEZJ"
            />
            <Script
                id="google-analytics"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-PR0RYWYEZJ');
                    `,
                }}
            />
            <ThemeProvider
                theme={theme === 'light' ? muiThemeLight : muiThemeDark}
            >
                <CssBaseline />
                <Header toggleTheme={toggleTheme} />
                <Component {...pageProps} />
                <Footer />
            </ThemeProvider>
        </>
    )
}

export default MyApp
