import { useCallback, useState } from 'react'
import DEFAULT_THEME from '@constants/theme'

export const isInitialTheme = (): 'dark' | 'light' => {
    if (typeof window === 'undefined') {
        return DEFAULT_THEME
    }
    const getThemeFromOS = window.matchMedia(
        '(prefers-color-scheme: dark)'
    ).matches
    if (getThemeFromOS) return 'dark'
    else return DEFAULT_THEME
}

const useSwitchTheme = (): ['light' | 'dark', () => void] => {
    const [theme, setTheme] = useState<'light' | 'dark'>(isInitialTheme())

    const toggleTheme = useCallback(() => {
        setTheme((state) => (state === 'light' ? 'dark' : 'light'))
    }, [])
    return [theme, toggleTheme]
}

export default useSwitchTheme
