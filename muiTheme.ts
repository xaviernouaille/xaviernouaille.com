import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { TypographyOptions } from '@mui/material/styles/createTypography'

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        body3: true
    }
}

interface ExtendedTypographyOptions extends TypographyOptions {
    body3: React.CSSProperties
}

const baseTheme = {
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 1024,
            lg: 1200,
            xl: 1570,
        },
    },
    typography: {
        fontFamily: ['Apercu'].join(','),
        h2: {
            fontSize: '4.68rem',
            fontWeight: 'bold',
        },
        h3: {
            fontSize: '3.9rem',
            fontWeight: 'bold',
        },
        body1: {
            fontSize: '1.125rem',
        },
        body2: {
            fontSize: '1rem',
        },
        body3: {
            fontSize: '0.9rem',
            lineHeight: '1.7rem',
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
            main: '#064663',
        },
        text: {
            primary: '#000',
        },
    },
    ...baseTheme,
    typography: {
        h6: {
            color: '#064663',
            fontSize: '1.125rem',
            fontWeight: 600,
        },
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
            primary: 'rgb(204, 204, 204)',
        },
        primary: {
            main: '#65FFDA',
        },
        secondary: {
            main: '#333333',
        },
        background: {
            default: '#000',
            paper: '#1F1F1F',
        },
    },
    ...baseTheme,
    typography: {
        h6: {
            color: '#65FFDA',
            fontSize: '1rem',
            fontWeight: 600,
        },
        ...baseTheme.typography,
    },
})

muiThemeDark = responsiveFontSizes(muiThemeDark, { factor: 2 })

export { muiThemeLight, muiThemeDark }
