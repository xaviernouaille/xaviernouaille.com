import { useDarkMode } from './useDarkMode'
import { HiSun, HiMoon } from 'react-icons/hi'

export default function Toggle() {
  const [isDark, setIsDark] = useDarkMode()

  return (
    <button aria-label='toggle' onClick={() => setIsDark(!isDark)}>
      {isDark ? <HiSun className='h-6 w-6' /> : <HiMoon className='h-6 w-6' />}
    </button>
  )
}
