import type { AppProps } from 'next/app'
import '@public/fonts/fonts.css'
import 'i18n'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { muiThemeDark, muiThemeLight } from 'muiTheme'
import useSwitchTheme from '@helpers/useSwitchTheme'
import { useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
    const [theme, toggleTheme] = useSwitchTheme()
    const themeValue = useMemo(
        () => (theme === 'light' ? muiThemeLight : muiThemeDark),
        [theme]
    )

    const { asPath } = useRouter()
    const { t } = useTranslation()

    return (
        <AnimatePresence>
            <Head>
                <style>
                    {`
                        p{
                            opacity: 0.7;
                        }
                    `}
                </style>
            </Head>
            <ThemeProvider key={asPath} theme={themeValue}>
                <Header
                    links={t('header.links', { returnObjects: true })}
                    toggleTheme={toggleTheme}
                    theme={theme}
                />
                <Component key={asPath} {...pageProps} />
                <Footer paragraph={t('footer.paragraph')} />
                <CssBaseline />
            </ThemeProvider>
        </AnimatePresence>
    )
}

export default MyApp
