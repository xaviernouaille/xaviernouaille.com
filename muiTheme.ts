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
            md: 933,
            lg: 1120,
            xl: 1570,
        },
    },
    typography: {
        fontFamily: 'Inter',
        h1: {
            fontSize: '2.6rem',
            fontWeight: 600,
            lineHeight: '1.5',
            fontFamily: ['Inter'].join(','),
        },
        h2: {
            fontSize: '1.8rem',
            fontWeight: 600,
            lineHeight: 1.5,
            fontFamily: ['Inter'].join(','),
        },
        h3: {
            fontSize: '1.25rem',
            fontWeight: 600,
            lineHeight: 1.5,
            fontFamily: ['Inter'].join(','),
        },
        body1: {
            fontSize: '1.125rem',
            fontWeight: 400,
            lineHeight: 2,
            fontFamily: ['Inter'].join(','),
        },
        body2: {
            fontSize: '1rem',
            fontWeight: 500,
            lineHeight: 1,
            fontFamily: ['Inter'].join(','),
        },
        body3: {
            fontSize: '0.9rem',
            fontWeight: 400,
            lineHeight: 1,
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
            main: 'rgba(156,163,175,.9)', // Bleu primaire
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
