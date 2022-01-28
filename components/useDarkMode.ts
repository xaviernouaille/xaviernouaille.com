import { useEffect, useState } from "react"
import { Dispatch, SetStateAction } from "react"

interface IHooksReturnType{
  isDark: boolean;
  setIsDark: Dispatch<SetStateAction<boolean>>;
}

const useDarkMode = (): IHooksReturnType => {
    const prefersDarkMode: boolean = true
    const [
      isEnabled, 
      setIsEnabled] = useState<boolean>(true)
  
    const enabled: boolean = 
      isEnabled === undefined ? prefersDarkMode : isEnabled
  
    useEffect(() => {
      if (window === undefined) return
      const root = window.document.documentElement
      root.classList.remove(enabled ? 'light' : 'dark')
      root.classList.add(enabled ? 'dark' : 'light')
    }, [enabled])
  
    return {
      isDark: enabled,
      setIsDark: setIsEnabled
    }
  }
  
  export default useDarkMode