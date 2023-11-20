import {
    AppBar,
    Container,
    List,
    ListItem,
    ListItemButton,
    Slide,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import TranslateIcon from '@mui/icons-material/Translate'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useCallback, useEffect, useRef, useState } from 'react'
import { alpha } from '@mui/material/styles'

const Header = ({
    toggleTheme,
    theme,
}: {
    toggleTheme: () => void
    theme: string
}) => {
    const {
        i18n: { changeLanguage, language },
    } = useTranslation()

    const prevScrollY = useRef(0)

    const [goingUp, setGoingUp] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            if (prevScrollY.current < currentScrollY && goingUp) {
                setGoingUp(false)
            }
            if (prevScrollY.current > currentScrollY && !goingUp) {
                setGoingUp(true)
            }

            prevScrollY.current = currentScrollY
        }

        window.addEventListener('scroll', handleScroll, { passive: true })

        return () => window.removeEventListener('scroll', handleScroll)
    }, [goingUp])

    const changeLanguageFunc = useCallback(
        () => changeLanguage(language === 'fr' ? 'en' : 'fr'),
        [language]
    )

    return (
        <Slide direction="down" in={goingUp}>
            <AppBar
                elevation={0}
                sx={{
                    bgcolor: (theme) =>
                        alpha(theme.palette.background.paper, 0.4),
                    bgOpacity: 0.4,
                }}
            >
                <Container
                    maxWidth="xl"
                    sx={{
                        display: 'flex',
                        justifyContent: 'end',
                        alignItems: 'center',
                    }}
                >
                    <List sx={{ display: 'flex' }}>
                        <ListItem disablePadding sx={{ width: 'fit-content' }}>
                            <ListItemButton
                                onClick={changeLanguageFunc}
                                aria-label="Language"
                            >
                                <TranslateIcon
                                    sx={{
                                        fontSize: {
                                            xs: 20,
                                            sm: 24,
                                        },
                                        color: 'text.primary',
                                    }}
                                />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding sx={{ width: 'fit-content' }}>
                            <ListItemButton
                                aria-label="Theme"
                                onClick={() => toggleTheme()}
                            >
                                {theme === 'dark' ? (
                                    <Brightness7Icon
                                        sx={{
                                            fontSize: {
                                                xs: 20,
                                                sm: 24,
                                            },
                                            color: 'text.primary',
                                        }}
                                    />
                                ) : (
                                    <Brightness4Icon
                                        sx={{
                                            fontSize: {
                                                xs: 20,
                                                sm: 24,
                                            },
                                            color: 'text.primary',
                                        }}
                                    />
                                )}
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Container>
            </AppBar>
        </Slide>
    )
}

export default Header
