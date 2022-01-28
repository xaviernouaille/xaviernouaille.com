import useDarkMode from './useDarkMode'
import { HiOutlineSun, HiMoon } from 'react-icons/hi'
import { ReactElement } from 'react'

const Toggle = (): ReactElement=> {
  const {isDark, setIsDark} = useDarkMode()

  return (
    <button aria-label='toggle' onClick={() => setIsDark(!isDark)}>
      {isDark ? <HiOutlineSun className='h-6 w-6' /> : <HiMoon className='h-6 w-6' />}
    </button>
  )
}

export default Toggle