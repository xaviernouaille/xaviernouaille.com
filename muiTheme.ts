import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { TypographyOptions } from '@mui/material/styles/createTypography'

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        body3: true
        body4: true
        body5: true
    }
}

interface ExtendedTypographyOptions extends TypographyOptions {
    body3: React.CSSProperties
    body4: React.CSSProperties
    body5: React.CSSProperties
}

const baseTheme = {
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1024,
            lg: 1120,
            xl: 1570,
        },
    },
    typography: {
        fontFamily: 'Inter',
        h1: {
            fontSize: '4rem',
            fontWeight: 600,
            letterSpacing: '-0.07rem',
            lineHeight: 1,
            fontFamily: ['Inter'].join(','),
        },
        h2: {
            fontSize: '2rem',
            fontWeight: 600,
            letterSpacing: '-0.02rem',
            lineHeight: 1.5,
            fontFamily: ['Inter'].join(','),
        },
        h4: {
            fontSize: '1.45rem',
            fontWeight: 600,
            letterSpacing: '-0.01rem',
            lineHeight: 1,
            fontFamily: ['Inter'].join(','),
        },
        h5: {
            fontSize: '1.55rem',
            fontWeight: 500,
            letterSpacing: '-0.06rem',
            lineHeight: 1.3,
            fontFamily: ['Inter'].join(','),
        },
        h6: {
            fontSize: '2.8rem',
            fontWeight: 600,
            letterSpacing: '-0.06rem',
            lineHeight: 1.2,
            fontFamily: ['Inter'].join(','),
        },
        body1: {
            fontSize: '1.15rem',
            fontWeight: 400,
            fontFamily: ['Inter'].join(','),
        },
        body2: {
            fontSize: '1.12rem',
            fontWeight: 400,
            fontFamily: ['Inter'].join(','),
        },
        body3: {
            fontSize: '1rem',
            lineHeight: '1.7rem',
            fontFamily: ['Inter'].join(','),
        },
        body4: {
            fontSize: '0.8rem',
        },
        button: {
            fontSize: '0.8rem',
            fontWeight: 600,
            fontFamily: ['Inter'].join(','),
        },
        caption: {
            fontSize: '0.75rem',
            fontFamily: ['Inter'].join(','),
        },
        body5: {
            fontSize: '0.9rem',
            fontFamily: ['Inter'].join(','),
        },
    } as ExtendedTypographyOptions,
    components: {
        // Name of the component
        MuiButtonBase: {
            defaultProps: {
                // The props to change the default for.
                disableRipple: true, // No more ripple, on the whole application 💣!
            },
        },
    },
}

let muiThemeLight = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#F4F4F2',
            paper: '#E8E8E8',
        },
        secondary: {
            main: '#fff',
        },
        primary: {
            main: '#233228',
        },
        text: {
            primary: '#000',
        },
    },
    ...baseTheme,
    typography: {
        ...baseTheme.typography,
    },
})

muiThemeLight = responsiveFontSizes(muiThemeLight, {
    factor: 2,
})

let muiThemeDark = createTheme({
    palette: {
        mode: 'dark',
        text: {
            primary: '#FFFFFF', // Blanc pour le texte principal
        },
        primary: {
            main: '#a594fd', // Bleu primaire
        },
        background: {
            default: '#000000', // Gris foncé pour le fond par défaut
            paper: '#101010', // Gris légèrement plus clair pour le fond du papier
        },
    },
    ...baseTheme, // Assurez-vous d'inclure vos autres paramètres de thème de base ici
    typography: {
        ...baseTheme.typography, // Vous pouvez personnaliser la typographie si nécessaire
    },
})

muiThemeDark = responsiveFontSizes(muiThemeDark, { factor: 2 })

export { muiThemeLight, muiThemeDark }
