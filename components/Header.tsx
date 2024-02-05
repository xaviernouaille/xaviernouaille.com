import {
    AppBar,
    Box,
    Container,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    Slide,
    Typography,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import TranslateIcon from '@mui/icons-material/Translate'
import { FC, useCallback, useEffect, useRef, useState } from 'react'
import { alpha } from '@mui/material/styles'
import Link from 'next/link'
import { Close, DarkModeOutlined, LightModeOutlined } from '@mui/icons-material'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { AnimatePresence, motion } from 'framer-motion'
import { is } from 'date-fns/locale'
import { useRouter } from 'next/router'

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
    const router = useRouter()

    const [isMobileOpen, setIsMobileOpen] = useState(false)

    const prevScrollY = useRef(0)

    const [goingUp, setGoingUp] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY
            const isEnoughScroll = window.scrollY > 800
            if (
                isEnoughScroll &&
                prevScrollY.current < currentScrollY &&
                goingUp
            ) {
                setGoingUp(false)
                setIsMobileOpen(false)
            }
            if (
                isEnoughScroll &&
                prevScrollY.current > currentScrollY &&
                !goingUp
            ) {
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

    const renderLinks = () => (
        <List
            sx={{
                display: { xs: 'none', sm: 'flex' },
                gap: 4,
            }}
        >
            {links.map(({ text, link }, index) => (
                <ListItem key={index} sx={{ padding: 0, whiteSpace: 'nowrap' }}>
                    <Link href={link}>
                        <a style={{ textDecoration: 'none' }}>
                            <Typography
                                variant="body2"
                                sx={{
                                    opacity:
                                        router.pathname === link ? '1' : '',
                                }}
                                color={'text.primary'}
                            >
                                {text}
                            </Typography>
                        </a>
                    </Link>
                </ListItem>
            ))}
        </List>
    )

    const renderIcons = () => (
        <List
            sx={{
                display: 'flex',
            }}
        >
            <ListItem disablePadding sx={{ width: 'fit-content' }}>
                <ListItemButton
                    onClick={changeLanguageFunc}
                    aria-label="Language"
                    sx={{
                        padding: 0,
                    }}
                >
                    <TranslateIcon
                        sx={{
                            fontSize: 22,
                            color: 'text.primary',
                        }}
                    />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ width: 'fit-content' }}>
                <ListItemButton
                    aria-label="Theme"
                    onClick={() => toggleTheme()}
                    sx={{
                        padding: 0,
                        marginLeft: { xs: 3, sm: 3.5 },
                    }}
                >
                    {theme === 'dark' ? (
                        <LightModeOutlined
                            sx={{
                                fontSize: 22,
                                color: 'text.primary',
                            }}
                        />
                    ) : (
                        <DarkModeOutlined
                            sx={{
                                fontSize: 22,
                                color: 'text.primary',
                            }}
                        />
                    )}
                </ListItemButton>
            </ListItem>
        </List>
    )

    const renderMobileMenu = () => (
        <AnimatePresence>
            {isMobileOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <List
                        sx={{
                            display: { xs: 'flex', sm: 'none' },
                            flexDirection: 'column',
                            marginTop: 3,
                            gap: 5,
                            paddingRight: { xs: 3, lg: 0 },
                            paddingLeft: { xs: 3, lg: 0 },
                            paddingBottom: 3,
                        }}
                    >
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
                                            sx={{
                                                opacity:
                                                    router.pathname === link
                                                        ? '1'
                                                        : '',
                                            }}
                                        >
                                            {text}
                                        </Typography>
                                    </a>
                                </Link>
                            </ListItem>
                        ))}
                    </List>
                </motion.div>
            )}
        </AnimatePresence>
    )

    const renderMobileMenuIcon = () =>
        isMobileOpen ? (
            <CloseIcon
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    fontSize: 26,
                    color: 'text.primary',
                    cursor: 'pointer',
                }}
            />
        ) : (
            <MenuIcon
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    fontSize: 26,
                    color: 'text.primary',
                    cursor: 'pointer',
                }}
            />
        )

    return (
        <Slide appear={false} direction="down" in={goingUp}>
            <AppBar
                elevation={0}
                sx={{
                    bgcolor: (theme) =>
                        alpha(theme.palette.background.paper, 0.4),
                    backdropFilter: 'blur(3px)',
                    bgOpacity: 0.2,
                    paddingTop: 1.5,
                    paddingBottom: 1.5,
                }}
            >
                <Container
                    maxWidth="md"
                    component="footer"
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        paddingRight: { xs: 3, lg: 0 },
                        paddingLeft: { xs: 3, lg: 0 },
                    }}
                >
                    {renderMobileMenuIcon()}
                    {renderLinks()}
                    {renderIcons()}
                </Container>
                {renderMobileMenu()}
            </AppBar>
        </Slide>
    )
}

export default Header
