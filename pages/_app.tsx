import type { AppProps } from 'next/app'
import '@public/fonts/fonts.css'
import 'i18n'
import {
    CssBaseline,
    Link,
    ThemeProvider,
    Button,
    List,
    ListItem,
    ListItemButton,
} from '@mui/material'
import Header from '@components/Header'
import { Container } from '@mui/system'
import Footer from '@components/Footer'
import { muiThemeDark, muiThemeLight } from 'muiTheme'
import useSwitchTheme from '@helpers/useSwitchTheme'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import { LINKEDIN, GITHUB } from '@constants/index'
import { useTranslation } from 'react-i18next'

function MyApp({ Component, pageProps }: AppProps) {
    const [theme, toggleTheme] = useSwitchTheme()
    const { t } = useTranslation()

    return (
        <ThemeProvider theme={theme === 'light' ? muiThemeLight : muiThemeDark}>
            <CssBaseline />
            <Header toggleTheme={toggleTheme} />
            <Container maxWidth="md" component="main">
                <Component {...pageProps} />
            </Container>
            <Footer paragraph={t('footer.paragraph')}>
                <List sx={{ display: 'flex', gap: 1 }}>
                    <ListItem disablePadding sx={{ width: 'fit-content' }}>
                        <Link color="inherit" href={LINKEDIN} target="_blank">
                            <LinkedInIcon sx={{ fontSize: 28 }} />
                        </Link>
                    </ListItem>
                    <ListItem disablePadding sx={{ width: 'fit-content' }}>
                        <Link color="inherit" href={GITHUB} target="_blank">
                            <GitHubIcon sx={{ fontSize: 25 }} />
                        </Link>
                    </ListItem>
                </List>
            </Footer>
        </ThemeProvider>
    )
}

export default MyApp
