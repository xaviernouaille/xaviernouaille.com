import {
    AppBar,
    Container,
    Link,
    List,
    ListItem,
    ListItemButton,
    Slide,
    Typography,
    Button,
    SvgIcon,
} from '@mui/material'
import { useTranslation } from 'react-i18next'
import TranslateIcon from '@mui/icons-material/Translate'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import { useEffect, useRef, useState } from 'react'

const Header = ({ toggleTheme }: { toggleTheme: () => void }) => {
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

    return (
        <Slide direction="down" in={goingUp}>
            <AppBar elevation={0} color="transparent">
                <Container
                    maxWidth="xl"
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <List sx={{ display: 'flex' }}>
                        <ListItem disablePadding sx={{ width: 'fit-content' }}>
                            <ListItemButton
                                onClick={() =>
                                    changeLanguage(
                                        language === 'fr' ? 'en' : 'fr'
                                    )
                                }
                                aria-label="Language"
                            >
                                <TranslateIcon />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding sx={{ width: 'fit-content' }}>
                            <ListItemButton
                                aria-label="Theme"
                                onClick={() => toggleTheme()}
                            >
                                <Brightness4Icon />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Container>
            </AppBar>
        </Slide>
    )
}

export default Header
