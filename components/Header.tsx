import {
    AppBar,
    Container,
    List,
    ListItem,
    ListItemButton,
    Slide,
    Typography,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import TranslateIcon from '@mui/icons-material/Translate'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { FC, useCallback, useEffect, useRef, useState } from 'react'
import { alpha } from '@mui/material/styles'
import Link from 'next/link'

type Link = {
    text: string
    link: string
}

type Props = {
    toggleTheme: () => void
    theme: string
    links: Link[]
}

const Header: FC<Props> = ({ toggleTheme, theme, links }) => {
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
                    paddingTop: 1,
                }}
            >
                <Container
                    maxWidth="md"
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: 0,
                    }}
                >
                    <List sx={{ display: 'flex', gap: 4 }}>
                        {links.map(({ text, link }, index) => (
                            <ListItem
                                key={index}
                                sx={{ padding: 0, whiteSpace: 'nowrap' }}
                            >
                                <Link href={link}>
                                    <a style={{ textDecoration: 'none' }}>
                                        <Typography
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {text}
                                        </Typography>
                                    </a>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                    <List sx={{ display: 'flex' }}>
                        <ListItem disablePadding sx={{ width: 'fit-content' }}>
                            <ListItemButton
                                onClick={changeLanguageFunc}
                                aria-label="Language"
                            >
                                <TranslateIcon
                                    sx={{
                                        fontSize: 20,
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
                                            fontSize: 20,

                                            color: 'text.primary',
                                        }}
                                    />
                                ) : (
                                    <Brightness4Icon
                                        sx={{
                                            fontSize: 20,
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
