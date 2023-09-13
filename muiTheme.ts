import { createTheme, responsiveFontSizes } from '@mui/material/styles'
import { TypographyOptions } from '@mui/material/styles/createTypography'

declare module '@mui/material/Typography' {
    interface TypographyPropsVariantOverrides {
        body3: true
        body4: true
    }
}

interface ExtendedTypographyOptions extends TypographyOptions {
    body3: React.CSSProperties
    body4: React.CSSProperties
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
        fontFamily: ['Merriweather'].join(','),
        h1: {
            fontSize: '3.4rem',
            fontWeight: 600,
            letterSpacing: '-0.06rem',
            lineHeight: 1,
            fontFamily: ['Inter'].join(','),
        },
        h2: {
            fontSize: '1.9rem',
            fontWeight: 500,
            lineHeight: 1.5,
            fontFamily: ['Inter'].join(','),
        },
        h4: {
            fontSize: '1.45rem',
            fontWeight: 500,
            letterSpacing: '-0.06rem',
            lineHeight: 1,
            fontFamily: ['Inter'].join(','),
        },
        h5: {
            fontSize: '1.4rem',
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
            fontSize: '1.2rem',
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
        caption: {
            fontSize: '0.75rem',
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
            paper: '#0A0A0A',
        },
    },
    ...baseTheme,
    typography: {
        ...baseTheme.typography,
    },
})

muiThemeDark = responsiveFontSizes(muiThemeDark, { factor: 2 })

export { muiThemeLight, muiThemeDark }
