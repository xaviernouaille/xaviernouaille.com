import { useCallback, useState } from 'react'

const PREFRED_THEME = 'dark'

export const isInitialTheme = (): 'dark' | 'light' => {
    if (typeof window === 'undefined') {
        return PREFRED_THEME
    }
    // const getThemeFromLocalStorage = window.localStorage.getItem('theme')
    // console.log(getThemeFromLocalStorage)
    // if (
    //     getThemeFromLocalStorage &&
    //     (getThemeFromLocalStorage === 'light' ||
    //         getThemeFromLocalStorage === 'dark')
    // )
    //     return getThemeFromLocalStorage
    const getThemeFromOS = window.matchMedia(
        '(prefers-color-scheme: dark)'
    ).matches
    if (getThemeFromOS) return 'dark'
    else return PREFRED_THEME
}

const useSwitchTheme = (): ['light' | 'dark', () => void] => {
    const [theme, setTheme] = useState<'light' | 'dark'>(isInitialTheme())

    const toggleTheme = useCallback(() => {
        setTheme((state) => (state === 'light' ? 'dark' : 'light'))
    }, [])
    return [theme, toggleTheme]
}

export default useSwitchTheme
