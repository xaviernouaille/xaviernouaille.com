import type { AppProps } from 'next/app'
import '@public/fonts/fonts.css'
import 'i18n'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { muiThemeDark, muiThemeLight } from 'muiTheme'
import useSwitchTheme from '@helpers/useSwitchTheme'
import { useMemo } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
    const [theme, toggleTheme] = useSwitchTheme()
    const themeValue = useMemo(
        () => (theme === 'light' ? muiThemeLight : muiThemeDark),
        [theme]
    )

    return (
        <ThemeProvider theme={themeValue}>
            <CssBaseline />
            <Header toggleTheme={toggleTheme} />
            <Component {...pageProps} />
            <Footer />
        </ThemeProvider>
    )
}

export default MyApp
