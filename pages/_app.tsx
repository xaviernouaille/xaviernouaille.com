import type { AppProps } from 'next/app'
import '@public/fonts/fonts.css'
import 'i18n'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { muiThemeDark, muiThemeLight } from 'muiTheme'
import useSwitchTheme from '@helpers/useSwitchTheme'
import { useMemo } from 'react'
import { useTranslation } from 'react-i18next'

function MyApp({ Component, pageProps }: AppProps) {
    const [theme, toggleTheme] = useSwitchTheme()
    const themeValue = useMemo(
        () => (theme === 'light' ? muiThemeLight : muiThemeDark),
        [theme]
    )

    const { t } = useTranslation()

    return (
        <>
            <ThemeProvider theme={themeValue}>
                <Header
                    links={t('header.links', { returnObjects: true })}
                    toggleTheme={toggleTheme}
                    theme={theme}
                />
                <Component {...pageProps} />
                <Footer paragraph={t('footer.paragraph')} />
                <CssBaseline />
            </ThemeProvider>
        </>
    )
}

export default MyApp
