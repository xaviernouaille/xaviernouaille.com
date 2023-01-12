import type { AppProps } from 'next/app'
import '@public/fonts/fonts.css'
import 'i18n'
import { CssBaseline, ThemeProvider } from '@mui/material'
import Header from '@components/Header'
import { Container } from '@mui/system'
import Footer from '@components/Footer'
import { muiThemeDark, muiThemeLight } from 'muiTheme'
import useSwitchTheme from '@helpers/useSwitchTheme'

function MyApp({ Component, pageProps }: AppProps) {
    const [theme, toggleTheme] = useSwitchTheme()
    return (
        <ThemeProvider theme={theme === 'light' ? muiThemeLight : muiThemeDark}>
            <CssBaseline />
            <Header toggleTheme={toggleTheme} />
            <Component {...pageProps} />
            <Footer />
        </ThemeProvider>
    )
}

export default MyApp
