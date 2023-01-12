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
            lg: 1200,
            xl: 1570,
        },
    },
    typography: {
        fontFamily: ['SoleSans'].join(','),
        h2: {
            fontSize: '3.8rem',
            fontWeight: 400,
            letterSpacing: '-0.06rem',
            lineHeight: 1,
        },
        h3: {
            fontSize: '1.8rem',
            fontWeight: 400,
            letterSpacing: '-0.06rem',
            lineHeight: 1,
        },
        h4: {
            fontSize: '1.45rem',
            fontWeight: 400,
            letterSpacing: '-0.06rem',
            lineHeight: 1,
        },
        h5: {
            fontSize: '2.75rem',
            fontWeight: 400,
            letterSpacing: '-0.06rem',
            lineHeight: 1,
        },
        h6: {
            fontSize: '1.3rem',
            fontWeight: 400,
            letterSpacing: '-0.06rem',
            lineHeight: 1.2,
        },
        body1: {
            fontSize: '1.125rem',
            fontWeight: 300,
        },
        body2: {
            fontSize: '1.1rem',
        },
        body3: {
            fontSize: '0.9rem',
            lineHeight: '1.7rem',
        },
        body4: {
            fontSize: '1.03rem',
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
            paper: '#0A0A0A',
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
